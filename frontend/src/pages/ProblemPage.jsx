import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { PROBLEMS } from "../data/problems";
import Navbar from "../components/Navbar";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import ProblemDescription from "../components/ProblemDescription";
import OutputPanel from "../components/OutputPanel";
import CodeEditorPanel from "../components/CodeEditorPanel";
import axiosInstance from "../lib/axios";

import toast from "react-hot-toast";
import confetti from "canvas-confetti";
import { useUserStatus } from "../hooks/useUserStatus";
import { LockIcon, SparklesIcon, ChevronLeftIcon, ChevronRightIcon, ListIcon, LayoutIcon, SettingsIcon, PlayIcon, CloudUploadIcon } from "lucide-react";

function ProblemPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: userData, isLoading: isUserLoading } = useUserStatus();

    const [currentProblemId, setCurrentProblemId] = useState("two-sum");
    const [selectedLanguage, setSelectedLanguage] = useState("javascript");
    const [code, setCode] = useState(PROBLEMS[currentProblemId].starterCode.javascript);
    const [output, setOutput] = useState(null);
    const [isRunning, setIsRunning] = useState(false);

    const currentProblem = PROBLEMS[currentProblemId];
    const isPremiumLocked = currentProblem?.isPremium && !userData?.isPremium;

    // update problem when URL param changes
    useEffect(() => {
        if (id && PROBLEMS[id]) {
            setCurrentProblemId(id);
            setCode(PROBLEMS[id].starterCode[selectedLanguage]);
            setOutput(null);
        }
    }, [id, selectedLanguage]);

    if (isUserLoading) return (
        <div className="h-screen bg-base-100 flex items-center justify-center">
            <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
    );

    const handleLanguageChange = (e) => {
        const newLang = e.target.value;
        setSelectedLanguage(newLang);
        setCode(currentProblem.starterCode[newLang]);
        setOutput(null);
    };

    const handleProblemChange = (newProblemId) => navigate(`/problem/${newProblemId}`);

    const triggerConfetti = () => {
        confetti({
            particleCount: 80,
            spread: 250,
            origin: { x: 0.2, y: 0.6 },
        });

        confetti({
            particleCount: 80,
            spread: 250,
            origin: { x: 0.8, y: 0.6 },
        });
    };

    const normalizeOutput = (output) => {
        // normalize output for comparison (trim whitespace, handle different spacing)
        return output
            .trim()
            .split("\n")
            .map((line) =>
                line
                    .trim()
                    // remove spaces after [ and before ]
                    .replace(/\[\s+/g, "[")
                    .replace(/\s+\]/g, "]")
                    // normalize spaces around commas to single space after comma
                    .replace(/\s*,\s*/g, ",")
            )
            .filter((line) => line.length > 0)
            .join("\n");
    };

    const handleRunCode = async () => {
        setIsRunning(true);
        setOutput(null);

        try {
             // Let the backend execute and judge against mock test cases
             const { data } = await axiosInstance.post('/submission/run', {
                 code: code,
                 language: selectedLanguage,
                 problemId: currentProblemId
             });
             
             setOutput(data); // this now holds { verdict, passed, failed, results: [...] }
             
             if (data.verdict === "Accepted") {
                 toast.success("All tests passed! Great job!");
             } else {
                 toast.error(`Tests failed: ${data.verdict}`);
             }
        } catch (error) {
             toast.error("Execution error!");
             setOutput({
                 verdict: "Server Error", 
                 error: error.response?.data?.message || error.message,
                 results: []
             });
        } finally {
             setIsRunning(false);
        }
    };
    
    const handleSubmitCode = async () => {
        setIsRunning(true);
        setOutput(null);

        try {
             // Let the backend execute and judge against full hidden testcases
             const { data } = await axiosInstance.post('/submission/submit', {
                 code: code,
                 language: selectedLanguage,
                 problemId: currentProblemId
             });
             
             setOutput(data); 
             
             if (data.verdict === "Accepted") {
                 triggerConfetti();
                 toast.success("Submission Accepted! Great job!");
             } else {
                 toast.error(`Submission failed: ${data.verdict}`);
             }
        } catch (error) {
             toast.error("Submission error!");
             setOutput({
                 verdict: "Server Error", 
                 error: error.response?.data?.message || error.message,
                 results: []
             });
        } finally {
             setIsRunning(false);
        }
    };

    return (
        <div className="h-screen bg-[#0a0a0a] text-[#eff1f6] flex flex-col font-sans overflow-hidden">
            {/* Custom LeetCode-like Navbar */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#282828] border-b border-[#3e3e3e]">
                <div className="flex items-center gap-4">
                    <img src="/logo.svg" alt="Logo" className="w-6 h-6 rounded" onError={(e) => { e.target.style.display = 'none'; }} />
                    <div className="flex items-center gap-1 bg-[#282828] hover:bg-[#3e3e3e] rounded px-3 py-1 cursor-pointer transition-colors border border-transparent hover:border-[#3e3e3e]">
                        <ListIcon className="w-4 h-4" />
                        <span className="text-sm font-semibold">Problem List</span>
                    </div>
                    <div className="flex items-center text-[#8a8a8a]">
                        <button className="p-1 hover:bg-[#3e3e3e] rounded hover:text-white transition-colors"><ChevronLeftIcon className="w-5 h-5" /></button>
                        <button className="p-1 hover:bg-[#3e3e3e] rounded hover:text-white transition-colors"><ChevronRightIcon className="w-5 h-5" /></button>
                    </div>
                </div>
                
                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 px-3 py-1 bg-[#3e3e3e]/50 text-[#eff1f6] hover:bg-[#3e3e3e] rounded transition-colors text-sm font-semibold" onClick={handleRunCode} disabled={isRunning}>
                        <PlayIcon className="w-4 h-4 fill-current text-[#2cbb5d]" />
                        Run
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1 bg-[#2cbb5d]/10 text-[#2cbb5d] hover:bg-[#2cbb5d]/20 rounded transition-colors text-sm font-semibold" onClick={handleSubmitCode} disabled={isRunning}>
                        <CloudUploadIcon className="w-4 h-4" />
                        Submit
                    </button>
                    <button className="p-1.5 text-[#8a8a8a] hover:bg-[#3e3e3e] rounded hover:text-white transition-colors"><LayoutIcon className="w-4 h-4" /></button>
                    <button className="p-1.5 text-[#8a8a8a] hover:bg-[#3e3e3e] rounded hover:text-white transition-colors"><SettingsIcon className="w-4 h-4" /></button>
                </div>
            </div>

            <div className="flex-1 w-full p-2 gap-2 flex relative">
                {isPremiumLocked && (
                    <div className="absolute inset-0 z-50 backdrop-blur-sm bg-base-100/60 flex items-center justify-center p-4">
                        <div className="max-w-md w-full p-8 rounded-3xl bg-base-100 border border-amber-500/20 shadow-2xl shadow-amber-500/10 text-center space-y-6">
                            <div className="size-20 bg-amber-500/10 rounded-2xl flex items-center justify-center mx-auto">
                                <LockIcon className="size-10 text-amber-500" />
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-3xl font-black tracking-tight">Premium Problem</h2>
                                <p className="text-base-content/60 leading-relaxed">
                                    This problem is only available to our <span className="text-amber-500 font-bold">Premium</span> members. Upgrade now to unlock 100+ exclusive coding challenges.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3 pt-4">
                                <button
                                    onClick={() => navigate("/pricing")}
                                    className="btn btn-primary btn-lg shadow-lg shadow-primary/20 flex items-center gap-2"
                                >
                                    <SparklesIcon className="size-5 fill-current" />
                                    Upgrade to Unlock
                                </button>
                                <button
                                    onClick={() => navigate("/problems")}
                                    className="btn btn-ghost"
                                >
                                    Back to Problems
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                <PanelGroup direction="horizontal">
                    {/* left panel- problem desc */}
                    <Panel defaultSize={45} minSize={30}>
                        <div className="h-full bg-[#282828] rounded-lg overflow-hidden border border-[#3e3e3e]">
                            <ProblemDescription
                                problem={currentProblem}
                                currentProblemId={currentProblemId}
                                onProblemChange={handleProblemChange}
                                allProblems={Object.values(PROBLEMS)}
                            />
                        </div>
                    </Panel>

                    <PanelResizeHandle className="w-2 hover:bg-[#3e3e3e] rounded transition-colors cursor-col-resize flex flex-col justify-center items-center">
                         <div className="w-0.5 h-6 bg-[#3e3e3e] rounded-full"></div>
                    </PanelResizeHandle>

                    {/* right panel- code editor & output */}
                    <Panel defaultSize={55} minSize={30}>
                        <PanelGroup direction="vertical">
                            {/* Top panel - Code editor */}
                            <Panel defaultSize={60} minSize={30}>
                                <div className="h-full bg-[#282828] rounded-lg overflow-hidden border border-[#3e3e3e]">
                                    <CodeEditorPanel
                                        selectedLanguage={selectedLanguage}
                                        code={code}
                                        isRunning={isRunning}
                                        onLanguageChange={handleLanguageChange}
                                        onCodeChange={setCode}
                                        onRunCode={handleRunCode}
                                        onSubmit={handleSubmitCode}
                                        submitLabel="Done"
                                    />
                                </div>
                            </Panel>

                            <PanelResizeHandle className="h-2 hover:bg-[#3e3e3e] rounded transition-colors cursor-row-resize flex justify-center items-center">
                                 <div className="w-6 h-0.5 bg-[#3e3e3e] rounded-full"></div>
                            </PanelResizeHandle>

                            {/* Bottom panel - Output Panel*/}

                            <Panel defaultSize={40} minSize={30}>
                                <div className="h-full bg-[#282828] rounded-lg overflow-hidden border border-[#3e3e3e]">
                                    <OutputPanel 
                                        output={output} 
                                        expectedOutput={currentProblem.expectedOutput[selectedLanguage]}
                                        testCases={currentProblem.examples}
                                    />
                                </div>
                            </Panel>
                        </PanelGroup>
                    </Panel>
                </PanelGroup>
            </div>
        </div>
    );
}

export default ProblemPage;