import { Link } from "react-router";
import Navbar from "../components/Navbar";
import { useState } from "react";

import { PROBLEMS } from "../data/problems";
import { ChevronDownIcon, ChevronRightIcon, Code2Icon } from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";

function ProblemsPage() {
    const problems = Object.values(PROBLEMS);

    // Track collapsed state for each difficulty level
    const [collapsed, setCollapsed] = useState({
        Easy: false,
        Medium: false,
        Hard: false,
    });

    const toggleSection = (difficulty) => {
        setCollapsed((prev) => ({
            ...prev,
            [difficulty]: !prev[difficulty],
        }));
    };

    const easyProblemsCount = problems.filter((p) => p.difficulty === "Easy").length;
    const mediumProblemsCount = problems.filter((p) => p.difficulty === "Medium").length;
    const hardProblemsCount = problems.filter((p) => p.difficulty === "Hard").length;

    return (
        <div className="min-h-screen bg-base-200">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* HEADER */}
                <div className="mb-8 text-center sm:text-left">
                    <h1 className="text-4xl font-bold mb-2">Practice Problems</h1>
                    <p className="text-base-content/70">
                        Sharpen your coding skills with these curated problems
                    </p>
                </div>

                {/* PROBLEMS LIST GROUPED BY DIFFICULTY */}
                <div className="space-y-6">
                    {[
                        { title: "Easy", difficulty: "Easy", problems: problems.filter((p) => p.difficulty === "Easy"), color: "text-success", badge: "badge-success" },
                        { title: "Medium", difficulty: "Medium", problems: problems.filter((p) => p.difficulty === "Medium"), color: "text-warning", badge: "badge-warning" },
                        { title: "Hard", difficulty: "Hard", problems: problems.filter((p) => p.difficulty === "Hard"), color: "text-error", badge: "badge-error" },
                    ].map((group) => (
                        <div key={group.title} className="bg-base-100 rounded-2xl overflow-hidden border border-base-300 shadow-sm transition-all duration-300">
                            {/* SECTION HEADER - TOGGLE BUTTON */}
                            <button
                                onClick={() => toggleSection(group.difficulty)}
                                className="w-full h-16 px-6 flex items-center justify-between hover:bg-base-200/50 transition-colors cursor-pointer group"
                            >
                                <div className="flex items-center gap-4">
                                    <h2 className={`text-xl font-bold ${group.color} flex items-center gap-2`}>
                                        {group.title}
                                    </h2>
                                    <div className={`badge ${group.badge} badge-outline font-bold`}>
                                        {group.problems.length}
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-semibold text-base-content/40 uppercase tracking-wider group-hover:text-base-content/60 transition-colors">
                                        {collapsed[group.difficulty] ? 'Show' : 'Hide'}
                                    </span>
                                    <ChevronDownIcon
                                        className={`size-5 text-base-content/50 transition-transform duration-300 ${collapsed[group.difficulty] ? '-rotate-90' : 'rotate-0'}`}
                                    />
                                </div>
                            </button>

                            {/* PROBLEM LIST (COLLAPSIBLE) */}
                            {!collapsed[group.difficulty] && (
                                <div className="p-4 pt-0 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                                    <div className="grid gap-3">
                                        {group.problems.map((problem) => (
                                            <Link
                                                key={problem.id}
                                                to={`/problem/${problem.id}`}
                                                className="group/card relative flex items-center justify-between p-4 rounded-xl bg-base-200/30 hover:bg-base-200 border border-transparent hover:border-base-300 transition-all duration-200"
                                            >
                                                <div className="flex items-center gap-4 min-w-0">
                                                    <div className="size-10 rounded-lg bg-base-100 flex items-center justify-center shadow-sm border border-base-300 group-hover/card:scale-110 transition-transform duration-200">
                                                        <Code2Icon className="size-5 text-base-content/60" />
                                                    </div>
                                                    <div className="min-w-0">
                                                        <h3 className="font-bold text-base-content truncate group-hover/card:text-primary transition-colors">
                                                            {problem.title}
                                                        </h3>
                                                        <p className="text-xs text-base-content/50 font-medium">
                                                            {problem.category}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-3">
                                                    <span className="hidden sm:inline-block text-xs font-semibold text-primary/0 group-hover/card:text-primary/100 transition-all duration-200">
                                                        Solve Problem
                                                    </span>
                                                    <div className="size-8 rounded-full bg-base-100 flex items-center justify-center border border-base-300 group-hover/card:bg-primary group-hover/card:border-primary transition-all duration-200">
                                                        <ChevronRightIcon className="size-4 text-base-content/60 group-hover/card:text-primary-content transition-colors" />
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* STATS FOOTER */}
                <div className="mt-12 card bg-base-100 shadow-lg border border-base-300">
                    <div className="card-body">
                        <div className="stats stats-vertical lg:stats-horizontal bg-transparent">
                            <div className="stat">
                                <div className="stat-title text-base-content/60">Total Problems</div>
                                <div className="stat-value text-primary">{problems.length}</div>
                            </div>

                            <div className="stat border-base-300">
                                <div className="stat-title text-success/80">Easy</div>
                                <div className="stat-value text-success">{easyProblemsCount}</div>
                            </div>
                            <div className="stat border-base-300">
                                <div className="stat-title text-warning/80">Medium</div>
                                <div className="stat-value text-warning">{mediumProblemsCount}</div>
                            </div>
                            <div className="stat border-base-300">
                                <div className="stat-title text-error/80">Hard</div>
                                <div className="stat-value text-error">{hardProblemsCount}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProblemsPage;
