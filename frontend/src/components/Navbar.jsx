import { Link, useLocation } from "react-router";
import { BookOpenIcon, LayoutDashboardIcon, SparklesIcon, TrophyIcon, CreditCardIcon, MedalIcon, BarChart3Icon } from "lucide-react";
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import { useQueryClient } from "@tanstack/react-query";
import { sessionApi } from "../api/sessions";

import ThemeToggle from "./ThemeToggle";

function Navbar({ isInSession, isParticipant, sessionActive }) {
    const location = useLocation();
    const queryClient = useQueryClient();

    const isActive = (path) => location.pathname === path;

    const isBlocked = isInSession && isParticipant && sessionActive;

    const navLinkClass = (path) => `
        px-3 py-2 rounded-lg transition-all duration-200 text-sm font-semibold flex items-center gap-2
        ${isActive(path)
            ? "bg-primary/10 text-primary border border-primary/20"
            : "hover:bg-white/5 text-base-content/60 hover:text-base-content"
        }
        ${isBlocked ? "opacity-50 cursor-not-allowed pointer-events-none" : "cursor-pointer"}
    `;

    // Optimization: Prefetch dashboard data on hover
    const prefetchDashboard = () => {
        if (!isBlocked && !isActive("/dashboard")) {
            queryClient.prefetchQuery({
                queryKey: ["activeSessions"],
                queryFn: sessionApi.getActiveSessions,
                staleTime: 5000,
            });
            queryClient.prefetchQuery({
                queryKey: ["myRecentSessions"],
                queryFn: sessionApi.getMyRecentSessions,
                staleTime: 5000,
            });
        }
    };

    return (
        <nav className="bg-base-100/60 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50 shadow-2xl overflow-hidden">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                {/* LOGO */}
                <Link
                    to={isBlocked ? "#" : "/"}
                    className={`group flex items-center gap-3 active:scale-95 transition-all duration-200 ${isBlocked ? "pointer-events-none" : ""}`}
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
                        to={isBlocked ? "#" : "/problems"}
                        className={navLinkClass("/problems")}
                    >
                        <BookOpenIcon className={`size-4 ${isActive("/problems") ? "text-primary" : ""}`} />
                        <span className="hidden sm:inline">Problems</span>
                    </Link>

                    {/* DASHBOARD PAGE LINK */}
                    <Link
                        to={isBlocked ? "#" : "/dashboard"}
                        className={navLinkClass("/dashboard")}
                        onMouseEnter={prefetchDashboard}
                    >
                        <LayoutDashboardIcon className={`size-4 ${isActive("/dashboard") ? "text-primary" : ""}`} />
                        <span className="hidden sm:inline">Dashboard</span>
                    </Link>

                    {/* LEADERBOARD PAGE LINK */}
                    <Link
                        to={isBlocked ? "#" : "/leaderboard"}
                        className={navLinkClass("/leaderboard")}
                    >
                        <TrophyIcon className={`size-4 ${isActive("/leaderboard") ? "text-primary" : ""}`} />
                        <span className="hidden sm:inline">Leaderboard</span>
                    </Link>

                    {/* PRICING PAGE LINK */}
                    <Link
                        to={isBlocked ? "#" : "/pricing"}
                        className={navLinkClass("/pricing")}
                    >
                        <SparklesIcon className={`size-4 ${isActive("/pricing") ? "text-primary" : "text-amber-500"}`} />
                        <span className="hidden sm:inline">Premium</span>
                    </Link>

                    <SignedOut>
                        <SignInButton mode="modal">
                            <button className="btn btn-primary btn-sm rounded-lg shadow-lg shadow-primary/20 hover:scale-105 transition-all ml-1">
                                Get Started
                            </button>
                        </SignInButton>
                    </SignedOut>

                    <div className="ml-2 pl-2 border-l border-white/10 flex items-center gap-2">
                        <ThemeToggle />
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
