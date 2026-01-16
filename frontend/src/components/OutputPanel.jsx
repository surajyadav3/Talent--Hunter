import { useState } from "react";
import { CheckCircle2Icon, XCircleIcon, TerminalIcon, CpuIcon } from "lucide-react";

function OutputPanel({ output, expectedOutput, testCases = [] }) {
    const [activeTab, setActiveTab] = useState("test-results");

    // Process output to extract test results if they exist
    // We expect the output to be compared with expectedOutput or have special markers
    const rawOutput = output?.output || "";
    const error = output?.error;
    const success = output?.success;

    const renderTestResults = () => {
        if (!output) {
            return (
                <div className="flex flex-col items-center justify-center h-full text-base-content/50 space-y-2">
                    <TerminalIcon className="size-12 opacity-20" />
                    <p>Run your code to see test results</p>
                </div>
            );
        }

        if (error && !rawOutput) {
            return (
                <div className="p-4 bg-error/10 border border-error/20 rounded-lg">
                    <h3 className="text-error font-bold flex items-center gap-2 mb-2">
                        <XCircleIcon className="size-5" />
                        Execution Error
                    </h3>
                    <pre className="text-sm font-mono text-error whitespace-pre-wrap">{error}</pre>
                </div>
            );
        }

        const actualLines = rawOutput.trim().split("\n");
        const expectedLines = expectedOutput ? expectedOutput.trim().split("\n") : [];
        const displayCases = testCases.length > 0 ? testCases : (expectedLines.length > 0 ? expectedLines : []);

        const passedCount = displayCases.filter((_, idx) => (actualLines[idx] || "").trim() === (expectedLines[idx] || "").trim()).length;
        const totalCount = displayCases.length;
        const allPassed = passedCount === totalCount && totalCount > 0;

        return (
            <div className="space-y-6">
                {/* SUMMARY BANNER */}
                <div className={`p-4 rounded-xl border flex items-center justify-between ${allPassed ? 'bg-success/10 border-success/30' : 'bg-warning/10 border-warning/30'}`}>
                    <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-full ${allPassed ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'}`}>
                            {allPassed ? <CheckCircle2Icon className="size-6" /> : <XCircleIcon className="size-6" />}
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-base-content">
                                {allPassed ? 'All Test Cases Passed!' : 'Some Test Cases Failed'}
                            </h3>
                            <p className="text-sm text-base-content/60">
                                {passedCount} / {totalCount} cases passed
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    {displayCases.map((tc, idx) => {
                        const actual = (actualLines[idx] || "").trim();
                        const expected = (expectedLines[idx] || "").trim();
                        const isPassed = actual === expected;

                        return (
                            <div key={idx} className="bg-base-200/50 rounded-xl overflow-hidden border border-base-content/5 transition-all hover:border-base-content/20">
                                <div className="flex items-center justify-between px-4 py-3 bg-base-300/30">
                                    <div className="flex items-center gap-3 font-semibold">
                                        <span className={isPassed ? "text-success" : "text-error"}>
                                            {isPassed ? <CheckCircle2Icon className="size-4" /> : <XCircleIcon className="size-4" />}
                                        </span>
                                        <span className="text-sm opacity-80 uppercase tracking-wider">Test Case {idx + 1}</span>
                                    </div>
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${isPassed ? "bg-success/20 text-success" : "bg-error/20 text-error"}`}>
                                        {isPassed ? "Passed" : "Failed"}
                                    </span>
                                </div>
                                <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-bold text-base-content/40 uppercase">Input</p>
                                        <div className="bg-base-300/50 p-2 rounded text-xs font-mono break-all border border-base-content/5">
                                            {tc.input || "N/A"}
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-bold text-base-content/40 uppercase">Expected Output</p>
                                        <div className="bg-base-300/50 p-2 rounded text-xs font-mono break-all border border-base-content/5">
                                            {expected || "N/A"}
                                        </div>
                                    </div>
                                    <div className="md:col-span-2 space-y-1 pt-2 border-t border-base-content/5">
                                        <p className="text-[10px] font-bold text-base-content/40 uppercase">Your Output</p>
                                        <div className={`p-2 rounded text-xs font-mono break-all border ${isPassed ? "bg-success/5 border-success/10 text-success" : "bg-error/5 border-error/10 text-error"}`}>
                                            {actual || (idx < actualLines.length ? "(Empty Output)" : "No Output")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

    return (
        <div className="h-full bg-base-100 flex flex-col">
            {/* TABS */}
            <div className="flex items-center bg-base-200 border-b border-base-300">
                <button
                    onClick={() => setActiveTab("test-results")}
                    className={`px-4 py-2 text-sm font-semibold flex items-center gap-2 border-b-2 transition-colors ${activeTab === "test-results" ? "border-primary text-primary bg-base-100" : "border-transparent text-base-content/60 hover:text-base-content"
                        }`}
                >
                    <CheckCircle2Icon className="size-4" />
                    Test Results
                </button>
                <button
                    onClick={() => setActiveTab("console")}
                    className={`px-4 py-2 text-sm font-semibold flex items-center gap-2 border-b-2 transition-colors ${activeTab === "console" ? "border-primary text-primary bg-base-100" : "border-transparent text-base-content/60 hover:text-base-content"
                        }`}
                >
                    <TerminalIcon className="size-4" />
                    Console
                </button>
            </div>

            <div className="flex-1 overflow-auto p-4 custom-scrollbar">
                {activeTab === "test-results" ? (
                    renderTestResults()
                ) : (
                    <div className="space-y-4">
                        {output ? (
                            <>
                                {error && (
                                    <div className="p-3 bg-error/10 border border-error/20 rounded-lg">
                                        <pre className="text-sm font-mono text-error whitespace-pre-wrap">{error}</pre>
                                    </div>
                                )}
                                {rawOutput && (
                                    <div className="p-3 bg-base-300 rounded-lg">
                                        <pre className="text-sm font-mono text-base-content/90 whitespace-pre-wrap">{rawOutput}</pre>
                                    </div>
                                )}
                                {!error && !rawOutput && (
                                    <p className="text-base-content/50 text-sm">Execution finished with no console output.</p>
                                )}
                            </>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-12 text-base-content/50">
                                <p>Execute code to see console logs</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
export default OutputPanel;