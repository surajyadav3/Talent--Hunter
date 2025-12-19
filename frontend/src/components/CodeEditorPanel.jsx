import Editor from "@monaco-editor/react";
import { PlayIcon, Settings2Icon } from "lucide-react";
import { LANGUAGE_CONFIG } from "../data/problems";

function CodeEditorPanel({
    selectedLanguage,
    code,
    isRunning,
    onLanguageChange,
    onCodeChange,
    onRunCode,
}) {
    return (
        <div className="flex flex-col h-full bg-[#1e1e1e] overflow-hidden">
            {/* EDITOR HEADER */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-[#252526]">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <img
                            src={LANGUAGE_CONFIG[selectedLanguage].icon}
                            alt={selectedLanguage}
                            className="size-5 rounded"
                        />
                        <select
                            value={selectedLanguage}
                            onChange={(e) => onLanguageChange(e)}
                            className="bg-transparent text-sm font-medium text-gray-300 focus:outline-none cursor-pointer hover:text-white transition-colors"
                        >
                            {Object.entries(LANGUAGE_CONFIG).map(([id, config]) => (
                                <option key={id} value={id} className="bg-[#252526]">
                                    {config.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button className="btn btn-ghost btn-xs text-gray-400 hover:text-white">
                        <Settings2Icon className="size-4" />
                    </button>
                    <button
                        onClick={onRunCode}
                        disabled={isRunning}
                        className={`btn btn-sm px-4 gap-2 border-none ${isRunning ? "btn-disabled" : "bg-success hover:bg-success/90 text-success-content"
                            }`}
                    >
                        {isRunning ? (
                            <span className="loading loading-spinner loading-xs"></span>
                        ) : (
                            <PlayIcon className="size-4" />
                        )}
                        {isRunning ? "Running..." : "Run"}
                    </button>
                </div>
            </div>

            {/* EDITOR AREA */}
            <div className="flex-1 overflow-hidden relative">
                <Editor
                    height="100%"
                    defaultLanguage={selectedLanguage}
                    language={LANGUAGE_CONFIG[selectedLanguage].monacoLang}
                    theme="vs-dark"
                    value={code}
                    onChange={(value) => onCodeChange(value)}
                    options={{
                        minimap: { enabled: false },
                        fontSize: 14,
                        lineNumbers: "on",
                        scrollBeyondLastLine: false,
                        automaticLayout: true,
                        scrollbar: {
                            vertical: "visible",
                            horizontal: "visible",
                        },
                        padding: { top: 16 },
                    }}
                />
            </div>
        </div>
    );
}

export default CodeEditorPanel;
