import { HistoryIcon, ExternalLinkIcon, CalendarIcon, TimerIcon } from "lucide-react";
import { Link } from "react-router";

export default function RecentSessions({ sessions, isLoading }) {
    if (isLoading) {
        return (
            <div className="mt-8 card bg-base-100 shadow-xl border border-base-content/5">
                <div className="card-body p-8 animate-pulse space-y-4">
                    <div className="h-8 w-48 bg-base-200 rounded"></div>
                    <div className="h-64 bg-base-200 rounded-xl"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="mt-12 card bg-base-100 shadow-xl border border-base-content/5 overflow-hidden">
            <div className="card-body p-0">
                <div className="p-8 border-b border-base-content/5 flex items-center justify-between">
                    <h2 className="text-2xl font-black flex items-center gap-3">
                        <HistoryIcon className="size-6 text-secondary" />
                        Your Coding Activity
                    </h2>
                    <span className="text-xs font-bold text-base-content/30 uppercase tracking-[0.2em]">History</span>
                </div>

                <div className="overflow-x-auto">
                    {sessions.length === 0 ? (
                        <div className="text-center py-20 px-6">
                            <div className="size-20 rounded-full bg-base-200 flex items-center justify-center mx-auto mb-6">
                                <HistoryIcon className="size-10 text-base-content/20" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">No history yet</h3>
                            <p className="text-base-content/50 max-w-sm mx-auto">Your completed and past sessions will appear here once you start practicing.</p>
                        </div>
                    ) : (
                        <table className="table table-lg w-full">
                            <thead>
                                <tr className="bg-base-200/50 text-base-content/40 border-none">
                                    <th className="font-bold uppercase tracking-widest text-[10px] pl-8">Problem</th>
                                    <th className="font-bold uppercase tracking-widest text-[10px]">Date</th>
                                    <th className="font-bold uppercase tracking-widest text-[10px]">Status</th>
                                    <th className="font-bold uppercase tracking-widest text-[10px] pr-8 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-base-content/5">
                                {sessions.map((session) => (
                                    <tr key={session._id} className="hover:bg-base-200/50 transition-colors group">
                                        <td className="pl-8 py-5">
                                            <div className="flex items-center gap-4">
                                                <div className="size-10 rounded-lg bg-base-200 flex items-center justify-center border border-base-content/5">
                                                    <HistoryIcon className="size-5 text-base-content/30" />
                                                </div>
                                                <div>
                                                    <div className="font-black text-base uppercase tracking-wider group-hover:text-secondary transition-colors truncate max-w-[200px]">
                                                        {session.problem}
                                                    </div>
                                                    <div className="badge badge-ghost badge-xs font-bold uppercase tracking-tighter opacity-50">
                                                        {session.difficulty}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-5">
                                            <div className="flex items-center gap-2 text-sm text-base-content/60 font-medium">
                                                <CalendarIcon className="size-4 opacity-30" />
                                                {new Date(session.createdAt).toLocaleDateString()}
                                            </div>
                                        </td>
                                        <td className="py-5">
                                            <div className="flex items-center gap-2">
                                                <div className={`size-2 rounded-full ${session.status === 'active' ? 'bg-success animate-pulse' : 'bg-base-content/20'}`}></div>
                                                <span className="text-xs font-bold uppercase tracking-widest opacity-60">{session.status}</span>
                                            </div>
                                        </td>
                                        <td className="pr-8 py-5 text-right">
                                            <Link
                                                to={`/session/${session._id}`}
                                                className="btn btn-ghost btn-sm group-hover:bg-secondary group-hover:text-secondary-content transition-all"
                                            >
                                                View Details
                                                <ExternalLinkIcon className="size-3.5 ml-1.5 opacity-40 group-hover:opacity-100" />
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}
