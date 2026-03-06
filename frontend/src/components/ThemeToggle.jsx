import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";

function ThemeToggle() {
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem("theme");
        return saved ? saved === "night" : true; // Default to night
    });

    useEffect(() => {
        const theme = isDark ? "night" : "winter";
        const root = window.document.documentElement;
        root.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);

        // Update body background specifically for smoother transitions if needed
        if (isDark) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [isDark]);

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className="btn btn-ghost btn-circle transition-all duration-500 hover:bg-primary/10 group relative overflow-hidden"
            aria-label="Toggle Theme"
        >
            <div className="relative size-6 flex items-center justify-center">
                {/* Sun Icon */}
                <SunIcon
                    className={`absolute size-5 text-amber-500 transition-all duration-500 transform ${isDark ? "translate-y-10 opacity-0 rotate-90" : "translate-y-0 opacity-100 rotate-0"
                        }`}
                />

                {/* Moon Icon */}
                <MoonIcon
                    className={`absolute size-5 text-indigo-400 transition-all duration-500 transform ${isDark ? "translate-y-0 opacity-100 rotate-0" : "-translate-y-10 opacity-0 -rotate-90"
                        }`}
                />
            </div>

            {/* Hover effect glow */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-tr ${isDark ? "from-indigo-500/20 to-purple-500/20" : "from-amber-500/20 to-orange-500/20"
                }`} />
        </button>
    );
}

export default ThemeToggle;

