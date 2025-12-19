import { useUser } from "@clerk/clerk-react";
import { PlusIcon } from "lucide-react";

export default function WelcomeSection({ onCreateSession }) {
    const { user } = useUser();

    return (
        <div className="relative overflow-hidden bg-base-300 pt-20 pb-40">
            {/* Background decoration - much more subtle */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
                <div className="absolute -top-48 -left-48 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
                <div className="absolute top-1/2 left-2/3 w-64 h-64 bg-secondary rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl">
                    <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
                        Welcome back, <span className="text-primary">{user?.firstName || "Hunter"}</span>! 🏹
                    </h1>
                    <p className="text-xl text-base-content/70 mb-10 max-w-2xl leading-relaxed">
                        Ready for your next coding challenge? Create a room to practice with others
                        or review your recent sessions. Let's sharpen those skills together.
                    </p>

                    <button
                        onClick={onCreateSession}
                        className="btn btn-primary btn-lg px-10 shadow-xl shadow-primary/20 hover:scale-105 transition-all group"
                    >
                        <PlusIcon className="size-6 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                        Create Coding Room
                    </button>
                </div>
            </div>
        </div>
    );
}
