import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { UserCheckIcon, BriefcaseIcon, Loader2Icon, ArrowRightIcon } from "lucide-react";
import { useAuth } from "@clerk/clerk-react";
import axiosInstance, { setAuthToken } from "../lib/axios";
import toast from "react-hot-toast";
import { useAppAuth } from "../hooks/useAppAuth";

function RoleSelectionPage() {
    const [selectedRole, setSelectedRole] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { isSignedIn } = useAuth();
    const { user } = useAppAuth();
    const { getToken } = useAuth();

    const handleRoleSelect = async (customRole) => {
        const targetRole = customRole || selectedRole;
        if (!targetRole) return;
        setIsLoading(true);
        console.log("🛠️ handleRoleSelect triggered. isSignedIn:", isSignedIn, "Role:", targetRole);
        try {
            // Force a token refresh right before the POST request to avoid 401 Unauthorized errors
            const token = await getToken();
            if (token) {
                setAuthToken(token);
                console.log("🔑 [Frontend] Token set successfully, length:", token.length);
            } else {
                console.warn(`⚠️ [Frontend] Failed to retrieve Clerk token. isSignedIn: ${isSignedIn}`);
                // If we are signed in but getToken is null, it might be a provider delay
            }
            
            await axiosInstance.post("/users/set-role", { 
                role: targetRole,
            });
            
            toast.success(`Welcome to Talent-Hunter as a ${targetRole}!`);
            
            // Force a slight delay to allow backend to update and local state to sync
            setTimeout(() => {
                window.location.href = "/dashboard";
            }, 1000);
        } catch (error) {
            console.error("Role selection error:", error);
            const message = error.response?.data?.message || "Failed to save role selection";
            toast.error(message);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const intent = localStorage.getItem("intentRole");
        if (intent && (intent === "candidate" || intent === "recruiter")) {
            localStorage.removeItem("intentRole"); // Clear it so it doesn't loop
            setSelectedRole(intent);
            handleRoleSelect(intent);
        }
    }, [isSignedIn, getToken]);

    return (
        <div className="min-h-screen bg-base-300 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent italic tracking-tighter">
                        Talent-Hunter
                    </h1>
                    <h2 className="text-2xl font-bold mb-2">Step 1: Choose Your Path</h2>
                    <p className="text-lg opacity-60">How would you like to use the platform?</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* CANDIDATE OPTION */}
                    <div 
                        onClick={() => setSelectedRole("candidate")}
                        className={`group relative p-8 rounded-3xl bg-base-100 border-2 transition-all cursor-pointer hover:shadow-2xl hover:scale-105 active:scale-95 flex flex-col items-center text-center ${selectedRole === "candidate" ? "border-primary shadow-xl shadow-primary/20" : "border-transparent opacity-80 hover:opacity-100"}`}
                    >
                        {selectedRole === "candidate" && (
                            <div className="absolute top-4 right-4 bg-primary text-white p-1 rounded-full">
                                <UserCheckIcon className="w-5 h-5" />
                            </div>
                        )}
                        <div className={`size-20 rounded-2xl flex items-center justify-center mb-6 transition-colors ${selectedRole === "candidate" ? "bg-primary text-white" : "bg-base-200 text-base-content/40 group-hover:bg-primary/20 group-hover:text-primary"}`}>
                            <UserCheckIcon className="w-10 h-10" />
                        </div>
                        <h2 className="text-2xl font-bold mb-3">Candidate</h2>
                        <ul className="text-sm opacity-60 space-y-2 mb-4">
                            <li>• Solve DSA Problems</li>
                            <li>• Take Technical Interviews</li>
                            <li>• Build your Profile</li>
                        </ul>
                    </div>

                    {/* RECRUITER OPTION */}
                    <div 
                        onClick={() => setSelectedRole("recruiter")}
                        className={`group relative p-8 rounded-3xl bg-base-100 border-2 transition-all cursor-pointer hover:shadow-2xl hover:scale-105 active:scale-95 flex flex-col items-center text-center ${selectedRole === "recruiter" ? "border-secondary shadow-xl shadow-secondary/20" : "border-transparent opacity-80 hover:opacity-100"}`}
                    >
                        {selectedRole === "recruiter" && (
                            <div className="absolute top-4 right-4 bg-secondary text-white p-1 rounded-full">
                                <UserCheckIcon className="w-5 h-5" />
                            </div>
                        )}
                        <div className={`size-20 rounded-2xl flex items-center justify-center mb-6 transition-colors ${selectedRole === "recruiter" ? "bg-secondary text-white" : "bg-base-200 text-base-content/40 group-hover:bg-secondary/20 group-hover:text-secondary"}`}>
                            <BriefcaseIcon className="w-10 h-10" />
                        </div>
                        <h2 className="text-2xl font-bold mb-3">Recruiter</h2>
                        <ul className="text-sm opacity-60 space-y-2 mb-4">
                            <li>• Create Interview Rooms</li>
                            <li>• Host Coding Sessions</li>
                            <li>• Evaluate Talent</li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button
                        onClick={handleRoleSelect}
                        disabled={!selectedRole || isLoading}
                        className="btn btn-primary btn-lg rounded-2xl px-12 group transition-all"
                    >
                        {isLoading ? <Loader2Icon className="animate-spin w-5 h-5" /> : (
                            <>
                                Join Platform
                                <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RoleSelectionPage;
