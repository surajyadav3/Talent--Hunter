import { useEffect, useState } from "react";
import { MoonIcon, SunIcon, PaletteIcon } from "lucide-react";

const themes = [
    { name: "night", icon: MoonIcon, label: "Dark" },
    { name: "winter", icon: SunIcon, label: "Light" },
    { name: "dracula", icon: PaletteIcon, label: "Vibrant" },
    { name: "nord", icon: PaletteIcon, label: "Nord" },
];

function ThemeToggle() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "night"
    );

    useEffect(() => {
        const root = window.document.documentElement;
        root.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <PaletteIcon className="size-5" />
                </div>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-base-200 rounded-box w-52 border border-white/10 backdrop-blur-xl"
            >
                <div className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-base-content/40">
                    Select Theme
                </div>
                {themes.map((t) => (
                    <li key={t.name}>
                        <button
                            className={`flex items-center justify-between py-3 ${theme === t.name ? "bg-primary/10 text-primary font-bold" : ""}`}
                            onClick={() => setTheme(t.name)}
                        >
                            <div className="flex items-center gap-3">
                                <t.icon className="size-4" />
                                {t.label}
                            </div>
                            {theme === t.name && <div className="size-2 rounded-full bg-primary animate-pulse" />}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ThemeToggle;
