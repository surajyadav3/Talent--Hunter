import { createContext, useContext, useEffect, useState } from "react";
import { useUser, useAuth } from "@clerk/clerk-react";
import axiosInstance, { setAuthToken } from "../lib/axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const { user: clerkUser, isLoaded: clerkLoaded, isSignedIn: clerkSignedIn } = useUser();
    const { getToken } = useAuth();
    const [dbUser, setDbUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchDbUser = async (token) => {
        try {
            setAuthToken(token);
            const response = await axiosInstance.get("/users/me");
            setDbUser(response.data);
        } catch (error) {
            console.error("Failed to fetch DB user:", error);
            setDbUser(null);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const syncAuth = async () => {
            // Priority 1: Admin session in localStorage
            const adminToken = localStorage.getItem("adminToken");
            if (adminToken) {
                setAuthToken(adminToken);
                const adminUser = JSON.parse(localStorage.getItem("adminUser"));
                setDbUser(adminUser || { role: "admin", name: "Admin" });
                setIsLoading(false);
                return;
            }

            // Priority 2: Clerk session
            if (clerkLoaded && clerkSignedIn) {
                const token = await getToken();
                await fetchDbUser(token);
            } else if (clerkLoaded && !clerkSignedIn) {
                setDbUser(null);
                setIsLoading(false);
            }
        };

        syncAuth();
    }, [clerkLoaded, clerkSignedIn, getToken]);

    const logout = () => {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminUser");
        setAuthToken(null);
        setDbUser(null);
        // Note: Clerk logout should be handled separately by <SignOutButton />
    };

    return (
        <AuthContext.Provider value={{ user: dbUser, isLoading, clerkSignedIn, isAdmin: dbUser?.role === "admin", logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAppAuth = () => useContext(AuthContext);
