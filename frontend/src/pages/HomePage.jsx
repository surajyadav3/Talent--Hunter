import { useState, useEffect } from "react";
import {
  ArrowRightIcon,
  CheckIcon,
  Code2Icon,
  SparklesIcon,
  UsersIcon,
  VideoIcon,
  ZapIcon,
  XIcon,
} from "lucide-react";
import { useClerk } from "@clerk/clerk-react";
import Navbar from "../components/Navbar";
import FounderSection from "../components/FounderSection";

function HomePage() {
  const [showDemo, setShowDemo] = useState(false);
  const clerk = useClerk();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const handleStartOnboarding = (role) => {
    localStorage.setItem("intentRole", role || "candidate");
    clerk.openSignUp({
      afterSignUpUrl: "/role-selection",
      afterSignInUrl: "/dashboard",
    });
  };

  return (
    <div className="min-h-screen bg-base-100 flex flex-col selection:bg-primary/20">
      <Navbar onStartOnboarding={() => handleStartOnboarding("candidate")} />

      <main className="flex-1">
        {/* HERO SECTION - Professional & Clean */}
        <div className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
          {/* Subtle Background Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-primary/5 to-transparent -z-10 group-hover:from-primary/10 transition-colors duration-1000"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              {/* LEFT CONTENT */}
              <div className="flex-1 space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                  <ZapIcon className="size-3" />
                  Elevate Your Coding Career
                </div>

                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-tight text-base-content">
                    Real-time <span className="text-primary">Collaboration</span> <br />
                    for Modern Developers.
                  </h1>
                  <p className="text-lg lg:text-xl text-base-content/60 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    The professional platform for technical interviews and pair programming. 
                    Built-in video, high-performance code editor, and seamless workspace.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                  <button 
                    onClick={() => handleStartOnboarding("candidate")}
                    className="btn btn-primary btn-lg rounded-xl h-14 px-8 shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all text-sm font-bold group">
                    Join Talent-Hunter
                    <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => setShowDemo(true)}
                    className="btn btn-ghost border border-base-content/10 btn-lg rounded-xl h-14 px-8 hover:bg-base-content/5 text-sm font-bold flex items-center gap-2">
                    <VideoIcon className="size-4" />
                    Watch Platform Demo
                  </button>
                </div>

                {/* SOCIAL PROOF / STATS - Simple & Clean */}
                <div className="flex items-center justify-center lg:justify-start gap-12 pt-8 border-t border-base-content/5">
                    <div className="flex flex-col">
                        <span className="text-2xl font-black">10K+</span>
                        <span className="text-[10px] uppercase font-bold tracking-widest opacity-40">Monthly Users</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-black">50K+</span>
                        <span className="text-[10px] uppercase font-bold tracking-widest opacity-40">Sessions Held</span>
                    </div>
                </div>
              </div>

              {/* RIGHT IMAGE - Professional Screenshot */}
              <div className="flex-1 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-base-content/5 bg-base-200 aspect-[4/3] group">
                  <img
                    src="/hero_professional.png"
                    alt="Talent-Hunter Interface"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                </div>
                {/* Subtle Glow */}
                <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-3xl -z-10 opacity-30"></div>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURES GRID - Simplified */}
        <div className="bg-base-200/30 py-24 border-y border-base-content/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12">
                    {[
                        { icon: VideoIcon, title: "Crystal Clear Video", desc: "Low-latency HD video call integrated directly into the workspace." },
                        { icon: Code2Icon, title: "Pro Code Editor", desc: "Monaco-powered editor with multi-language support and execution." },
                        { icon: SparklesIcon, title: "Seamless Sync", desc: "Zero-latency code synchronization for smooth pair programming." }
                    ].map((f, i) => (
                        <div key={i} className="flex flex-col items-start gap-4 p-4">
                            <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                <f.icon className="size-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold tracking-tight">{f.title}</h3>
                            <p className="text-base-content/60 leading-relaxed text-sm font-medium">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* FOUNDER SECTION */}
        <FounderSection />

        {/* CTA SECTION - Clean & Professional */}
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
            <div className="bg-primary/5 rounded-3xl p-12 lg:p-20 space-y-8 border border-primary/10">
                <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-base-content">
                    Ready to showcase your true potential?
                </h2>
                <p className="text-lg text-base-content/60 max-w-2xl mx-auto font-medium">
                    Join the elite circle of developers who are using Talent-Hunter to advance their careers.
                </p>
                <div className="flex justify-center pt-4">
                    <button 
                        onClick={() => handleStartOnboarding("candidate")}
                        className="btn btn-primary btn-lg rounded-xl h-14 px-12 shadow-xl shadow-primary/20 hover:scale-105 transition-all text-sm font-bold">
                        Start Now for Free
                    </button>
                </div>
            </div>
        </div>
      </main>

      {/* FOOTER - Clean & Simple */}
      <footer className="border-t border-base-content/5 py-12">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-2">
                  <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
                    <SparklesIcon className="size-4 text-white" />
                  </div>
                  <span className="font-extrabold tracking-tight text-xl">Talent-Hunter</span>
              </div>
              <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest opacity-40">
                  <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
                  <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
                  <a href="#" className="hover:opacity-100 transition-opacity">Support</a>
              </div>
              <p className="text-xs text-base-content/40 font-medium">
                  © 2026 Talent-Hunter. Built for the next generation.
              </p>
          </div>
      </footer>

      {/* DEMO MODAL */}
      {showDemo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-base-300/80 backdrop-blur-xl animate-in fade-in duration-300"
            onClick={() => setShowDemo(false)}
          />
          <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-base-content/10 bg-base-100 animate-in zoom-in-95 duration-300">
            <button
              onClick={() => setShowDemo(false)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-base-300/50 hover:bg-base-300 transition-colors"
            >
              <XIcon className="size-6" />
            </button>
            <iframe
              src="https://www.youtube.com/embed/KGNv-wAJAmc?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;


