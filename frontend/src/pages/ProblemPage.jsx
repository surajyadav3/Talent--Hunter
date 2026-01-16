import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { PROBLEMS } from "../data/problems";
import Navbar from "../components/Navbar";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import ProblemDescription from "../components/ProblemDescription";
import OutputPanel from "../components/OutputPanel";
import CodeEditorPanel from "../components/CodeEditorPanel";
import { executeCode } from "../lib/piston";

import toast from "react-hot-toast";
import confetti from "canvas-confetti";
import { useUserStatus } from "../hooks/useUserStatus";
import { LockIcon, SparklesIcon } from "lucide-react";

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

    if (isUserLoading) return (
        <div className="h-screen bg-base-100 flex items-center justify-center">
            <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
    );

    // update problem when URL param changes
    useEffect(() => {
        if (id && PROBLEMS[id]) {
            setCurrentProblemId(id);
            setCode(PROBLEMS[id].starterCode[selectedLanguage]);
            setOutput(null);
        }
    }, [id, selectedLanguage]);

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

    const checkIfTestsPassed = (actualOutput, expectedOutput) => {
        const normalizedActual = normalizeOutput(actualOutput);
        const normalizedExpected = normalizeOutput(expectedOutput);

        return normalizedActual == normalizedExpected;
    };

    const handleRunCode = async () => {
        setIsRunning(true);
        setOutput(null);

        const result = await executeCode(selectedLanguage, code);
        setOutput(result);
        setIsRunning(false);

        // check if code executed successfully and matches expected output

        if (result.success) {
            const expectedOutput = currentProblem.expectedOutput[selectedLanguage];
            const testsPassed = checkIfTestsPassed(result.output, expectedOutput);

            if (testsPassed) {
                triggerConfetti();
                toast.success("All tests passed! Great job!");
            } else {
                toast.error("Tests failed. Check your output!");
            }
        } else {
            toast.error("Code execution failed!");
        }
    };

    return (
        <div className="h-screen bg-base-100 flex flex-col">
            <Navbar />

            <div className="flex-1 relative">
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
                    <Panel defaultSize={40} minSize={30}>
                        <ProblemDescription
                            problem={currentProblem}
                            currentProblemId={currentProblemId}
                            onProblemChange={handleProblemChange}
                            allProblems={Object.values(PROBLEMS)}
                        />
                    </Panel>

                    <PanelResizeHandle className="w-2 bg-base-300 hover:bg-primary transition-colors cursor-col-resize" />

                    {/* right panel- code editor & output */}
                    <Panel defaultSize={60} minSize={30}>
                        <PanelGroup direction="vertical">
                            {/* Top panel - Code editor */}
                            <Panel defaultSize={70} minSize={30}>
                                <CodeEditorPanel
                                    selectedLanguage={selectedLanguage}
                                    code={code}
                                    isRunning={isRunning}
                                    onLanguageChange={handleLanguageChange}
                                    onCodeChange={setCode}
                                    onRunCode={handleRunCode}
                                />
                            </Panel>

                            <PanelResizeHandle className="h-2 bg-base-300 hover:bg-primary transition-colors cursor-row-resize" />

                            {/* Bottom panel - Output Panel*/}

                            <Panel defaultSize={30} minSize={30}>
                                <OutputPanel output={output} />
                            </Panel>
                        </PanelGroup>
                    </Panel>
                </PanelGroup>
            </div>
        </div>
    );
}

export default ProblemPage;