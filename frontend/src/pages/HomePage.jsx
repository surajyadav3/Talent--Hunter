import { Link } from "react-router";
import {
  ArrowRightIcon,
  CheckIcon,
  Code2Icon,
  SparklesIcon,
  UsersIcon,
  VideoIcon,
  ZapIcon,
} from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col selection:bg-primary/20">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <div className="relative overflow-hidden">
          {/* Background Orbs */}
          <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

          <div className="max-w-7xl mx-auto px-4 py-16 lg:py-28 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* LEFT CONTENT */}
              <div className="space-y-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                  <ZapIcon className="size-3" />
                  Real-time Collaboration
                </div>

                <h1 className="text-6xl lg:text-8xl font-black leading-[0.9] tracking-tighter">
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    Code Together,
                  </span>
                  <br />
                  <span className="text-base-content">Learn Together</span>
                </h1>

                <p className="text-xl text-base-content/60 leading-relaxed max-w-xl">
                  The ultimate platform for collaborative coding interviews and pair programming.
                  Connect face-to-face, code in real-time, and ace your technical interviews.
                </p>

                {/* FEATURE PILLS */}
                <div className="flex flex-wrap gap-3">
                  {["Live Video Chat", "Monaco Editor", "Multi-Language"].map((feature) => (
                    <div key={feature} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-base-200/50 border border-white/5 text-sm font-medium">
                      <CheckIcon className="size-4 text-success" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <SignInButton mode="modal">
                    <button className="btn btn-primary btn-lg shadow-xl shadow-primary/20 group hover:scale-105 transition-all">
                      Start Coding Now
                      <ArrowRightIcon className="size-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </SignInButton>

                  <button className="btn btn-ghost btn-lg border border-white/10 hover:bg-white/5">
                    <VideoIcon className="size-5" />
                    Watch Demo
                  </button>
                </div>

                {/* STATS */}
                <div className="inline-flex items-center gap-8 px-8 py-4 bg-base-200/30 backdrop-blur-md rounded-2xl border border-white/5 divide-x divide-white/10">
                  <div>
                    <div className="text-2xl font-black text-primary">10K+</div>
                    <div className="text-[10px] uppercase font-bold text-base-content/40">Users</div>
                  </div>
                  <div className="pl-8">
                    <div className="text-2xl font-black text-secondary">50K+</div>
                    <div className="text-[10px] uppercase font-bold text-base-content/40">Sessions</div>
                  </div>
                  <div className="pl-8">
                    <div className="text-2xl font-black text-accent">99.9%</div>
                    <div className="text-[10px] uppercase font-bold text-base-content/40">Uptime</div>
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-700 group-hover:rotate-1">
                  <img
                    src="/hero.png"
                    alt="CodeCollab Platform"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURES SECTION */}
        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">
              Everything You Need to <span className="text-primary italic font-mono">Succeed</span>
            </h2>
            <p className="text-lg text-base-content/50 max-w-2xl mx-auto">
              Powerful features designed to make your coding interviews seamless and productive
            </p>
          </div>

          {/* FEATURES GRID */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: VideoIcon, title: "HD Video Call", desc: "Crystal clear video and audio for seamless communication during interviews" },
              { icon: Code2Icon, title: "Live Code Editor", desc: "Collaborate in real-time with syntax highlighting and multiple language support" },
              { icon: UsersIcon, title: "Easy Collaboration", desc: "Share your screen, discuss solutions, and learn from each other in real-time" }
            ].map((f, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-base-200/30 border border-white/5 backdrop-blur-sm transition-all hover:bg-base-200/50 hover:-translate-y-2">
                <div className="size-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <f.icon className="size-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-base-content/50 leading-relaxed text-sm">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

          {/* ADDED SECTION FOR PROBLEMS, DASHBOARD, LEADERBOARD */}
          <div className="mt-24 p-12 rounded-[3rem] bg-gradient-to-br from-base-200/50 via-base-200/20 to-transparent border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

            <div className="relative z-10 text-center space-y-8">
              <h3 className="text-3xl font-black">Explore Our Platform</h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="p-6 rounded-2xl bg-base-100/50 border border-white/5">
                  <div className="text-primary font-black text-lg mb-1">Problems</div>
                  <p className="text-xs text-base-content/50">Curated coding challenges</p>
                </div>
                <div className="p-6 rounded-2xl bg-base-100/50 border border-white/5">
                  <div className="text-secondary font-black text-lg mb-1">Dashboard</div>
                  <p className="text-xs text-base-content/50">Track your progress</p>
                </div>
                <div className="p-6 rounded-2xl bg-base-100/50 border border-white/5">
                  <div className="text-accent font-black text-lg mb-1">Leaderboard</div>
                  <p className="text-xs text-base-content/50">Compete with others</p>
                </div>
              </div>

              <div className="pt-4">
                <SignInButton mode="modal">
                  <button className="btn btn-primary btn-lg rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 transition-all px-12">
                    Get Started Now
                  </button>
                </SignInButton>
                <p className="text-[10px] uppercase font-bold text-base-content/30 mt-4 tracking-widest">
                  Join 10,000+ developers today
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;