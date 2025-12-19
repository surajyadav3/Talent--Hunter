import React, { useState, useEffect } from 'react';
import { UsersIcon, ZapIcon, TargetIcon, ActivityIcon } from 'lucide-react';
import axiosInstance from '../lib/axios';

const LiveStats = () => {
    const [stats, setStats] = useState({
        activeNow: 0,
        totalSessions: 0,
        successRate: 98.2,
        problemsSolved: 0
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await axiosInstance.get('/stats');
                if (response.data.success) {
                    const { activeSessions, totalSessions, problemsSolved } = response.data.stats;
                    setStats(prev => ({
                        ...prev,
                        activeNow: activeSessions,
                        totalSessions: totalSessions,
                        problemsSolved: problemsSolved
                    }));
                }
            } catch (error) {
                console.error("Error fetching real stats:", error);
            }
        };

        fetchStats();
        // Poll every 10 seconds for real updates
        const interval = setInterval(fetchStats, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative overflow-hidden py-24 bg-base-300/30">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] -z-10 animate-pulse delay-700" />

            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-4 animate-bounce">
                        <ActivityIcon className="size-4" />
                        LIVE SYSTEM PULSE
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black mb-4 tracking-tight">
                        The Community is <span className="text-primary">Thriving</span>
                    </h2>
                    <p className="text-base-content/60 max-w-2xl mx-auto text-lg italic">
                        "Real-time activity across the Talent Hunter global network"
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Active Now */}
                    <div className="card bg-base-100/50 backdrop-blur-xl border border-white/5 hover:border-primary/30 transition-all duration-500 group">
                        <div className="card-body p-6 items-center text-center">
                            <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <UsersIcon className="size-7 text-primary" />
                            </div>
                            <div className="text-3xl lg:text-4xl font-black mb-2 tabular-nums tracking-tight">
                                {stats.activeNow.toLocaleString()}
                            </div>
                            <div className="text-xs font-bold uppercase tracking-widest text-base-content/40 mb-1">Active Now</div>
                            <div className="flex items-center gap-1.5 text-success text-xs font-bold">
                                <div className="size-2 rounded-full bg-success animate-ping" />
                                STABLE
                            </div>
                        </div>
                    </div>

                    {/* Sessions */}
                    <div className="card bg-base-100/50 backdrop-blur-xl border border-white/5 hover:border-secondary/30 transition-all duration-500 group">
                        <div className="card-body p-6 items-center text-center">
                            <div className="size-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <ZapIcon className="size-7 text-secondary" />
                            </div>
                            <div className="text-3xl lg:text-4xl font-black mb-2 tabular-nums tracking-tight">
                                {stats.totalSessions.toLocaleString()}
                            </div>
                            <div className="text-xs font-bold uppercase tracking-widest text-base-content/40 mb-1">Total Sessions</div>
                            <div className="text-secondary text-xs font-bold">+12 JOINED RECENTLY</div>
                        </div>
                    </div>

                    {/* Problems Solved */}
                    <div className="card bg-base-100/50 backdrop-blur-xl border border-white/5 hover:border-accent/30 transition-all duration-500 group">
                        <div className="card-body p-6 items-center text-center">
                            <div className="size-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <TargetIcon className="size-7 text-accent" />
                            </div>
                            <div className="text-3xl lg:text-4xl font-black mb-2 tabular-nums tracking-tight">
                                {stats.problemsSolved.toLocaleString()}
                            </div>
                            <div className="text-xs font-bold uppercase tracking-widest text-base-content/40 mb-1">Codes Executed</div>
                            <div className="text-accent text-xs font-bold">REAL-TIME EXECUTION</div>
                        </div>
                    </div>

                    {/* Success Rate */}
                    <div className="card bg-base-100/50 backdrop-blur-xl border border-white/5 hover:border-primary/30 transition-all duration-500 group">
                        <div className="card-body p-6 items-center text-center">
                            <div className="size-14 rounded-2xl bg-success/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <ActivityIcon className="size-7 text-success" />
                            </div>
                            <div className="text-3xl lg:text-4xl font-black mb-2 tabular-nums tracking-tight">
                                {stats.successRate.toFixed(1)}%
                            </div>
                            <div className="text-xs font-bold uppercase tracking-widest text-base-content/40 mb-1">Interview Success</div>
                            <div className="text-success text-xs font-bold">PLATFORM AVERAGE</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LiveStats;
