import { memo, useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { Loader2Icon, PlayIcon } from "lucide-react";
import { LANGUAGE_CONFIG } from "../data/problems";

const CodeEditorPanel = memo(function CodeEditorPanel({
    selectedLanguage,
    code,
    isRunning,
    onLanguageChange,
    onCodeChange,
    onRunCode,
    onSubmit,
    submitLabel = "Submit",
    readOnly,
}) {
    // Determine editor theme based on current attribute
    const [editorTheme, setEditorTheme] = useState("vs-dark");

    useEffect(() => {
        const observer = new MutationObserver(() => {
            const theme = document.documentElement.getAttribute("data-theme");
            setEditorTheme(theme === "winter" ? "light" : "vs-dark");
        });

        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

        // Initial set
        const currentTheme = document.documentElement.getAttribute("data-theme");
        setEditorTheme(currentTheme === "winter" ? "light" : "vs-dark");

        return () => observer.disconnect();
    }, []);

    return (
        <div className="h-full bg-[#282828] flex flex-col overflow-hidden text-[#eff1f6] text-[13px]">
            <div className="flex items-center justify-between px-3 py-1.5 bg-[#282828] border-b border-[#3e3e3e]">
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 text-[#2cbb5d] font-semibold">
                        <span className="font-mono text-lg leading-none">{"</>"}</span> Code
                    </div>
                    
                    {/* Language Selector */}
                    <select 
                        className="bg-transparent text-[#eff1f6] hover:bg-[#3e3e3e] px-2 py-0.5 rounded outline-none cursor-pointer transition-colors border-none" 
                        value={selectedLanguage} 
                        onChange={onLanguageChange}
                    >
                        {Object.entries(LANGUAGE_CONFIG).map(([key, lang]) => (
                            <option key={key} value={key} className="bg-[#282828] text-[#eff1f6]">
                                {lang.name}
                            </option>
                        ))}
                    </select>
                    <span className="text-[#8a8a8a] text-xs font-semibold cursor-pointer hover:text-[#eff1f6]">Auto</span>
                </div>

                <div className="flex items-center gap-2 text-[#8a8a8a]">
                    <button className="p-1 hover:bg-[#3e3e3e] rounded hover:text-white transition-colors" title="Format Code">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12H4a2 2 0 0 0 0 4h16v-4Z"/></svg>
                    </button>
                    <button className="p-1 hover:bg-[#3e3e3e] rounded hover:text-white transition-colors" title="Reset to default code">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                    </button>
                    <button className="p-1 hover:bg-[#3e3e3e] rounded hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>
                    </button>
                </div>
            </div>

            <div className="flex-1">
                <Editor
                    height={"100%"}
                    language={LANGUAGE_CONFIG[selectedLanguage].monacoLang}
                    value={code}
                    onChange={onCodeChange}
                    theme={"vs-dark"}
                    options={{
                        fontSize: 14,
                        lineNumbers: "on",
                        scrollBeyondLastLine: false,
                        automaticLayout: true,
                        minimap: { enabled: false },
                        readOnly: readOnly,
                        fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
                    }}
                />
            </div>
            {/* FOOTER */}
            <div className="flex items-center justify-between px-4 py-1.5 bg-[#282828] border-t border-[#3e3e3e] text-[#8a8a8a] text-[12px]">
                <span>Saved</span>
                <span>Ln 1, Col 1</span>
            </div>
        </div>
    );
});
export default CodeEditorPanel;