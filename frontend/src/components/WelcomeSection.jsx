import { SparklesIcon, ZapIcon, ArrowRightIcon } from "lucide-react";
import { useAppAuth } from "../hooks/useAppAuth";

function WelcomeSection({ onCreateSession }) {
    const { user, isAdmin } = useAppAuth();

    return (
        <div className="relative overflow-hidden">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <div className="relative max-w-7xl mx-auto px-6 py-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                                <SparklesIcon className="w-6 h-6 text-white" />
                            </div>
                            <h1 className="text-5xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                                Welcome back, {user?.name?.split(" ")[0] || "there"}!
                                <span className={`ml-4 text-xs font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${isAdmin ? "bg-red-500/10 border-red-500/20 text-red-500" : (user?.role === "recruiter" ? "bg-primary/10 border-primary/20 text-primary" : "bg-success/10 border-success/20 text-success")}`}>
                                    {isAdmin ? "Admin" : (user?.role === "recruiter" ? "Recruiter" : "Candidate")}
                                </span>
                            </h1>
                        </div>
                        <p className="text-xl text-base-content/60 ml-16">
                            {isAdmin || user?.role === "recruiter" ? "Create an interview session to evaluate candidates." : "Ready to level up your coding skills?"}
                        </p>
                    </div>
                    {(isAdmin || user?.role === "recruiter") ? (
                        <button
                            onClick={onCreateSession}
                            className="btn btn-primary btn-lg rounded-3xl px-8 shadow-2xl hover:scale-105 active:scale-95 transition-all group border-none bg-gradient-to-r from-primary via-secondary to-accent"
                        >
                            <ZapIcon className="w-6 h-6 mr-2 fill-white" />
                            <span className="text-white font-black tracking-tighter uppercase mr-1">Launch Session</span>
                            <ArrowRightIcon className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                        </button>
                    ) : (
                        <button
                            onClick={() => window.open("https://forms.gle/your-request-form", "_blank")}
                            className="btn btn-ghost border-2 border-primary/20 hover:border-primary/40 rounded-3xl px-8 shadow-xl hover:scale-105 active:scale-95 transition-all group backdrop-blur-md"
                        >
                            <SparklesIcon className="w-6 h-6 mr-2 text-primary group-hover:animate-spin" />
                            <span className="font-bold tracking-tight">Request Skill Evaluation</span>
                            <ArrowRightIcon className="w-5 h-5 opacity-40 group-hover:translate-x-1 transition-transform" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default WelcomeSection;