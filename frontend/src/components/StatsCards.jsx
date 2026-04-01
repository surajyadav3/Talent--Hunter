import { TrophyIcon, UsersIcon, CheckCircle2Icon } from "lucide-react";
import { useAppAuth } from "../hooks/useAppAuth";

function StatsCards({ activeSessionsCount, recentSessionsCount }) {
    const { user, isAdmin } = useAppAuth();
    const isRecruiter = isAdmin || user?.role === "recruiter";

    return (
        <div className="lg:col-span-1 grid grid-cols-1 gap-6">
            {/* Main Count */}
            <div className={`card bg-base-100 border-2 ${isRecruiter ? "border-primary/20 hover:border-primary/40" : "border-success/20 hover:border-success/40 transition-all"}`}>
                <div className="card-body p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-2xl ${isRecruiter ? "bg-primary/10 text-primary" : "bg-success/10 text-success"}`}>
                            {isRecruiter ? <UsersIcon className="w-7 h-7" /> : <CheckCircle2Icon className="w-7 h-7" />}
                        </div>
                        {isRecruiter && <div className="badge badge-primary font-black uppercase tracking-tighter shadow-sm animate-pulse">Live</div>}
                    </div>
                    <div className="text-5xl font-black mb-1">{isRecruiter ? activeSessionsCount : user?.problemsSolved || 0}</div>
                    <div className="text-sm font-bold opacity-40 uppercase tracking-widest">{isRecruiter ? "Active Sessions" : "Total Solved"}</div>
                </div>
            </div>

            {/* Sub Count */}
            <div className={`card bg-base-100 border-2 ${isRecruiter ? "border-secondary/20 hover:border-secondary/40" : "border-primary/20 hover:border-primary/40 transition-all"}`}>
                <div className="card-body p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-2xl ${isRecruiter ? "bg-secondary/10 text-secondary" : "bg-primary/10 text-primary"}`}>
                            <TrophyIcon className="w-7 h-7" />
                        </div>
                    </div>
                    <div className="text-5xl font-black mb-1">{recentSessionsCount}</div>
                    <div className="text-sm font-bold opacity-40 uppercase tracking-widest">{isRecruiter ? "Total Interviews" : "Completed Sessions"}</div>
                </div>
            </div>
        </div>
    );
}

export default StatsCards;