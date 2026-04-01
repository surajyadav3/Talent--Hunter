import { useNavigate } from "react-router";
import { useAppAuth } from "../hooks/useAppAuth";
import { useState } from "react";
import { useActiveSessions, useCreateSession, useMyRecentSessions } from "../hooks/useSessions";
import toast from "react-hot-toast";

import Navbar from "../components/Navbar";
import WelcomeSection from "../components/WelcomeSection";
import StatsCards from "../components/StatsCards";
import ActiveSessions from "../components/ActiveSessions";
import RecentSessions from "../components/RecentSessions";
import CreateSessionModal from "../components/CreateSessionModal";
import LockedFeatures from "../components/LockedFeatures";
import { PROBLEMS } from "../data/problems";
import { Link } from "react-router";
import { ArrowRightIcon, Code2Icon, TrophyIcon } from "lucide-react";

function DashboardPage() {
  const navigate = useNavigate();
  const { user, isAdmin } = useAppAuth();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [roomConfig, setRoomConfig] = useState({ problem: "", difficulty: "" });

  const createSessionMutation = useCreateSession();

  const { data: activeSessionsData, isLoading: loadingActiveSessions } = useActiveSessions();
  const { data: recentSessionsData, isLoading: loadingRecentSessions } = useMyRecentSessions();

  const handleCreateRoom = () => {
    if (!roomConfig.problem || !roomConfig.difficulty) return;

    createSessionMutation.mutate(
      {
        problem: roomConfig.problem,
        difficulty: roomConfig.difficulty.toLowerCase(),
        inviteEmail: roomConfig.inviteEmail?.trim() || undefined
      },
      {
        onSuccess: (data) => {
          console.log("✅ Session Created Response:", data);
          setShowCreateModal(false);

          if (data?.session?._id) {
            navigate(`/session/${data.session._id}`);
          } else {
            console.error("❌ Session object or _id missing from response:", data);
            toast.error("Session created, but failed to navigate. Please refresh the dashboard.");
          }
        },
      }
    );
  };

  const activeSessions = Array.isArray(activeSessionsData?.sessions)
    ? activeSessionsData.sessions.filter(s => s && s._id)
    : [];
  const recentSessions = Array.isArray(recentSessionsData?.sessions)
    ? recentSessionsData.sessions.filter(s => s && s._id)
    : [];

  const isUserInSession = (session) => {
    if (!user.id) return false;

    return session.host?.clerkId === user.id || session.participant?.clerkId === user.id;
  };

  return (
    <>
      <div className="min-h-screen bg-base-300">
        <Navbar />
        <WelcomeSection onCreateSession={() => setShowCreateModal(true)} />

        {/* Dashboard Sections */}
        <div className="container mx-auto px-6 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Stats */}
            <StatsCards
              activeSessionsCount={activeSessions.length}
              recentSessionsCount={recentSessions.length}
            />

            {/* Middle/Right: Role-Specific Content */}
            <div className="lg:col-span-2 space-y-8">
                {/* CANDIDATE SPECIFIC VIEW */}
                {user?.role === "candidate" && (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Problem of the Day */}
                            <div className="card bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-8 rounded-3xl group">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <div className="p-2 bg-primary rounded-lg text-primary-content"><TrophyIcon className="w-5 h-5"/></div>
                                    Problem of the Day
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-lg font-black">{Object.values(PROBLEMS)[0].title}</h4>
                                        <p className="text-sm opacity-50">{Object.values(PROBLEMS)[0].category}</p>
                                    </div>
                                    <Link 
                                        to={`/problem/${Object.keys(PROBLEMS)[0]}`}
                                        className="btn btn-primary btn-sm rounded-xl group-hover:px-8 transition-all"
                                    >
                                        SOLVE NOW
                                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                                    </Link>
                                </div>
                            </div>

                            {/* Practice Shortcuts */}
                            <div className="card bg-base-100 border border-white/5 p-8 rounded-3xl">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <div className="p-2 bg-secondary rounded-lg text-secondary-content"><Code2Icon className="w-5 h-5"/></div>
                                    Quick Start
                                </h3>
                                <div className="grid grid-cols-2 gap-3">
                                    <button className="btn btn-ghost btn-sm bg-base-200/50 justify-between rounded-xl">Easy <ArrowRightIcon className="w-4 h-4"/></button>
                                    <button className="btn btn-ghost btn-sm bg-base-200/50 justify-between rounded-xl">Medium <ArrowRightIcon className="w-4 h-4"/></button>
                                    <button className="btn btn-ghost btn-sm bg-base-200/50 justify-between rounded-xl">Hard <ArrowRightIcon className="w-4 h-4"/></button>
                                    <button className="btn btn-ghost btn-sm bg-base-200/50 justify-between rounded-xl">DP <ArrowRightIcon className="w-4 h-4"/></button>
                                </div>
                            </div>
                        </div>

                        {/* Locked Features for Candidates */}
                        <LockedFeatures isPremium={user?.isPremium} />
                    </>
                )}

                {/* SHARED/RECRUITER CONTENT */}
                <ActiveSessions
                  sessions={activeSessions}
                  isLoading={loadingActiveSessions}
                  isUserInSession={isUserInSession}
                />
                
                <RecentSessions sessions={recentSessions} isLoading={loadingRecentSessions} />
            </div>
          </div>
        </div>
      </div>

      <CreateSessionModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        roomConfig={roomConfig}
        setRoomConfig={setRoomConfig}
        onCreateRoom={handleCreateRoom}
        isCreating={createSessionMutation.isPending}
      />
    </>
  );
}

export default DashboardPage;