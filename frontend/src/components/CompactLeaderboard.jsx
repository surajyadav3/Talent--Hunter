import { useQuery } from "@tanstack/react-query";
import { TrophyIcon, UserIcon, Loader2Icon } from "lucide-react";
import { userApi } from "../api/users";
import { Link } from "react-router";

function CompactLeaderboard() {
    const { data, isLoading } = useQuery({
        queryKey: ["leaderboard"],
        queryFn: userApi.getLeaderboard,
    });

    const students = data?.users?.slice(0, 5) || [];

    return (
        <div className="lg:col-span-1 bg-base-100 rounded-3xl p-6 border border-base-content/5 shadow-xl flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                        <TrophyIcon className="size-5" />
                    </div>
                    <h3 className="font-bold text-lg">Top Candidates</h3>
                </div>
                <Link to="/leaderboard" className="text-xs text-primary hover:underline font-semibold">View All</Link>
            </div>

            <div className="flex-1 space-y-4">
                {isLoading ? (
                    <div className="flex justify-center p-8"><Loader2Icon className="animate-spin opacity-20" /></div>
                ) : students.length === 0 ? (
                    <p className="text-sm opacity-50 text-center py-4">No candidates active</p>
                ) : (
                    students.map((student, index) => (
                        <div key={student._id} className="flex items-center justify-between p-2 rounded-xl hover:bg-base-200 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="text-xs font-mono opacity-40 w-4">{index + 1}</div>
                                {student.profileImage ? (
                                    <img src={student.profileImage} className="size-8 rounded-full" alt="" />
                                ) : (
                                    <div className="size-8 rounded-full bg-base-300 flex items-center justify-center text-base-content/30">
                                        <UserIcon className="size-4" />
                                    </div>
                                )}
                                <div className="max-w-[100px] overflow-hidden">
                                    <p className="text-sm font-bold truncate">{student.name}</p>
                                    <p className="text-[10px] opacity-40 truncate">{student.email}</p>
                                </div>
                            </div>
                            <div className="badge badge-sm badge-outline opacity-60 font-mono">{student.problemsSolved}</div>
                        </div>
                    ))
                )}
            </div>

            <div className="mt-6 pt-4 border-t border-base-content/5">
                <p className="text-[10px] uppercase font-bold opacity-30 tracking-widest text-center">Talent Community</p>
            </div>
        </div>
    );
}

export default CompactLeaderboard;
