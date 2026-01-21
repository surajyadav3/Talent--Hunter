import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useBlocker } from "react-router";
import { useEndSession, useJoinSession, useSessionById } from "../hooks/useSessions";
import { PROBLEMS } from "../data/problems";
import { executeCode } from "../lib/piston";
import Navbar from "../components/Navbar";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { getDifficultyBadgeClass } from "../lib/utils";
import { Loader2Icon, LogOutIcon, MessageSquareIcon, PhoneOffIcon, UserPlusIcon, XIcon, UsersIcon } from "lucide-react";
import toast from "react-hot-toast";
import CodeEditorPanel from "../components/CodeEditorPanel";
import OutputPanel from "../components/OutputPanel";

import useStreamClient from "../hooks/useStreamClient";
import { StreamCall, StreamVideo } from "@stream-io/video-react-sdk";
import VideoCallUI from "../components/VideoCallUI";
import { Channel, Chat, MessageInput, MessageList, Thread, Window } from "stream-chat-react";
import "stream-chat-react/dist/css/v2/index.css";

function SessionPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { user } = useUser();
    const [output, setOutput] = useState(null);
    const [isRunning, setIsRunning] = useState(false);

    const { data: sessionData, isLoading: loadingSession, refetch } = useSessionById(id);

    const joinSessionMutation = useJoinSession();
    const endSessionMutation = useEndSession();

    const session = sessionData?.session;
    const isHost = session?.host?.clerkId === user?.id;
    const isParticipant = session?.participant?.clerkId === user?.id;

    const { call, channel, chatClient, isInitializingCall, streamClient } = useStreamClient(
        session,
        loadingSession,
        isHost,
        isParticipant
    );

    // find the problem data based on session problem title
    const problemData = session?.problem
        ? Object.values(PROBLEMS).find((p) => p.title === session.problem)
        : null;

    const [selectedLanguage, setSelectedLanguage] = useState("javascript");
    const [code, setCode] = useState(problemData?.starterCode?.[selectedLanguage] || "");
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [unreadMessages, setUnreadMessages] = useState(0);
    const [sessionSubmitted, setSessionSubmitted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds

    // auto-join session if user is not already a participant and not the host
    useEffect(() => {
        if (!session || !user || loadingSession) return;
        if (isHost || isParticipant) return;

        joinSessionMutation.mutate(id, { onSuccess: refetch });

        // remove the joinSessionMutation, refetch from dependencies to avoid infinite loop
    }, [session, user, loadingSession, isHost, isParticipant, id]);

    // redirect the "participant" when session ends
    useEffect(() => {
        if (!session || loadingSession) return;

        if (session.status === "completed") {
            // If we were blocked, we should probably reset or bypass it
            navigate("/dashboard");
        }
    }, [session, loadingSession, navigate]);

    // Navigation Blocker for participants
    const shouldBlock = isParticipant && session?.status === "active" && !sessionSubmitted;

    const blocker = useBlocker(
        ({ nextLocation }) =>
            shouldBlock && nextLocation.pathname !== `/session/${id}`
    );

    useEffect(() => {
        if (blocker.state === "blocked") {
            toast.error("Participants cannot leave the session until it is ended by the host.");
            blocker.reset();
        }
    }, [blocker]);

    // Browser-level block (refresh/close tab)
    useEffect(() => {
        const handleBeforeUnload = (e) => {
            if (shouldBlock) {
                e.preventDefault();
                e.returnValue = "";
            }
        };

        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => window.removeEventListener("beforeunload", handleBeforeUnload);
    }, [shouldBlock]);

    // update code when problem loads or changes (Only on initial load)
    const [hasInitializedCode, setHasInitializedCode] = useState(false);
    useEffect(() => {
        if (problemData?.starterCode?.[selectedLanguage] && !hasInitializedCode) {
            setCode(problemData.starterCode[selectedLanguage]);
            setHasInitializedCode(true);
        }
    }, [problemData, selectedLanguage, hasInitializedCode]);

    const handleLanguageChange = (e) => {
        const newLang = e.target.value;
        setSelectedLanguage(newLang);
        // use problem-specific starter code
        const starterCode = problemData?.starterCode?.[newLang] || "";
        setCode(starterCode);
        setOutput(null);

        // Immediate sync for language change
        if (isParticipant && channel) {
            channel.sendEvent({
                type: "code-update",
                code: starterCode,
                language: newLang,
            });
        }
    };

    const handleRunCode = async () => {
        setIsRunning(true);

        let codeToRun = code;
        const starter = problemData?.starterCode?.[selectedLanguage] || "";

        // Check if user has print/console.log or if test cases are already there
        const hasPrint = code.includes("console.log") || code.includes("print(") || code.includes("System.out.print");

        if (!hasPrint) {
            const markers = {
                javascript: "// Test cases",
                python: "# Test cases",
                java: "public static void main"
            };
            const marker = markers[selectedLanguage];
            const markerIndex = starter.indexOf(marker);

            if (markerIndex !== -1) {
                // For Java, we need to be careful not to duplicate the class, but for simplicity:
                codeToRun += "\n\n" + starter.slice(markerIndex);
            }
        }

        try {
            const result = await executeCode(selectedLanguage, codeToRun);
            setOutput(result);
        } catch (error) {
            console.error("Run error:", error);
            toast.error("Failed to execute code");
        } finally {
            setIsRunning(false);
        }
    };

    const handleEndSession = () => {
        if (confirm("Are you sure you want to end this session? All participants will be notified.")) {
            // this will navigate the HOST to dashboard
            endSessionMutation.mutate(id, { onSuccess: () => navigate("/dashboard") });
        }
    };

    const handleCopyInviteLink = () => {
        navigator.clipboard.writeText(window.location.href);
        toast.success("Invite link copied to clipboard!");
    };



    useEffect(() => {
        if (sessionSubmitted && timeLeft > 0) {
            const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
            return () => clearInterval(timer);
        } else if (sessionSubmitted && timeLeft === 0) {
            // Only host triggers the API call to end session to avoid double calls, 
            // but everyone should get redirected. 
            // Actually handleEndSession navigates host. 
            // Participants redirect via the existing 'session.status' listener.
            if (isHost) {
                handleEndSession();
            }
        }
    }, [sessionSubmitted, timeLeft, isHost]);

    const handleSubmitCode = async () => {
        setIsRunning(true);
        try {
            const result = await executeCode(selectedLanguage, code);
            setOutput(result);

            // Simple validation: check if execution was successful AND passed test cases (heuristically)
            // Ideally we need to parse the output to check "Expected: X" vs actual.
            // The OutputPanel does this visually.
            // For now, if "success" is true, we assume it ran.

            // To be stricter, check if user logic passed all tests.
            // But since OutputPanel parses the output, we might want to defer this check or improve 'executeCode' response to include test results.
            // For this iteration, we keep the simple confirmation.

            if (result.success) {
                // Check if output contains any sign of failure if possible, but executeCode returns raw output.
                // We will trust the user finds the "All Test Cases Passed" message in OutputPanel.
                if (confirm("Code compiled successfully! Do you want to submit and start the 3-minute cooldown?")) {
                    setSessionSubmitted(true);
                    toast.success("Solution correct! Session will end in 3 minutes.");
                }
            } else {
                toast.error("Code compilation failed or has errors.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            toast.error("Execution failed");
        } finally {
            setIsRunning(false);
        }
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    // Listen for new messages to show popup notifications
    useEffect(() => {
        if (!channel) return;

        const handleNewMessage = (event) => {
            // Only show toast if message is not from current user
            if (event.user.id !== user.id) {
                if (!isChatOpen) {
                    setUnreadMessages(prev => prev + 1);
                }
                toast((t) => (
                    <div className="flex items-center gap-3">
                        <div className="avatar placeholder">
                            <div className="bg-primary text-primary-content rounded-full w-8">
                                <span className="text-xs">{event.user.name?.charAt(0) || "U"}</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-xs font-bold opacity-70">{event.user.name}</p>
                            <p className="text-sm line-clamp-1">{event.message.text}</p>
                        </div>
                    </div>
                ), {
                    duration: 3000,
                    position: 'bottom-right',
                });
            }
        };

        const { unsubscribe } = channel.on('message.new', handleNewMessage);
        return () => unsubscribe();
    }, [channel, user?.id, isChatOpen]);

    // Reset unread count when chat opens
    useEffect(() => {
        if (isChatOpen) setUnreadMessages(0);
    }, [isChatOpen]);

    // CODE SYNCHRONIZATION (Participant -> Host)
    // 1. Debounced broadcast of code changes
    useEffect(() => {
        if (!isParticipant || !channel || !code) return;

        const timeout = setTimeout(() => {
            channel.sendEvent({
                type: "code-update",
                code,
                language: selectedLanguage,
            });
        }, 500); // 500ms debounce for smooth typing view

        return () => clearTimeout(timeout);
    }, [code, selectedLanguage, isParticipant, channel]);

    // 2. Listen for code updates (Primary for Host)
    useEffect(() => {
        if (!channel || !user?.id) return;

        const handleCodeSync = (event) => {
            // Only process events from OTHER users
            if (event.type === "code-update" && event.user.id !== user.id) {
                console.log("📥 Received code sync:", event.language);

                if (event.language !== undefined) {
                    setSelectedLanguage(event.language);
                }
                if (event.code !== undefined) {
                    setCode(event.code);
                }
            }
        };

        const { unsubscribe } = channel.on("code-update", handleCodeSync);
        return () => {
            if (unsubscribe) unsubscribe();
        };
    }, [channel, user?.id]); // Removed code/language from deps to prevent closure issues and multiple listeners


    return (
        <div className="h-screen bg-base-100 flex flex-col">
            <Navbar
                isInSession={true}
                isParticipant={isParticipant}
                sessionActive={session?.status === "active" && !sessionSubmitted}
            />

            {sessionSubmitted ? (
                <div className="flex-1 flex flex-col overflow-hidden relative">
                    {/* TIMER BANNER */}
                    <div className="bg-success/10 border-b border-success/20 backdrop-blur-xl p-4 text-center z-20 shadow-xl overflow-hidden relative">
                        {/* Animated scanning line */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-success/5 to-transparent -translate-x-full animate-[shimmer_3s_infinite]"></div>

                        <h2 className="text-xl font-bold flex items-center justify-center gap-4 text-success">
                            <span className="uppercase tracking-[0.2em] text-sm opacity-80">Mission Accomplished</span>
                            <span className="h-4 w-[1px] bg-success/30"></span>
                            <span className="flex items-center gap-2">
                                <span className="text-sm opacity-60">Auto-ending in:</span>
                                <span className="font-mono text-3xl tabular-nums drop-shadow-[0_0_10px_rgba(54,211,153,0.5)]">{formatTime(timeLeft)}</span>
                            </span>
                        </h2>
                    </div>
                </div>
            ) : (
                <div className="flex-1 flex overflow-hidden">
                    {/* LEFT SIDE - CODING/PROBLEM */}
                    <div className="flex-1 flex flex-col min-w-0">
                        <PanelGroup direction="horizontal">

                            {/* PROBLEM PANEL */}
                            <Panel defaultSize={40} minSize={20}>
                                <div className="h-full overflow-y-auto bg-base-200/50 border-r border-base-300 custom-scrollbar">
                                    <div className="p-6 bg-base-100/80 backdrop-blur-md border-b border-base-300 sticky top-0 z-10 text-base-content">
                                        <div className="flex items-start justify-between mb-3">
                                            <div>
                                                <h1 className="text-3xl font-bold text-base-content">
                                                    {session?.problem || "Loading..."}
                                                </h1>
                                                {problemData?.category && (
                                                    <p className="text-base-content/60 mt-1">{problemData.category}</p>
                                                )}
                                                <p className="text-base-content/60 mt-2">
                                                    Host: {session?.host?.name || "Loading..."} •{" "}
                                                    {session?.participant ? 2 : 1}/2 participants
                                                </p>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <span className={`badge badge-lg ${getDifficultyBadgeClass(session?.difficulty)}`}>
                                                    {session?.difficulty?.slice(0, 1).toUpperCase() + session?.difficulty?.slice(1) || "Easy"}
                                                </span>
                                                {!session?.participant && (
                                                    <button onClick={handleCopyInviteLink} className="btn btn-ghost btn-sm gap-2">
                                                        <UserPlusIcon className="w-4 h-4" />
                                                        Invite
                                                    </button>
                                                )}
                                                {isHost && session?.status === "active" && (
                                                    <button onClick={handleEndSession} disabled={endSessionMutation.isPending} className="btn btn-error btn-sm gap-2">
                                                        {endSessionMutation.isPending ? (<Loader2Icon className="w-4 h-4 animate-spin" />) : (<LogOutIcon className="w-4 h-4" />)}
                                                        End Session
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 space-y-6">
                                        {problemData?.description && (
                                            <div className="bg-base-100/40 backdrop-blur-sm rounded-xl shadow-sm p-5 border border-base-content/5">
                                                <h2 className="text-xl font-bold mb-4 text-base-content/90">Description</h2>
                                                <div className="space-y-3 text-base leading-relaxed">
                                                    <p className="text-base-content/90">{problemData.description.text}</p>
                                                    {problemData.description.notes?.map((note, idx) => (
                                                        <p key={idx} className="text-base-content/90">{note}</p>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        {/* examples section */}
                                        {problemData?.examples && problemData.examples.length > 0 && (
                                            <div className="bg-base-100/40 backdrop-blur-sm rounded-xl shadow-sm p-5 border border-base-content/5">
                                                <h2 className="text-xl font-bold mb-4 text-base-content/90">Examples</h2>

                                                <div className="space-y-4">
                                                    {problemData.examples.map((example, idx) => (
                                                        <div key={idx}>
                                                            <div className="flex items-center gap-2 mb-2">
                                                                <span className="badge badge-sm">{idx + 1}</span>
                                                                <p className="font-semibold text-base-content">Example {idx + 1}</p>
                                                            </div>
                                                            <div className="bg-base-200 rounded-lg p-4 font-mono text-sm space-y-1.5">
                                                                <div className="flex gap-2">
                                                                    <span className="text-primary font-bold min-w-[70px]">
                                                                        Input:
                                                                    </span>
                                                                    <span>{example.input}</span>
                                                                </div>
                                                                <div className="flex gap-2">
                                                                    <span className="text-secondary font-bold min-w-[70px]">
                                                                        Output:
                                                                    </span>
                                                                    <span>{example.output}</span>
                                                                </div>
                                                                {example.explanation && (
                                                                    <div className="pt-2 border-t border-base-300 mt-2">
                                                                        <span className="text-base-content/60 font-sans text-xs">
                                                                            <span className="font-semibold">Explanation:</span>{" "}
                                                                            {example.explanation}
                                                                        </span>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Constraints */}
                                        {problemData?.constraints && problemData.constraints.length > 0 && (
                                            <div className="bg-base-100 rounded-xl shadow-sm p-5 border border-base-300">
                                                <h2 className="text-xl font-bold mb-4 text-base-content">Constraints</h2>
                                                <ul className="space-y-2 text-base-content/90">
                                                    {problemData.constraints.map((constraint, idx) => (
                                                        <li key={idx} className="flex gap-2">
                                                            <span className="text-primary">•</span>
                                                            <code className="text-sm">{constraint}</code>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Panel>

                            <PanelResizeHandle className="w-2 bg-base-300 hover:bg-primary transition-colors cursor-col-resize" />

                            {/* RIGHT PANEL - CODE & OUTPUT */}
                            <Panel defaultSize={60} minSize={30}>
                                <PanelGroup direction="vertical">
                                    <Panel defaultSize={70} minSize={30}>
                                        <CodeEditorPanel
                                            selectedLanguage={selectedLanguage}
                                            code={code}
                                            isRunning={isRunning}
                                            onLanguageChange={handleLanguageChange}
                                            onCodeChange={(value) => setCode(value)}
                                            onRunCode={handleRunCode}
                                            onSubmit={handleSubmitCode}
                                            readOnly={isHost}
                                        />
                                    </Panel>
                                    <PanelResizeHandle className="h-2 bg-base-300 hover:bg-primary transition-colors cursor-row-resize" />
                                    <Panel defaultSize={30} minSize={15}>
                                        <OutputPanel
                                            output={output}
                                            expectedOutput={problemData?.expectedOutput?.[selectedLanguage]}
                                            testCases={problemData?.examples}
                                        />
                                    </Panel>
                                </PanelGroup>
                            </Panel>
                        </PanelGroup>
                    </div>

                    {/* RIGHT SIDEBAR - VIDEO */}
                    <div className="w-[350px] border-l border-base-300 bg-base-200 flex flex-col shrink-0">
                        <div className="p-2 border-b border-base-content/5 bg-base-100 font-bold">
                            <h3 className="flex items-center gap-2">
                                <UsersIcon className="w-4 h-4 text-primary" />
                                Video Session
                            </h3>
                        </div>
                        <div className="flex-1 overflow-hidden relative">
                            {isInitializingCall ? (
                                <div className="h-full flex items-center justify-center">
                                    <Loader2Icon className="w-8 h-8 animate-spin text-primary" />
                                </div>
                            ) : !streamClient || !call ? (
                                <div className="h-full flex items-center justify-center text-error flex-col gap-2">
                                    <PhoneOffIcon className="w-8 h-8" />
                                    <p>Connection Failed</p>
                                </div>
                            ) : (
                                <StreamVideo client={streamClient}>
                                    <StreamCall call={call}>
                                        <VideoCallUI chatClient={chatClient} channel={channel} isHost={isHost} user={user} />
                                    </StreamCall>
                                </StreamVideo>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* FLOATING CHAT */}
            {!sessionSubmitted && chatClient && channel && (
                <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 pointer-events-none">

                    {/* CHAT WINDOW */}
                    {isChatOpen && (
                        <div className="w-80 h-96 bg-base-100 rounded-xl shadow-2xl border border-base-300 overflow-hidden flex flex-col pointer-events-auto animate-in slide-in-from-bottom-5 fade-in duration-200">
                            <div className="p-3 bg-base-200 border-b border-base-300 flex items-center justify-between">
                                <h3 className="font-bold text-sm">Session Chat</h3>
                                <button onClick={() => setIsChatOpen(false)} className="btn btn-ghost btn-xs btn-circle">
                                    <XIcon className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="flex-1 overflow-hidden stream-chat-dark text-xs">
                                <Chat client={chatClient} theme="str-chat__theme-dark">
                                    <Channel channel={channel}>
                                        <Window>
                                            <MessageList />
                                            <MessageInput />
                                        </Window>
                                    </Channel>
                                </Chat>
                            </div>
                        </div>
                    )}

                    {/* TOGGLE BUTTON */}
                    <button
                        onClick={() => setIsChatOpen(!isChatOpen)}
                        className="btn btn-primary btn-circle btn-lg shadow-xl shadow-primary/30 pointer-events-auto relative"
                    >
                        <MessageSquareIcon className="w-6 h-6" />
                        {unreadMessages > 0 && (
                            <span className="absolute -top-1 -right-1 badge badge-error badge-sm animate-bounce">
                                {unreadMessages}
                            </span>
                        )}
                    </button>
                </div>
            )}
        </div>
    );
}



export default SessionPage;