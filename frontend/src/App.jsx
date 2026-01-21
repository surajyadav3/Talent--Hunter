import { useUser } from "@clerk/clerk-react";
import { Navigate, Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";

import SyncAuth from "./components/SyncAuth";

// Lazy load pages
const HomePage = lazy(() => import("./pages/HomePage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const ProblemPage = lazy(() => import("./pages/ProblemPage"));
const ProblemsPage = lazy(() => import("./pages/ProblemsPage"));
const LeaderboardPage = lazy(() => import("./pages/LeaderboardPage"));
const SessionPage = lazy(() => import("./pages/SessionPage"));
const PricingPage = lazy(() => import("./pages/PricingPage"));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 italic text-xs">
    <div className="loading loading-spinner loading-lg text-primary mb-4"></div>
    <div className="font-mono uppercase tracking-[0.2em] opacity-50 animate-pulse">Initializing Experience...</div>
  </div>
);

function App() {
  const { isSignedIn, isLoaded } = useUser();

  // this will get rid of the flickering effect
  if (!isLoaded) return <PageLoader />;

  return (
    <>
      <SyncAuth />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={!isSignedIn ? <HomePage /> : <Navigate to={"/dashboard"} />} />
          <Route path="/dashboard" element={isSignedIn ? <DashboardPage /> : <Navigate to={"/"} />} />

          <Route path="/problems" element={isSignedIn ? <ProblemsPage /> : <Navigate to={"/"} />} />
          <Route path="/leaderboard" element={isSignedIn ? <LeaderboardPage /> : <Navigate to={"/"} />} />
          <Route path="/problem/:id" element={isSignedIn ? <ProblemPage /> : <Navigate to={"/"} />} />
          <Route path="/session/:id" element={isSignedIn ? <SessionPage /> : <Navigate to={"/"} />} />
          <Route path="/pricing" element={isSignedIn ? <PricingPage /> : <Navigate to={"/"} />} />
        </Routes>
      </Suspense>

      <Toaster toastOptions={{ duration: 3000 }} />
    </>
  );
}

export default App;