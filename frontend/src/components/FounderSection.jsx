import React from "react";
import { LinkedinIcon, GithubIcon, TwitterIcon, ExternalLinkIcon } from "lucide-react";

const FounderSection = () => {
    return (
        <div className="py-20 relative bg-base-100/50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    {/* Image Container - Professional & Simple */}
                    <div className="relative w-full lg:w-96">
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                            <img
                                src="/profile-pic.png"
                                alt="Suraj Yadav"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        {/* Decorative Badge */}
                        <div className="absolute -bottom-6 -right-6 p-4 glass-dark rounded-xl shadow-xl hidden md:block">
                            <div className="text-primary font-black text-xl leading-none">DEVELOPER</div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 space-y-8">
                        <div className="space-y-4">
                            <div className="text-primary font-bold tracking-[0.2em] text-xs uppercase">Developer & Student at RGIPT</div>
                            <h2 className="text-4xl lg:text-6xl font-black tracking-tight leading-none text-base-content">
                                Suraj Yadav
                            </h2>
                        </div>

                        <div className="text-lg text-base-content/70 leading-relaxed space-y-6 lg:max-w-2xl">
                            <p>
                                I'm a passionate developer and currently a student at Rajiv Gandhi Institute of Petroleum Technology. I envisioned a platform where technical skills speak louder than resumes.
                            </p>
                            <p className="italic border-l-4 border-primary pl-6">
                                "Collaborating and learning shouldn't be hard. We're building the future of peer-to-peer technical growth."
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-6 pt-4">
                            {[
                                { icon: GithubIcon, link: "https://github.com/surajyadav3" },
                                { icon: LinkedinIcon, link: "https://www.linkedin.com/in/suraj-yadav-989233257/" },
                                { icon: TwitterIcon, link: "#" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.link}
                                    className="p-3 bg-base-200 border border-white/5 rounded-xl transition-all hover:bg-primary hover:text-white hover:scale-110 active:scale-95"
                                >
                                    <social.icon className="size-5" />
                                </a>
                            ))}
                        </div>

                        {/* Metrics */}
                        <div className="grid grid-cols-2 gap-8 pt-8">
                            <div>
                                <div className="text-4xl font-black text-primary">RGIPT</div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-base-content/40">Institution</div>
                            </div>
                            <div>
                                <div className="text-4xl font-black text-secondary">2026</div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-base-content/40">Graduation Year</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FounderSection;

