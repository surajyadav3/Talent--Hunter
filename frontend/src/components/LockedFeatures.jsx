import { LockIcon, SparklesIcon, ZapIcon, BarChart3Icon, BrainCircuitIcon, TargetIcon } from "lucide-react";

function LockedFeatures({ isPremium }) {
    const features = [
        {
            title: "AI Interview Coach",
            desc: "Get real-time feedback and hints from our advanced AI while solving problems.",
            icon: BrainCircuitIcon,
            color: "text-primary",
            bg: "bg-primary/10"
        },
        {
            title: "Company-wise Questions",
            desc: "Access curated question lists from Top Tech companies like Google, Meta, and Amazon.",
            icon: TargetIcon,
            color: "text-secondary",
            bg: "bg-secondary/10"
        },
        {
            title: "Advanced Analytics",
            desc: "Deep dive into your performance metrics and identify weak areas automatically.",
            icon: BarChart3Icon,
            color: "text-accent",
            bg: "bg-accent/10"
        }
    ];

    return (
        <div className="card bg-base-100 border-2 border-amber-500/20 hover:border-amber-500/40 relative overflow-hidden group">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-amber-500/10 transition-colors"></div>
            
            <div className="card-body p-8">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-amber-500/10 rounded-2xl">
                            <LockIcon className="w-6 h-6 text-amber-500" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-black">Premium Features</h2>
                            <p className="text-sm opacity-50">Master your technical interviews</p>
                        </div>
                    </div>
                    {!isPremium && (
                        <button className="btn btn-warning btn-sm border-none bg-amber-500 hover:bg-amber-600 text-amber-950 font-black shadow-lg shadow-amber-500/20 px-6 rounded-xl">
                            UPGRADE
                        </button>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((f, i) => (
                        <div key={i} className="relative p-6 rounded-2xl bg-base-200/50 border border-white/5 transition-all hover:bg-base-200">
                            <div className={`p-2 w-fit rounded-lg ${f.bg} ${f.color} mb-4`}>
                                <f.icon className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold mb-2 flex items-center gap-2">
                                {f.title}
                                {!isPremium && <LockIcon className="w-3 h-3 opacity-30" />}
                            </h3>
                            <p className="text-xs text-base-content/50 leading-relaxed">
                                {f.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {!isPremium && (
                    <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-sm">
                            <SparklesIcon className="w-4 h-4 text-amber-500" />
                            <span className="opacity-80">Get 50% off for the first month. Use code: <span className="font-bold text-amber-500">START2026</span></span>
                        </div>
                        <button className="btn btn-primary btn-outline group rounded-xl">
                            Explore Premium
                            <ZapIcon className="w-4 h-4 ml-2 group-hover:scale-125 transition-transform" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LockedFeatures;
