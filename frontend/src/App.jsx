import { useUser } from "@clerk/clerk-react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

import SyncAuth from "./components/SyncAuth";

import { useAppAuth } from "./hooks/useAppAuth";

// Lazy load pages
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const ProblemPage = lazy(() => import("./pages/ProblemPage"));
const ProblemsPage = lazy(() => import("./pages/ProblemsPage"));
const LeaderboardPage = lazy(() => import("./pages/LeaderboardPage"));
const SessionPage = lazy(() => import("./pages/SessionPage"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const AdminLoginPage = lazy(() => import("./pages/AdminLoginPage"));
const RoleSelectionPage = lazy(() => import("./pages/RoleSelectionPage"));

function App() {
  const { user, isAdmin, isLoading } = useAppAuth();
  const { isLoaded: clerkLoaded } = useUser();

  if (isLoading || !clerkLoaded) return null;

  const isAuthenticated = !!user;
  const needsRole = isAuthenticated && user?.role === "user";

  return (
    <>
      <SyncAuth />
      <Suspense fallback={
        <div className="h-screen w-full flex items-center justify-center bg-base-300">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      }>
        <Routes>
          <Route path="/" element={!isAuthenticated ? <HomePage /> : needsRole ? <Navigate to="/role-selection" /> : <Navigate to={"/dashboard"} />} />
          <Route path="/admin/login" element={!isAuthenticated ? <AdminLoginPage /> : <Navigate to={"/dashboard"} />} />
          
          <Route path="/role-selection" element={!isAuthenticated ? <Navigate to="/" /> : needsRole ? <RoleSelectionPage /> : <Navigate to="/dashboard" />} />

          <Route path="/dashboard" element={isAuthenticated ? (needsRole ? <Navigate to="/role-selection" /> : <DashboardPage />) : <Navigate to={"/"} />} />
          <Route path="/problems" element={isAuthenticated ? (needsRole ? <Navigate to="/role-selection" /> : <ProblemsPage />) : <Navigate to={"/"} />} />
          <Route path="/leaderboard" element={isAuthenticated ? (needsRole ? <Navigate to="/role-selection" /> : <LeaderboardPage />) : <Navigate to={"/"} />} />
          <Route path="/problem/:id" element={isAuthenticated ? (needsRole ? <Navigate to="/role-selection" /> : <ProblemPage />) : <Navigate to={"/"} />} />
          <Route path="/session/:id" element={isAuthenticated ? (needsRole ? <Navigate to="/role-selection" /> : <SessionPage />) : <Navigate to={"/"} />} />
          <Route path="/pricing" element={isAuthenticated ? (needsRole ? <Navigate to="/role-selection" /> : <PricingPage />) : <Navigate to={"/"} />} />
        </Routes>
      </Suspense>

      <Toaster toastOptions={{ duration: 3000 }} />
      <Analytics />
    </>
  );
}

export default App;