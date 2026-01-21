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

function App() {
  const { isSignedIn, isLoaded } = useUser();

  // this will provide a cleaner transition
  if (!isLoaded) return null;

  return (
    <>
      <SyncAuth />
      <Suspense fallback={null}>
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