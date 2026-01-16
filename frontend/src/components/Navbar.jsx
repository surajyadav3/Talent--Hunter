import { Link, useLocation } from "react-router";
import { BookOpenIcon, LayoutDashboardIcon, SparklesIcon, TrophyIcon, CreditCardIcon, MedalIcon, BarChart3Icon } from "lucide-react";
import { UserButton } from "@clerk/clerk-react";

function Navbar() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-base-100/60 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50 shadow-2xl overflow-hidden">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                {/* LOGO */}
                <Link
                    to="/"
                    className="group flex items-center gap-3 active:scale-95 transition-all duration-200"
                >
                    <div className="size-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg shadow-primary/20 group-hover:rotate-6 transition-transform">
                        <SparklesIcon className="size-6 text-white" />
                    </div>

                    <div className="flex flex-col">
                        <span className="font-extrabold text-xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono tracking-tighter">
                            Talent-Hunter
                        </span>
                        <span className="text-[10px] uppercase font-bold text-base-content/40 tracking-[2px] -mt-1 leading-none">Code Together</span>
                    </div>
                </Link>

                <div className="flex items-center gap-2">
                    {/* PROBLEMS PAGE LINK */}
                    <Link
                        to={"/problems"}
                        className={`px-3 py-2 rounded-lg transition-all duration-200 text-sm font-semibold
                            ${isActive("/problems")
                                ? "bg-primary/10 text-primary border border-primary/20"
                                : "hover:bg-white/5 text-base-content/60 hover:text-base-content"
                            }`}
                    >
                        <div className="flex items-center gap-2">
                            <BookOpenIcon className={`size-4 ${isActive("/problems") ? "text-primary" : ""}`} />
                            <span className="hidden sm:inline">Problems</span>
                        </div>
                    </Link>

                    {/* DASHBOARD PAGE LINK */}
                    <Link
                        to={"/dashboard"}
                        className={`px-3 py-2 rounded-lg transition-all duration-200 text-sm font-semibold
                            ${isActive("/dashboard")
                                ? "bg-primary/10 text-primary border border-primary/20"
                                : "hover:bg-white/5 text-base-content/60 hover:text-base-content"
                            }`}
                    >
                        <div className="flex items-center gap-2">
                            <LayoutDashboardIcon className={`size-4 ${isActive("/dashboard") ? "text-primary" : ""}`} />
                            <span className="hidden sm:inline">Dashboard</span>
                        </div>
                    </Link>

                    {/* LEADERBOARD PAGE LINK */}
                    <Link
                        to={"/leaderboard"}
                        className={`px-3 py-2 rounded-lg transition-all duration-200 text-sm font-semibold
                            ${isActive("/leaderboard")
                                ? "bg-primary/10 text-primary border border-primary/20"
                                : "hover:bg-white/5 text-base-content/60 hover:text-base-content"
                            }`}
                    >
                        <div className="flex items-center gap-2">
                            <TrophyIcon className={`size-4 ${isActive("/leaderboard") ? "text-primary" : ""}`} />
                            <span className="hidden sm:inline">Leaderboard</span>
                        </div>
                    </Link>

                    {/* PRICING PAGE LINK */}
                    <Link
                        to={"/pricing"}
                        className={`px-3 py-2 rounded-lg transition-all duration-200 text-sm font-semibold
                            ${isActive("/pricing")
                                ? "bg-primary/10 text-primary border border-primary/20 shadow-sm"
                                : "hover:bg-white/5 text-base-content/60 hover:text-base-content"
                            }`}
                    >
                        <div className="flex items-center gap-2">
                            <SparklesIcon className={`size-4 ${isActive("/pricing") ? "text-primary" : "text-amber-500"}`} />
                            <span className="hidden sm:inline">Premium</span>
                        </div>
                    </Link>

                    <div className="ml-2 pl-2 border-l border-white/10 h-6 flex items-center">
                        <UserButton />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
