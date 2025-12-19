import { TerminalIcon, AlertCircleIcon, CheckCircle2Icon, ClockIcon } from "lucide-react";

function OutputPanel({ output }) {
    if (!output) {
        return (
            <div className="flex flex-col h-full bg-[#121212] border-t border-white/5">
                <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5 bg-[#181818]">
                    <TerminalIcon className="size-4 text-gray-400" />
                    <span className="text-sm font-medium text-gray-400">Output</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center text-gray-500 gap-2">
                    <ClockIcon className="size-8 opacity-20" />
                    <p className="text-sm">Run your code to see the output here</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full bg-[#121212] border-t border-white/5">
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-[#181818]">
                <div className="flex items-center gap-2">
                    <TerminalIcon className="size-4 text-gray-400" />
                    <span className="text-sm font-medium text-gray-400">Output</span>
                </div>
                {output.success ? (
                    <div className="flex items-center gap-1.5 text-success text-xs font-bold uppercase tracking-wider">
                        <CheckCircle2Icon className="size-3.5" />
                        Success
                    </div>
                ) : (
                    <div className="flex items-center gap-1.5 text-error text-xs font-bold uppercase tracking-wider">
                        <AlertCircleCircleIcon className="size-3.5" />
                        Execution Error
                    </div>
                )}
            </div>

            <div className="flex-1 overflow-auto p-4 font-mono text-sm leading-relaxed">
                {output.error ? (
                    <div className="text-error bg-error/10 p-3 rounded-lg mb-4 whitespace-pre-wrap">
                        {output.error}
                    </div>
                ) : null}

                {output.output ? (
                    <div className="text-gray-300 whitespace-pre-wrap">
                        {output.output}
                    </div>
                ) : !output.error && (
                    <div className="text-gray-500 italic">No output produced</div>
                )}
            </div>
        </div>
    );
}

// Fix for missing AlertCircleCircleIcon (typo check)
const AlertCircleCircleIcon = AlertCircleIcon;

export default OutputPanel;
