import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  // Graceful fallback UI instead of crashing
  const root = document.getElementById("root");
  root.innerHTML = `
    <div style="height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: #0F172A; color: #fff; font-family: sans-serif; text-align: center; padding: 20px;">
      <h1 style="font-size: 2rem; margin-bottom: 1rem; color: #EF4444;">Configuration Error</h1>
      <p style="font-size: 1.1rem; opacity: 0.8; max-width: 500px; margin-bottom: 2rem;">
        The <strong>VITE_CLERK_PUBLISHABLE_KEY</strong> environment variable is missing.
      </p>
      <div style="background: #1E293B; padding: 1.5rem; rounded: 0.5rem; text-align: left; border-radius: 8px;">
        <p style="margin-bottom: 0.5rem; font-weight: bold; color: #94A3B8;">To fix this on Vercel:</p>
        <ol style="padding-left: 1.5rem; color: #E2E8F0; line-height: 1.6;">
          <li>Go to your Vercel Project Settings</li>
          <li>Click on <strong>Environment Variables</strong></li>
          <li>Add <code>VITE_CLERK_PUBLISHABLE_KEY</code> from your Clerk Dashboard</li>
          <li>Redeploy your application</li>
        </ol>
      </div>
    </div>
  `;
  throw new Error("Missing Clerk Publishable Key - Rendered Fallback UI");
}

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
          <App />
        </ClerkProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);