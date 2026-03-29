import { FileTextIcon, HelpCircleIcon, LayoutListIcon, LightbulbIcon, MessageSquareIcon, Share2Icon, StarIcon, ThumbsDownIcon, ThumbsUpIcon, UsersIcon } from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";

function ProblemDescription({ problem, currentProblemId, onProblemChange, allProblems }) {
    // Determine title text size
    const title = problem.title;
    
    // Convert difficulty exactly like leetcode colors
    const difficultyColor = problem.difficulty === "Easy" ? "text-green-500 bg-green-500/10" 
                          : problem.difficulty === "Medium" ? "text-yellow-500 bg-yellow-500/10"
                          : "text-red-500 bg-red-500/10";

    return (
        <div className="h-full flex flex-col bg-[#282828] text-[#eff1f6] text-[14px]">
            {/* TABS */}
            <div className="flex bg-[#282828] border-b border-[#3e3e3e] px-2 pt-1 overflow-x-auto scroller-hide">
                <div className="flex items-center gap-1.5 px-3 py-2 text-blue-500 font-semibold border-b-2 border-blue-500 cursor-pointer">
                    <FileTextIcon className="w-4 h-4" />
                    Description
                </div>
                <div className="flex items-center gap-1.5 px-3 py-2 text-[#8a8a8a] font-semibold hover:text-white cursor-pointer transition-colors">
                    <LightbulbIcon className="w-4 h-4" />
                    Editorial
                </div>
                <div className="flex items-center gap-1.5 px-3 py-2 text-[#8a8a8a] font-semibold hover:text-white cursor-pointer transition-colors">
                    <LayoutListIcon className="w-4 h-4" />
                    Solutions
                </div>
                <div className="flex items-center gap-1.5 px-3 py-2 text-[#8a8a8a] font-semibold hover:text-white cursor-pointer transition-colors">
                    <MessageSquareIcon className="w-4 h-4" />
                    Submissions
                </div>
            </div>

            {/* CONTENT */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5">
                {/* Heading & Badges */}
                <div className="space-y-3">
                    <h1 className="text-xl font-bold">{title}</h1>
                    <div className="flex items-center gap-2 flex-wrap text-sm">
                        <span className={`px-2 py-0.5 rounded-full font-semibold ${difficultyColor}`}>
                            {problem.difficulty}
                        </span>
                        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#3e3e3e]/50 text-[#8a8a8a] font-semibold text-xs cursor-pointer hover:bg-[#3e3e3e] transition-colors">
                            <ListIcon className="w-3 h-3" /> Topics
                        </div>
                        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#3e3e3e]/50 text-[#8a8a8a] font-semibold text-xs cursor-pointer hover:bg-[#3e3e3e] transition-colors">
                            <HelpCircleIcon className="w-3 h-3" /> Companies
                        </div>
                    </div>
                </div>

                {/* Problem Text */}
                <div className="space-y-4 leading-[1.6] text-base">
                    <p>{problem.description.text}</p>
                    {problem.description.notes.map((note, idx) => (
                        <p key={idx} dangerouslySetInnerHTML={{ __html: note.replace(/`([^`]+)`/g, '<code class="bg-[#3e3e3e] text-[#eff1f6] px-1.5 py-0.5 rounded text-sm">$1</code>') }} />
                    ))}
                </div>

                {/* EXAMPLES */}
                <div className="space-y-4">
                    {problem.examples.map((example, idx) => (
                        <div key={idx} className="space-y-2">
                            <p className="font-bold text-[#eff1f6]">Example {idx + 1}:</p>
                            <div className="bg-[#3e3e3e]/30 border-l-2 border-[#3e3e3e] p-3 rounded-none font-mono text-sm space-y-1">
                                <div className="text-[#8a8a8a]">
                                    <span className="font-semibold text-[#eff1f6]">Input:</span> <span className="text-[#8a8a8a]">{example.input}</span>
                                </div>
                                <div className="text-[#8a8a8a]">
                                    <span className="font-semibold text-[#eff1f6]">Output:</span> <span className="text-[#8a8a8a]">{example.output}</span>
                                </div>
                                {example.explanation && (
                                    <div className="text-[#8a8a8a] pt-1">
                                        <span className="font-semibold text-[#eff1f6]">Explanation:</span> {example.explanation}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CONSTRAINTS */}
                <div className="space-y-2 pb-6 border-b border-[#3e3e3e]">
                    <p className="font-bold text-[#eff1f6]">Constraints:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-[#8a8a8a]">
                        {problem.constraints.map((constraint, idx) => (
                            <li key={idx}>
                                <code className="bg-[#3e3e3e]/50 px-1.5 py-0.5 rounded text-[13px]">{constraint}</code>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* FOOTER */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#282828] border-t border-[#3e3e3e] text-[#8a8a8a] text-sm">
                <div className="flex gap-2">
                    <button className="flex items-center gap-1.5 hover:bg-[#3e3e3e] px-2 py-1 rounded transition-colors"><ThumbsUpIcon className="w-4 h-4" /> 12.8K</button>
                    <button className="flex items-center gap-1.5 hover:bg-[#3e3e3e] px-2 py-1 rounded transition-colors"><ThumbsDownIcon className="w-4 h-4" /> 391</button>
                    <button className="p-1 hover:bg-[#3e3e3e] rounded transition-colors"><StarIcon className="w-4 h-4" /></button>
                    <button className="p-1 hover:bg-[#3e3e3e] rounded transition-colors"><Share2Icon className="w-4 h-4" /></button>
                </div>
                <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#2cbb5d]"></div>
                    <span className="text-xs">144 Online</span>
                </div>
            </div>
        </div>
    );
}

// Add ListIcon mapping for the badges above since we didn't import it in this file
function ListIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="8" x2="21" y1="6" y2="6"/>
      <line x1="8" x2="21" y1="12" y2="12"/>
      <line x1="8" x2="21" y1="18" y2="18"/>
      <line x1="3" x2="3.01" y1="6" y2="6"/>
      <line x1="3" x2="3.01" y1="12" y2="12"/>
      <line x1="3" x2="3.01" y1="18" y2="18"/>
    </svg>
  );
}

export default ProblemDescription;