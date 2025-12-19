import { useParams, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useSessionById, useEndSession } from "../hooks/useSessions";
import { PROBLEMS } from "../data/problems";
import { useStream } from "../hooks/useStream";
import { StreamVideo } from "@stream-io/video-react-sdk";
import { Chat } from "stream-chat-react";
import { LogOutIcon } from "lucide-react";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "stream-chat-react/dist/css/v2/index.css";

import ProblemDescription from "../components/ProblemDescription";
import CodeEditorPanel from "../components/CodeEditorPanel";
import Navbar from "../components/Navbar";
import StreamingRoom from "../components/StreamingRoom";
import ChatSidebar from "../components/ChatSidebar";

export default function SessionPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: sessionData, isLoading: loadingSession, error } = useSessionById(id);
    const { videoClient, chatClient } = useStream();
    const endSessionMutation = useEndSession();

    const [selectedLanguage, setSelectedLanguage] = useState("javascript");
    const [code, setCode] = useState("");
    const [isRunning, setIsRunning] = useState(false);

    // Initialize code with problem's starter code
    useEffect(() => {
        if (sessionData?.session) {
            const problem = PROBLEMS[sessionData.session.problem];
            if (problem) {
                setCode(problem.starterCode[selectedLanguage]);
            }
        }
    }, [sessionData, selectedLanguage]);

    const isLoading = loadingSession || !videoClient || !chatClient;

    if (isLoading) return (
        <div className="h-screen flex items-center justify-center bg-base-300">
            <div className="flex flex-col items-center gap-4">
                <span className="loading loading-spinner loading-lg text-primary"></span>
                <p className="text-xs font-bold uppercase tracking-[0.3em] opacity-40">Initializing Coding Room</p>
            </div>
        </div>
    );

    if (error || !sessionData?.session) {
        return (
            <div className="h-screen flex flex-col items-center justify-center bg-base-300 gap-4">
                <h2 className="text-2xl font-bold">Session not found</h2>
                <button onClick={() => navigate("/dashboard")} className="btn btn-primary">Return to Dashboard</button>
            </div>
        );
    }

    const problem = PROBLEMS[sessionData.session.problem];

    return (
        <StreamVideo client={videoClient}>
            <Chat client={chatClient}>
                <div className="h-screen flex flex-col bg-base-300 overflow-hidden">
                    <Navbar />

                    {/* Session Header / Controls */}
                    <div className="bg-base-100 border-b border-base-content/5 px-6 py-3 flex items-center justify-between shadow-sm relative z-30">
                        <div className="flex items-center gap-4">
                            <div className="flex flex-col">
                                <h1 className="text-sm font-black uppercase tracking-widest text-primary flex items-center gap-2">
                                    <div className="size-2 bg-success rounded-full animate-pulse"></div>
                                    Live Session: {problem.title}
                                </h1>
                                <p className="text-[10px] font-bold text-base-content/40 uppercase tracking-tighter">
                                    Call ID: {sessionData.session.callId}
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => {
                                if (window.confirm("Are you sure you want to end this session?")) {
                                    endSessionMutation.mutate(id, {
                                        onSuccess: () => navigate("/dashboard")
                                    });
                                }
                            }}
                            className="btn btn-error btn-sm btn-outline gap-2"
                        >
                            <LogOutIcon className="size-4" />
                            End Session
                        </button>
                    </div>

                    <div className="flex-1 relative overflow-hidden">
                        <PanelGroup direction="horizontal">
                            {/* LEFT PANEL: Problem Description */}
                            <Panel defaultSize={25} minSize={20} className="bg-base-100">
                                <ProblemDescription
                                    problem={problem}
                                    currentProblemId={problem.id}
                                    allProblems={Object.values(PROBLEMS)}
                                    onProblemChange={() => { }} // Disabled for now during session
                                />
                            </Panel>

                            <PanelResizeHandle className="w-1.5 bg-base-300 hover:bg-primary/30 transition-colors cursor-col-resize" />

                            {/* CENTER PANEL: Code Editor */}
                            <Panel defaultSize={50} minSize={30}>
                                <CodeEditorPanel
                                    selectedLanguage={selectedLanguage}
                                    code={code}
                                    isRunning={isRunning}
                                    onLanguageChange={(e) => setSelectedLanguage(e.target.value)}
                                    onCodeChange={(val) => setCode(val)}
                                    onRunCode={() => setIsRunning(true)} // Mocking run for now
                                />
                            </Panel>

                            <PanelResizeHandle className="w-1.5 bg-base-300 hover:bg-primary/30 transition-colors cursor-col-resize" />

                            {/* RIGHT PANEL: Video & Chat */}
                            <Panel defaultSize={25} minSize={20} className="bg-base-200">
                                <div className="h-full flex flex-col border-l border-base-content/5">
                                    {/* VIDEO SECTION */}
                                    <div className="h-1/3 border-b border-base-content/10 bg-black overflow-hidden relative">
                                        <StreamingRoom session={sessionData.session} />
                                    </div>

                                    {/* CHAT SECTION */}
                                    <div className="flex-1 overflow-hidden">
                                        <ChatSidebar session={sessionData.session} />
                                    </div>
                                </div>
                            </Panel>
                        </PanelGroup>
                    </div>
                </div>
            </Chat>
        </StreamVideo>
    );
}
