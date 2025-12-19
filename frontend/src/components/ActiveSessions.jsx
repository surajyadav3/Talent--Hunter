import { Link } from "react-router";
import { UsersIcon, ChevronRightIcon, PlayIcon, Code2Icon } from "lucide-react";

export default function ActiveSessions({ sessions, isLoading, isUserInSession }) {
    if (isLoading) {
        return (
            <div className="card bg-base-100 shadow-xl lg:col-span-2 border border-base-content/5">
                <div className="card-body p-0">
                    <div className="p-6 border-b border-base-content/5 flex items-center justify-between">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <UsersIcon className="size-5 text-primary" />
                            Active Sessions
                        </h2>
                    </div>
                    <div className="p-6 space-y-4">
                        {[1, 2].map((i) => (
                            <div key={i} className="h-24 w-full bg-base-200 animate-pulse rounded-xl"></div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="card bg-base-100 shadow-xl lg:col-span-2 border border-base-content/5 overflow-hidden">
            <div className="card-body p-0">
                <div className="p-6 border-b border-base-content/5 flex items-center justify-between flex-wrap gap-4">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <UsersIcon className="size-5 text-primary" />
                        Live Coding Rooms
                        <span className="badge badge-primary badge-sm ml-2">{sessions.length}</span>
                    </h2>
                    <Link to="/problems" className="btn btn-ghost btn-sm text-primary">View All Problems</Link>
                </div>

                <div className="p-4 sm:p-6">
                    {sessions.length === 0 ? (
                        <div className="text-center py-12 px-6 bg-base-200/50 rounded-2xl border-2 border-dashed border-base-content/10">
                            <div className="size-16 rounded-full bg-base-100 flex items-center justify-center mx-auto mb-4">
                                <UsersIcon className="size-8 text-base-content/20" />
                            </div>
                            <h3 className="text-lg font-bold mb-1">No active sessions</h3>
                            <p className="text-base-content/50 max-w-xs mx-auto mb-6">Create the first room and invite others to practice together.</p>
                        </div>
                    ) : (
                        <div className="grid gap-4">
                            {sessions.map((session) => (
                                <div
                                    key={session._id}
                                    className={`group relative flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 ${isUserInSession(session)
                                            ? "bg-primary/5 border-primary/20 ring-1 ring-primary/10"
                                            : "bg-base-200/30 border-transparent hover:bg-base-200 hover:border-base-300 shadow-sm hover:shadow-md"
                                        }`}
                                >
                                    <div className="flex items-center gap-4 min-w-0">
                                        <div className="relative">
                                            <div className="size-14 rounded-2xl bg-base-100 flex items-center justify-center shadow-inner border border-base-content/5 overflow-hidden">
                                                <Code2Icon className="size-8 text-base-content/40" />
                                            </div>
                                            <div className="absolute -bottom-1 -right-1 size-4 bg-success rounded-full border-2 border-base-100 animate-pulse"></div>
                                        </div>

                                        <div className="min-w-0">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="font-black text-lg truncate group-hover:text-primary transition-colors uppercase tracking-wider">
                                                    {session.problem}
                                                </h3>
                                                {isUserInSession(session) && (
                                                    <span className="badge badge-primary badge-xs">Yours</span>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-base-content/40">
                                                <span className={`px-2 py-0.5 rounded bg-base-300 text-base-content/60`}>
                                                    {session.difficulty}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <div className="size-1.5 rounded-full bg-primary/40"></div>
                                                    {session.host?.clerkId.slice(-4)}'s Room
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <Link
                                            to={`/session/${session._id}`}
                                            className={`btn ${isUserInSession(session) ? 'btn-primary' : 'btn-ghost'} group-hover:scale-105 transition-transform`}
                                        >
                                            {isUserInSession(session) ? (
                                                <>
                                                    <PlayIcon className="size-4 mr-2" />
                                                    Resume
                                                </>
                                            ) : (
                                                <>
                                                    Join
                                                    <ChevronRightIcon className="size-4 ml-1" />
                                                </>
                                            )}
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
