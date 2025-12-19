import { XIcon, Code2Icon, LayersIcon, SparklesIcon, ChevronRightIcon } from "lucide-react";
import { PROBLEMS } from "../data/problems";

export default function CreateSessionModal({
    isOpen,
    onClose,
    roomConfig,
    setRoomConfig,
    onCreateRoom,
    isCreating
}) {
    if (!isOpen) return null;

    const problems = Object.values(PROBLEMS);
    const difficulties = ["Easy", "Medium", "Hard"];

    // Filter problems by selected difficulty if any
    const filteredProblems = roomConfig.difficulty
        ? problems.filter(p => p.difficulty.toLowerCase() === roomConfig.difficulty.toLowerCase())
        : problems;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-base-300/80 backdrop-blur-md animate-in fade-in duration-300"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="card bg-base-100 w-full max-w-2xl shadow-2xl relative z-10 overflow-hidden border border-base-content/5 animate-in zoom-in-95 duration-300">
                {/* Header Decor */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-secondary to-accent"></div>

                <div className="card-body p-0">
                    {/* Header */}
                    <div className="p-6 sm:p-8 flex items-center justify-between border-b border-base-content/5">
                        <div>
                            <h2 className="text-3xl font-black flex items-center gap-3">
                                <SparklesIcon className="size-8 text-primary animate-pulse" />
                                Initialize Session
                            </h2>
                            <p className="text-base-content/50 font-bold uppercase tracking-widest text-[10px] mt-1 pr-12">
                                Configure your shared coding environment
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            className="btn btn-circle btn-ghost btn-sm hover:bg-error/10 hover:text-error transition-colors"
                        >
                            <XIcon className="size-5" />
                        </button>
                    </div>

                    <div className="p-6 sm:p-8 space-y-8">
                        {/* 1. Difficulty Level */}
                        <div className="space-y-4">
                            <label className="text-xs font-black uppercase tracking-[0.2em] text-base-content/40 flex items-center gap-2">
                                <LayersIcon className="size-4" />
                                Select Difficulty
                            </label>
                            <div className="flex flex-wrap gap-3">
                                {difficulties.map((diff) => (
                                    <button
                                        key={diff}
                                        onClick={() => setRoomConfig({ ...roomConfig, difficulty: diff, problem: "" })}
                                        className={`px-6 py-3 rounded-xl font-bold transition-all duration-200 border-2 ${roomConfig.difficulty === diff
                                                ? "bg-primary text-primary-content border-primary shadow-lg shadow-primary/20 scale-105"
                                                : "bg-base-200 border-transparent hover:border-base-300 opacity-60 hover:opacity-100"
                                            }`}
                                    >
                                        {diff}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* 2. Problem Selection */}
                        <div className="space-y-4">
                            <label className="text-xs font-black uppercase tracking-[0.2em] text-base-content/40 flex items-center gap-2">
                                <Code2Icon className="size-4" />
                                Choose Problem
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-60 overflow-y-auto p-1 custom-scrollbar">
                                {filteredProblems.map((problem) => (
                                    <button
                                        key={problem.id}
                                        onClick={() => setRoomConfig({ ...roomConfig, problem: problem.id })}
                                        className={`flex items-center text-left p-4 rounded-xl border-2 transition-all duration-200 group ${roomConfig.problem === problem.id
                                                ? "bg-secondary/10 border-secondary ring-1 ring-secondary/20"
                                                : "bg-base-200 border-transparent hover:border-base-300 opacity-70 hover:opacity-100"
                                            }`}
                                    >
                                        <div className={`size-8 rounded-lg flex items-center justify-center mr-3 ${roomConfig.problem === problem.id ? "bg-secondary text-secondary-content" : "bg-base-100"
                                            }`}>
                                            <Code2Icon className="size-4" />
                                        </div>
                                        <span className={`font-bold text-sm leading-tight transition-colors ${roomConfig.problem === problem.id ? "text-secondary" : "text-base-content"
                                            }`}>
                                            {problem.title}
                                        </span>
                                    </button>
                                ))}
                                {filteredProblems.length === 0 && (
                                    <div className="col-span-full py-8 text-center bg-base-200 rounded-xl opacity-40 italic text-sm">
                                        Select a difficulty level first...
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Footer Footer */}
                    <div className="p-6 sm:p-8 bg-base-200/50 flex flex-col sm:flex-row items-center gap-4 border-t border-base-content/5">
                        <div className="flex-1 text-center sm:text-left">
                            <p className="text-xs font-bold text-base-content/30 uppercase tracking-widest leading-loose">
                                Session will be public and joinable by anyone with the link
                            </p>
                        </div>
                        <div className="flex items-center gap-3 w-full sm:w-auto">
                            <button
                                onClick={onClose}
                                className="btn btn-ghost flex-1 sm:flex-none"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={onCreateRoom}
                                disabled={isCreating || !roomConfig.problem || !roomConfig.difficulty}
                                className="btn btn-primary px-8 group flex-1 sm:flex-none"
                            >
                                {isCreating ? (
                                    <span className="loading loading-spinner"></span>
                                ) : (
                                    <>
                                        Initialize Room
                                        <ChevronRightIcon className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
