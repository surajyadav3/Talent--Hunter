import { useState, memo } from "react";
import { CheckSquareIcon, ChevronRightIcon, TerminalIcon } from "lucide-react";

const OutputPanel = memo(function OutputPanel({ output, expectedOutput, testCases = [] }) {
    const [activeTab, setActiveTab] = useState("testcases");
    const [activeCase, setActiveCase] = useState(0);

    const rawOutput = output?.results?.[activeCase]?.actualOutput || "";
    const expectedOut = output?.results?.[activeCase]?.expectedOutput || expectedOutput;
    const runError = output?.error || output?.results?.[activeCase]?.error;

    if (!testCases || testCases.length === 0) {
        return (
            <div className="h-full bg-[#282828] flex flex-col items-center justify-center text-[#8a8a8a]">
                <p>No test cases available</p>
            </div>
        );
    }

    const currentTest = testCases[activeCase];

    // Attempt to parse input if it is a JSON string or object
    const renderInputValue = (input) => {
        try {
            if (typeof input === 'string' && (input.startsWith('{') || input.startsWith('['))) {
                 return input; // keep as string representation
            }
            return String(input);
        } catch(e) {
            return String(input);
        }
    }

    // Since Talent-Hunter passes examples from ProblemDescription, we map inputs appropriately.
    // Assuming currentTest has .input property as string. Often like "nums=[1,2], target=3".
    const inputParts = currentTest.input ? currentTest.input.split(', ') : [];

    return (
        <div className="h-full bg-[#282828] flex flex-col text-[#eff1f6] text-[14px]">
            {/* TABS */}
            <div className="flex bg-[#282828] border-b border-[#3e3e3e] px-2 pt-1 relative">
                <div 
                    onClick={() => setActiveTab("testcases")}
                    className={`flex items-center gap-1.5 px-3 py-2 font-semibold cursor-pointer transition-colors ${activeTab === "testcases" ? "text-white border-b-2 border-white" : "text-[#8a8a8a] border-b-2 border-transparent hover:text-white"}`}
                >
                    <CheckSquareIcon className={`w-4 h-4 text-[#2cbb5d]`} />
                    Testcase
                </div>
                <div className="w-[1px] h-4 bg-[#3e3e3e] my-auto mx-1"></div>
                <div 
                    onClick={() => setActiveTab("testresults")}
                    className={`flex items-center gap-1.5 px-3 py-2 font-semibold cursor-pointer transition-colors ${activeTab === "testresults" ? "text-white border-b-2 border-white" : "text-[#8a8a8a] border-b-2 border-transparent hover:text-white"}`}
                >
                    <div className={`flex items-center font-black tracking-tighter text-sm ${output && output.verdict === "Accepted" ? "text-[#2cbb5d]" : output ? "text-red-500" : "text-[#2cbb5d]"}`}>{">_"}</div>
                    Test Result
                </div>
            </div>

            {/* CONTENT */}
            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar bg-[#282828]">
                {activeTab === "testcases" ? (
                    <div className="space-y-4">
                        {/* Case Tabs */}
                        <div className="flex items-center gap-1.5 pt-1">
                            {testCases.map((tc, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveCase(idx)}
                                    className={`px-3 py-1 rounded-md text-sm font-semibold transition-colors ${activeCase === idx ? "bg-[#3e3e3e] text-white" : "bg-transparent text-[#8a8a8a] hover:bg-[#3e3e3e]/50 hover:text-white"}`}
                                >
                                    Case {idx + 1}
                                </button>
                            ))}
                            <button className="px-2 py-1 rounded-md text-sm font-semibold text-[#8a8a8a] hover:bg-[#3e3e3e]/50 hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
                            </button>
                        </div>

                        {/* Case Content */}
                        <div className="space-y-4 pt-4">
                            {inputParts.map((part, index) => {
                                const [key, val] = part.split('=').map(s => s.trim());
                                return (
                                <div key={index} className="space-y-1.5">
                                    <p className="text-xs text-[#8a8a8a] font-medium">{key} =</p>
                                    <div className="bg-[#ffffff12] px-3 py-2.5 rounded-md font-mono text-[13px] text-[#eff1f6] tracking-wider break-all min-h-[40px] flex items-center">
                                        {val || part}
                                    </div>
                                </div>
                                )
                            })}
                            {inputParts.length === 0 && (
                                <div className="space-y-1.5">
                                    <p className="text-xs text-[#8a8a8a] font-medium">Input =</p>
                                    <div className="bg-[#ffffff12] px-3 py-2.5 rounded-md font-mono text-[13px] text-[#eff1f6] tracking-wider break-all min-h-[40px] flex items-center">
                                        {currentTest.input}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {output ? (
                            <div className="space-y-4">
                                {/* Verdict Header */}
                                <div className="flex items-center gap-3 mb-2">
                                     <h3 className={`text-xl font-bold ${output.verdict === "Accepted" ? "text-[#2cbb5d]" : "text-red-500"}`}>
                                          {output.verdict}
                                     </h3>
                                     {output.maxExecutionTime && (
                                         <span className="text-[#8a8a8a] text-sm">Runtime: {output.maxExecutionTime} ms</span>
                                     )}
                                </div>
                                <div className="text-sm text-[#8a8a8a]">
                                     {output.passed} / {output.totalTestCases} test cases passed.
                                </div>
                                
                                {/* Case Tabs (Interactive for Results) */}
                                <div className="flex items-center gap-1.5 pt-1">
                                    {(output.results || []).map((res, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveCase(idx)}
                                            className={`px-3 py-1 rounded-md text-sm font-semibold transition-colors flex items-center gap-1 ${activeCase === idx ? "bg-[#3e3e3e] text-white" : "bg-transparent text-[#8a8a8a] hover:bg-[#3e3e3e]/50 hover:text-white"}`}
                                        >
                                            <div className={`w-1.5 h-1.5 rounded-full ${res.status === "Passed" ? "bg-[#2cbb5d]" : res.status === "Skipped" ? "bg-gray-500" : "bg-red-500"}`}></div>
                                            Case {idx + 1}
                                        </button>
                                    ))}
                                </div>

                                {/* Active Case Details */}
                                {runError ? (
                                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                                        <p className="text-sm text-red-400 font-semibold mb-2">Error:</p>
                                        <pre className="text-[13px] font-mono text-red-500 whitespace-pre-wrap">{runError}</pre>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <div className="space-y-1.5">
                                            <p className="text-xs text-[#8a8a8a] font-medium">Input =</p>
                                            <div className="bg-[#ffffff12] px-3 py-2.5 rounded-md font-mono text-[13px] text-[#eff1f6] tracking-wider break-all min-h-[40px] flex items-center">
                                                {output.results?.[activeCase]?.input || currentTest.input}
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <p className="text-xs text-[#8a8a8a] font-medium">Output =</p>
                                            <div className={`bg-[#ffffff12] px-3 py-2.5 rounded-md font-mono text-[13px] ${output.results?.[activeCase]?.status === 'Passed' ? 'text-[#2cbb5d]' : 'text-red-400'} tracking-wider break-all min-h-[40px] flex items-center`}>
                                                {rawOutput || "(No Output)"}
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <p className="text-xs text-[#8a8a8a] font-medium">Expected =</p>
                                            <div className="bg-[#ffffff12] px-3 py-2.5 rounded-md font-mono text-[13px] text-[#eff1f6] tracking-wider break-all min-h-[40px] flex items-center">
                                                {expectedOut}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-12 text-[#8a8a8a]">
                                <p>Execute code to see results</p>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* FOOTER */}
            <div className="px-4 py-2 border-t border-[#3e3e3e] flex items-center justify-between">
                <button className="text-[#8a8a8a] hover:text-[#eff1f6] font-semibold text-sm flex items-center gap-1 transition-colors">
                    {"</>"} Source
                </button>
            </div>
        </div>
    );
});
export default OutputPanel;