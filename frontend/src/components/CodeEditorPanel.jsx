import Editor from "@monaco-editor/react";
import { Loader2Icon, PlayIcon } from "lucide-react";
import { LANGUAGE_CONFIG } from "../data/problems";

function CodeEditorPanel({
    selectedLanguage,
    code,
    isRunning,
    onLanguageChange,
    onCodeChange,
    onRunCode,
    onSubmit,
    readOnly,
}) {
    return (
        <div className="h-full bg-base-300 flex flex-col overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-base-100/50 backdrop-blur-md border-b border-base-content/5">
                <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-base-200 rounded-lg">
                        <img
                            src={LANGUAGE_CONFIG[selectedLanguage].icon}
                            alt={LANGUAGE_CONFIG[selectedLanguage].name}
                            className="size-5"
                        />
                    </div>
                    <select className="select select-sm select-ghost font-semibold focus:bg-base-200" value={selectedLanguage} onChange={onLanguageChange}>
                        {Object.entries(LANGUAGE_CONFIG).map(([key, lang]) => (
                            <option key={key} value={key}>
                                {lang.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex items-center gap-2">
                    <button className="btn btn-primary btn-sm gap-2 glow-primary shadow-lg shadow-primary/20" disabled={isRunning} onClick={onRunCode}>
                        {isRunning ? (
                            <>
                                <Loader2Icon className="size-4 animate-spin" />
                                Running...
                            </>
                        ) : (
                            <>
                                <PlayIcon className="size-4 fill-current" />
                                Run
                            </>
                        )}
                    </button>
                    <button className="btn btn-success btn-sm gap-2 shadow-lg shadow-success/20 font-bold" disabled={isRunning} onClick={onSubmit}>
                        Submit
                    </button>
                </div>
            </div>

            <div className="flex-1">
                <Editor
                    height={"100%"}
                    language={LANGUAGE_CONFIG[selectedLanguage].monacoLang}
                    value={code}
                    onChange={onCodeChange}
                    theme="vs-dark"
                    options={{
                        fontSize: 16,
                        lineNumbers: "on",
                        scrollBeyondLastLine: false,
                        automaticLayout: true,
                        minimap: { enabled: false },
                        readOnly: readOnly,
                    }}
                />
            </div>
        </div>
    );
}
export default CodeEditorPanel;