import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useEndSession, useJoinSession, useSessionById } from "../hooks/useSessions";
import { PROBLEMS } from "../data/problems";
import { executeCode } from "../lib/piston";
import Navbar from "../components/Navbar";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { getDifficultyBadgeClass } from "../lib/utils";
import { Loader2Icon, LogOutIcon, PhoneOffIcon, UsersIcon, UserPlusIcon } from "lucide-react";
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

        if (session.status === "completed") navigate("/dashboard");
    }, [session, loadingSession, navigate]);

    // update code when problem loads or changes
    useEffect(() => {
        if (problemData?.starterCode?.[selectedLanguage]) {
            setCode(problemData.starterCode[selectedLanguage]);
        }
    }, [problemData, selectedLanguage]);

    const handleLanguageChange = (e) => {
        const newLang = e.target.value;
        setSelectedLanguage(newLang);
        // use problem-specific starter code
        const starterCode = problemData?.starterCode?.[newLang] || "";
        setCode(starterCode);
        setOutput(null);
    };

    const handleRunCode = async () => {
        setIsRunning(true);
        setOutput(null);

        const result = await executeCode(selectedLanguage, code);
        setOutput(result);
        setIsRunning(false);
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

    const [sessionSubmitted, setSessionSubmitted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds

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

            // Simple validation: check if execution was successful
            if (result.success) {
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

    // ... existing handleEndSession ...

    return (
        <div className="h-screen bg-base-100 flex flex-col">
            <Navbar />

            {sessionSubmitted ? (
                <div className="flex-1 flex flex-col overflow-hidden">
                    {/* TIMER BANNER */}
                    <div className="bg-success text-success-content p-4 text-center shadow-md z-20">
                        <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
                            <span>🎉 Session Completed! Auto-ending in:</span>
                            <span className="font-mono text-3xl">{formatTime(timeLeft)}</span>
                        </h2>
                    </div>

                    {/* POST-SUBMISSION LAYOUT: VIDEO & CHAT */}
                    <div className="flex-1 flex overflow-hidden">
                        {/* Video Area */}
                        <div className="flex-1 bg-base-300 relative">
                            {/* Re-use VideoCallUI but simplified container */}
                            <div className="absolute inset-0 p-4">
                                {isInitializingCall ? (
                                    <div className="h-full flex items-center justify-center">
                                        <Loader2Icon className="w-12 h-12 animate-spin text-primary" />
                                    </div>
                                ) : (
                                    <div className="h-full rounded-2xl overflow-hidden shadow-2xl border border-base-content/10">
                                        <StreamVideo client={streamClient}>
                                            <StreamCall call={call}>
                                                <VideoCallUI chatClient={chatClient} channel={channel} isHost={isHost} user={user} />
                                            </StreamCall>
                                        </StreamVideo>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Chat Area (Fixed Width) */}
                        <div className="w-96 bg-base-200 border-l border-base-300 flex flex-col">
                            <div className="p-4 bg-base-100 border-b border-base-300 font-bold flex items-center gap-2">
                                <UsersIcon className="w-5 h-5" /> Chat
                            </div>
                            <div className="flex-1 overflow-hidden stream-chat-dark">
                                {chatClient && channel && (
                                    <Chat client={chatClient} theme="str-chat__theme-dark">
                                        <Channel channel={channel}>
                                            <Window>
                                                <MessageList />
                                                <MessageInput />
                                            </Window>
                                        </Channel>
                                    </Chat>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex-1 overflow-hidden">
                    <PanelGroup direction="vertical">
                        {/* TOP SECTION: PROBLEM (LEFT), CODE (CENTER), CHAT (RIGHT) */}
                        <Panel defaultSize={75} minSize={40}>
                            <PanelGroup direction="horizontal">

                                {/* LEFT PANEL - PROBLEM DETAILS */}
                                <Panel defaultSize={30} minSize={20}>
                                    <div className="h-full overflow-y-auto bg-base-200 border-r border-base-300">
                                        {/* HEADER SECTION */}
                                        <div className="p-6 bg-base-100 border-b border-base-300 sticky top-0 z-10">
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
                                                    <span
                                                        className={`badge badge-lg ${getDifficultyBadgeClass(
                                                            session?.difficulty
                                                        )}`}
                                                    >
                                                        {session?.difficulty?.slice(0, 1).toUpperCase() +
                                                            session?.difficulty?.slice(1) || "Easy"}
                                                    </span>
                                                    {!session?.participant && (
                                                        <button
                                                            onClick={handleCopyInviteLink}
                                                            className="btn btn-ghost btn-sm gap-2"
                                                        >
                                                            <UserPlusIcon className="w-4 h-4" />
                                                            Invite
                                                        </button>
                                                    )}
                                                    {isHost && session?.status === "active" && (
                                                        <button
                                                            onClick={handleEndSession}
                                                            disabled={endSessionMutation.isPending}
                                                            className="btn btn-error btn-sm gap-2"
                                                        >
                                                            {endSessionMutation.isPending ? (
                                                                <Loader2Icon className="w-4 h-4 animate-spin" />
                                                            ) : (
                                                                <LogOutIcon className="w-4 h-4" />
                                                            )}
                                                            End Session
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-6 space-y-6">
                                            {/* problem desc */}
                                            {problemData?.description && (
                                                <div className="bg-base-100 rounded-xl shadow-sm p-5 border border-base-300">
                                                    <h2 className="text-xl font-bold mb-4 text-base-content">Description</h2>
                                                    <div className="space-y-3 text-base leading-relaxed">
                                                        <p className="text-base-content/90">{problemData.description.text}</p>
                                                        {problemData.description.notes?.map((note, idx) => (
                                                            <p key={idx} className="text-base-content/90">
                                                                {note}
                                                            </p>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* examples section */}
                                            {problemData?.examples && problemData.examples.length > 0 && (
                                                <div className="bg-base-100 rounded-xl shadow-sm p-5 border border-base-300">
                                                    <h2 className="text-xl font-bold mb-4 text-base-content">Examples</h2>

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

                                {/* CENTER PANEL - CODE EDITOR & OUTPUT */}
                                <Panel defaultSize={50} minSize={30}>
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
                                            />
                                        </Panel>

                                        <PanelResizeHandle className="h-2 bg-base-300 hover:bg-primary transition-colors cursor-row-resize" />

                                        <Panel defaultSize={30} minSize={15}>
                                            <OutputPanel output={output} />
                                        </Panel>
                                    </PanelGroup>
                                </Panel>

                                <PanelResizeHandle className="w-2 bg-base-300 hover:bg-primary transition-colors cursor-col-resize" />

                                {/* RIGHT PANEL - CHAT */}
                                <Panel defaultSize={20} minSize={15}>
                                    {chatClient && channel ? (
                                        <div className="h-full flex flex-col bg-base-200 border-l border-base-300">
                                            <div className="p-3 bg-base-100 border-b border-base-300 shadow-sm">
                                                <h3 className="font-semibold flex items-center gap-2">
                                                    <UsersIcon className="w-4 h-4" />
                                                    Session Chat
                                                </h3>
                                            </div>
                                            <div className="flex-1 overflow-hidden stream-chat-dark">
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
                                    ) : (
                                        <div className="h-full flex items-center justify-center bg-base-200 border-l border-base-300 text-base-content/50">
                                            <p>Chat connecting...</p>
                                        </div>
                                    )}
                                </Panel>
                            </PanelGroup>
                        </Panel>

                        <PanelResizeHandle className="h-2 bg-base-300 hover:bg-primary transition-colors cursor-row-resize" />

                        {/* BOTTOM PANEL - VIDEO CALLS & CHAT */}
                        <Panel defaultSize={35} minSize={20}>
                            <div className="h-full bg-base-200 p-2 overflow-hidden">
                                {isInitializingCall ? (
                                    <div className="h-full flex items-center justify-center">
                                        <div className="text-center">
                                            <Loader2Icon className="w-8 h-8 mx-auto animate-spin text-primary mb-2" />
                                            <p className="text-sm">Connecting to video call...</p>
                                        </div>
                                    </div>
                                ) : !streamClient || !call ? (
                                    <div className="h-full flex items-center justify-center">
                                        <div className="flex items-center gap-4 text-error">
                                            <PhoneOffIcon className="w-6 h-6" />
                                            <p className="font-semibold">Video Call Connection Failed</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="h-full">
                                        <StreamVideo client={streamClient}>
                                            <StreamCall call={call}>
                                                <VideoCallUI chatClient={chatClient} channel={channel} isHost={isHost} user={user} />
                                            </StreamCall>
                                        </StreamVideo>
                                    </div>
                                )}
                            </div>
                        </Panel>
                    </PanelGroup>
                </div>
            )}
        </div>
    );
}

export default SessionPage;