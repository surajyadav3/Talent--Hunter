import { UsersIcon, HistoryIcon, AwardIcon } from "lucide-react";

const StatCard = ({ icon: Icon, title, value, colorClass, gradientClass }) => (
    <div className={`card bg-base-100 shadow-xl border border-base-content/5 overflow-hidden group hover:scale-[1.02] transition-transform`}>
        <div className={`absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full opacity-10 group-hover:opacity-20 transition-opacity ${colorClass}`}></div>
        <div className="card-body p-6 flex-row items-center gap-6">
            <div className={`size-14 rounded-2xl flex items-center justify-center shadow-lg ${gradientClass}`}>
                <Icon className="size-7 text-white" />
            </div>
            <div>
                <p className="text-sm font-bold text-base-content/50 uppercase tracking-widest">{title}</p>
                <p className="text-3xl font-black">{value}</p>
            </div>
        </div>
    </div>
);

export default function StatsCards({ activeSessionsCount, recentSessionsCount }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard
                icon={UsersIcon}
                title="Live Rooms"
                value={activeSessionsCount || 0}
                colorClass="bg-primary"
                gradientClass="bg-gradient-to-br from-primary to-primary-focus"
            />
            <StatCard
                icon={HistoryIcon}
                title="My History"
                value={recentSessionsCount || 0}
                colorClass="bg-secondary"
                gradientClass="bg-gradient-to-br from-secondary to-secondary-focus"
            />
            <StatCard
                icon={AwardIcon}
                title="My XP"
                value="1,240"
                colorClass="bg-accent"
                gradientClass="bg-gradient-to-br from-accent to-accent-focus"
            />
        </div>
    );
}
