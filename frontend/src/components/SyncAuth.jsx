import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import { setAuthToken } from "../lib/axios";

/**
 * Component to keep the Axios auth token in sync with Clerk.
 * Place this inside ClerkProvider.
 */
export default function SyncAuth() {
    const { getToken, isSignedIn } = useAuth();

    useEffect(() => {
        const updateToken = async () => {
            if (isSignedIn) {
                try {
                    const token = await getToken();
                    setAuthToken(token);
                } catch (error) {
                    console.error("Failed to get Clerk token:", error);
                    setAuthToken(null);
                }
            } else {
                setAuthToken(null);
            }
        };

        updateToken();

        // Refresh token every 50 seconds (Clerk tokens last 60s)
        const interval = setInterval(updateToken, 50000);
        return () => clearInterval(interval);
    }, [getToken, isSignedIn]);

    return null;
}
