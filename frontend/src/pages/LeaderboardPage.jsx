import { useQuery } from "@tanstack/react-query";
import { Loader2Icon, TrophyIcon, UserIcon } from "lucide-react";
import Navbar from "../components/Navbar";
import { userApi } from "../api/users";

function LeaderboardPage() {
    const { data, isLoading, error } = useQuery({
        queryKey: ["leaderboard"],
        queryFn: userApi.getLeaderboard,
    });

    if (isLoading) {
        return (
            <div className="min-h-screen bg-base-100 flex flex-col items-center justify-center">
                <Loader2Icon className="w-12 h-12 animate-spin text-primary mb-4" />
                <p className="text-lg text-base-content/70">Loading ranks...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-base-100 flex flex-col">
                <Navbar />
                <div className="flex-1 flex items-center justify-center p-4">
                    <div className="text-center text-error">
                        <h2 className="text-2xl font-bold mb-2">Error</h2>
                        <p>Failed to load leaderboard data.</p>
                    </div>
                </div>
            </div>
        );
    }

    const { users } = data || { users: [] };

    return (
        <div className="min-h-screen bg-base-100 flex flex-col font-sans">
            <Navbar />

            <div className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2 flex items-center justify-center gap-3">
                        <TrophyIcon className="w-10 h-10 text-yellow-500" />
                        Leaderboard
                    </h1>
                    <p className="text-base-content/60 text-lg">
                        Top problem solvers in the community.
                    </p>
                </div>

                <div className="bg-base-200 rounded-2xl shadow-xl overflow-hidden border border-base-300">
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            {/* head */}
                            <thead>
                                <tr className="bg-base-300/50 text-base-content uppercase tracking-wider text-sm">
                                    <th className="py-4 pl-6 w-20 text-center">Rank</th>
                                    <th className="py-4">User</th>
                                    <th className="py-4 text-center">Problems Solved</th>
                                    <th className="py-4 text-right pr-6">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr
                                        key={user._id}
                                        className="hover:bg-base-100/50 transition-colors border-b border-base-content/5 last:border-0"
                                    >
                                        <td className="py-4 pl-6 text-center">
                                            {index === 0 ? (
                                                <div className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center mx-auto font-bold border border-yellow-500/30">
                                                    1
                                                </div>
                                            ) : index === 1 ? (
                                                <div className="w-8 h-8 rounded-full bg-gray-400/20 text-gray-400 flex items-center justify-center mx-auto font-bold border border-gray-400/30">
                                                    2
                                                </div>
                                            ) : index === 2 ? (
                                                <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center mx-auto font-bold border border-orange-500/30">
                                                    3
                                                </div>
                                            ) : (
                                                <span className="font-mono text-base-content/70 font-bold">
                                                    #{index + 1}
                                                </span>
                                            )}
                                        </td>
                                        <td className="py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="w-10 h-10 rounded-full ring-2 ring-primary/20 ring-offset-2 ring-offset-base-100">
                                                        {user.profileImage ? (
                                                            <img src={user.profileImage} alt={user.name} />
                                                        ) : (
                                                            <div className="bg-base-300 w-full h-full flex items-center justify-center text-base-content/50">
                                                                <UserIcon className="w-5 h-5" />
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold text-base-content">
                                                        {user.name}
                                                    </div>
                                                    <div className="text-xs text-base-content/60">
                                                        {user.email?.split("@")[0]}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 text-center">
                                            <div className="badge badge-lg badge-primary badge-outline font-mono gap-1">
                                                {user.problemsSolved}
                                                <span className="text-[10px] uppercase font-sans font-bold opacity-70">
                                                    Solved
                                                </span>
                                            </div>
                                        </td>
                                        <td className="py-4 text-right pr-6">
                                            {index < 3 ? (
                                                <div className="badge badge-accent badge-sm gap-1">
                                                    <SparklesIcon className="w-3 h-3" /> Top 3
                                                </div>
                                            ) : (
                                                <div className="badge badge-ghost badge-sm">Member</div>
                                            )}
                                        </td>
                                    </tr>
                                ))}

                                {users.length === 0 && (
                                    <tr>
                                        <td colSpan="4" className="text-center py-10 text-base-content/50">
                                            No one has solved any problems yet. Be the first!
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Icon component (helper)
function SparklesIcon({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
        >
            <path
                fillRule="evenodd"
                d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813a3.75 3.75 0 002.576-2.576l.813-2.846A.75.75 0 019 4.5zM9 15a.75.75 0 01.75.75v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0v-1.5h-1.5a.75.75 0 010-1.5h1.5v-1.5A.75.75 0 019 15z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export default LeaderboardPage;
