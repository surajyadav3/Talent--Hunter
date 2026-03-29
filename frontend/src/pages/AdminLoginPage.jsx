import { useState } from "react";
import { useNavigate } from "react-router";
import axiosInstance, { setAuthToken } from "../lib/axios";
import toast from "react-hot-toast";
import { Loader2Icon, LockIcon, MailIcon } from "lucide-react";

function AdminLoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axiosInstance.post("/auth/admin-login", { email, password });
            const { token, user } = response.data;
            
            setAuthToken(token);
            localStorage.setItem("adminToken", token);
            localStorage.setItem("adminUser", JSON.stringify(user));
            
            toast.success("Welcome, Universal Admin!");
            navigate("/dashboard");
        } catch (error) {
            toast.error(error.response?.data?.message || "Invalid credentials");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-base-300 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-base-100 rounded-2xl shadow-2xl overflow-hidden border border-base-content/5">
                <div className="p-8">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                            <LockIcon className="w-8 h-8 text-primary" />
                        </div>
                        <h1 className="text-3xl font-bold">Admin Portal</h1>
                        <p className="text-base-content/60 mt-2">Universal access to Talent-Hunter</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Admin Email</span>
                            </label>
                            <div className="relative">
                                <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-40" />
                                <input
                                    type="email"
                                    className="input input-bordered w-full pl-10 focus:input-primary"
                                    placeholder="admin@talenthunter.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <div className="relative">
                                <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-40" />
                                <input
                                    type="password"
                                    className="input input-bordered w-full pl-10 focus:input-primary"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="btn btn-primary w-full shadow-lg shadow-primary/20"
                        >
                            {isLoading ? <Loader2Icon className="w-5 h-5 animate-spin" /> : "Login as Admin"}
                        </button>
                    </form>
                </div>
                
                <div className="p-4 bg-base-200 border-t border-base-content/5 text-center">
                    <p className="text-xs opacity-60 italic">This portal is for authorized administrators only.</p>
                </div>
            </div>
        </div>
    );
}

export default AdminLoginPage;
