import { CheckIcon, SparklesIcon, CalendarIcon, TrophyIcon, UsersIcon, LockIcon, XIcon, ShieldCheckIcon } from "lucide-react";
import Navbar from "../components/Navbar";
import { useUserStatus } from "../hooks/useUserStatus";
import toast from "react-hot-toast";
import { useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import axios from "../lib/axios";
import { useQueryClient } from "@tanstack/react-query";

const PricingPage = () => {
    const { data: userData } = useUserStatus();
    const isPro = userData?.isPremium;
    const [showQRModal, setShowQRModal] = useState(false);
    const [transactionId, setTransactionId] = useState("");
    const [isVerifying, setIsVerifying] = useState(false);

    const { getToken } = useAuth();
    const queryClient = useQueryClient();

    const handleVerify = async () => {
        if (!transactionId || transactionId.length < 10) {
            return toast.error("Please enter a valid Transaction ID (UTR)");
        }

        setIsVerifying(true);
        try {
            const token = await getToken();
            await axios.post(`/users/upgrade`,
                { transactionId },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            toast.success("Payment Verified! You are now a PRO member.");
            setShowQRModal(false);
            setTransactionId("");
            // Refetch user data to update UI globally
            queryClient.invalidateQueries(["userStatus"]);
        } catch (error) {
            console.error("Verification error:", error);
            toast.error(error.response?.data?.message || "Verification failed. Please check ID.");
        } finally {
            setIsVerifying(false);
        }
    };

    const tiers = [
        {
            name: "Free",
            price: "0",
            features: [
                "Access to 50+ basic problems",
                "Community support",
                "Basic code execution",
                "Public profile"
            ],
            cta: "Current Plan",
            highlight: false
        },
        {
            name: "Pro",
            price: "9.99",
            features: [
                "Everything in Free",
                "Unlock all Premium problems",
                "Priority code execution",
                "Participate in Contests",
                "Advanced performance analytics"
            ],
            cta: "Upgrade to Pro",
            highlight: true
        }
    ];

    const contests = [
        {
            title: "Weekly Contest 432",
            status: "Started",
            time: "Jan 12, 2026, 08:00 AM",
            duration: "90 Mins",
            participants: "12,403",
            prize: "$500",
            difficulty: "Medium"
        },
        {
            title: "Bi-Weekly Contest 148",
            status: "Upcoming",
            time: "Jan 18, 2026, 07:30 PM",
            duration: "90 Mins",
            participants: "8,921",
            prize: "Gold Badge",
            difficulty: "Hard"
        }
    ];

    return (
        <div className="min-h-screen bg-base-100 flex flex-col">
            <Navbar />
            <div className="flex-1 max-w-7xl mx-auto px-4 py-16 w-full">
                {/* PRICING SECTION */}
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-5xl font-black tracking-tighter">Premium <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Access</span></h1>
                    <p className="text-base-content/60 max-w-xl mx-auto text-lg leading-relaxed">
                        Unlock pro features, participate in global contests, and master coding with our specialized tier.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-24">
                    {tiers.map((tier, idx) => (
                        <div key={idx} className={`relative p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 ${tier.highlight ? 'bg-base-200 border-primary shadow-2xl shadow-primary/10' : 'bg-base-100 border-white/5'}`}>
                            {tier.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-content px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                                    Recommended
                                </div>
                            )}
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-black">${tier.price}</span>
                                    <span className="text-base-content/40 font-semibold">/month</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {tier.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex gap-3 text-sm text-base-content/70">
                                        <CheckIcon className="size-5 text-success shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => {
                                    if (tier.name === "Pro" && !isPro) {
                                        setShowQRModal(true);
                                    }
                                }}
                                className={`w-full py-4 rounded-xl font-bold transition-all ${tier.highlight ? 'bg-primary text-primary-content shadow-lg shadow-primary/20 hover:scale-[1.02]' : 'bg-base-300 hover:bg-base-200'}`}
                            >
                                {isPro && tier.name === "Pro" ? "Current Plan" : tier.cta}
                            </button>
                        </div>
                    ))}
                </div>

                {/* CONTESTS SECTION */}
                <div id="contests" className="pt-20 border-t border-white/10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div className="space-y-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase font-bold tracking-widest leading-none">
                                Pro Feature
                            </div>
                            <h2 className="text-4xl font-black tracking-tighter">Live <span className="text-primary italic">Contests</span></h2>
                            <p className="text-base-content/50 max-w-md">Upgrade to participate and win monthly prize pools.</p>
                        </div>
                    </div>

                    <div className="grid gap-6">
                        {contests.map((contest, idx) => (
                            <div key={idx} className="group relative flex flex-col md:flex-row items-center gap-8 p-6 rounded-3xl bg-base-200/50 border border-white/5 transition-all hover:bg-base-200 hover:border-primary/20 overflow-hidden">
                                {!isPro && (
                                    <div className="absolute inset-0 z-10 backdrop-blur-[2px] bg-base-200/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-content rounded-full font-bold text-xs">
                                            <LockIcon className="size-3" /> Upgrade to Join
                                        </div>
                                    </div>
                                )}

                                <div className="size-20 bg-base-300 rounded-2xl flex items-center justify-center shrink-0 border border-white/5 relative">
                                    <TrophyIcon className={`size-10 ${contest.status === 'Started' ? 'text-primary animate-bounce' : 'text-base-content/20'}`} />
                                    {contest.status === 'Started' && <div className="absolute inset-0 bg-primary/5 animate-pulse"></div>}
                                </div>

                                <div className="flex-1 space-y-3 text-center md:text-left">
                                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
                                        <h3 className="text-xl font-bold">{contest.title}</h3>
                                        <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-tighter ${contest.status === 'Started' ? 'bg-error text-error-content' : 'bg-success/20 text-success'}`}>
                                            {contest.status}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-sm text-base-content/40 font-medium">
                                        <div className="flex items-center gap-2">
                                            <CalendarIcon className="size-4" />
                                            {contest.time}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <UsersIcon className="size-4" />
                                            {contest.participants} Joined
                                        </div>
                                        <div className="badge badge-outline badge-sm uppercase font-bold opacity-60">{contest.difficulty}</div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center md:items-end gap-2 shrink-0">
                                    <div className="text-right">
                                        <div className="text-xs uppercase font-bold opacity-30 leading-none">Grand Prize</div>
                                        <div className="text-2xl font-black text-primary">{contest.prize}</div>
                                    </div>
                                    <button
                                        onClick={() => {
                                            if (isPro && contest.status === 'Started') {
                                                toast.success("Joining contest... Good luck!");
                                            }
                                        }}
                                        className={`btn btn-sm ${isPro ? (contest.status === 'Started' ? 'btn-primary px-8' : 'btn-ghost border-white/10') : 'btn-disabled opacity-50'}`}
                                    >
                                        {contest.status === 'Started' ? 'Enter Now' : 'Register'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* QR CODE MODAL */}
            {showQRModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => setShowQRModal(false)}
                    ></div>

                    {/* Content */}
                    <div className="relative bg-base-100 w-full max-w-sm rounded-3xl border border-white/10 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                        <button
                            onClick={() => setShowQRModal(false)}
                            className="absolute top-4 right-4 p-2 rounded-full bg-base-200 hover:bg-base-300 transition-colors z-10"
                        >
                            <XIcon className="size-5" />
                        </button>

                        <div className="p-8 text-center space-y-6">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-black tracking-tight text-white">Upgrade to Pro</h3>
                                <p className="text-base-content/60 text-sm">Scan the QR code below to complete your payment and unlock all features.</p>
                            </div>

                            <div className="aspect-square w-full max-w-[240px] mx-auto bg-white rounded-2xl p-4 shadow-xl shadow-primary/20 flex items-center justify-center border-4 border-primary/20">
                                <img
                                    // Pre-filled UPI URI: pa = UPI ID, pn = Name, am = Amount, cu = Currency
                                    src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(
                                        "upi://pay?pa=9306017727@ybl&pn=Talent Hunter&am=830.00&cu=INR&tn=Talent Hunter Pro Subscription"
                                    )}`}
                                    alt="Payment QR Code"
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <div className="pt-4 space-y-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-bold text-base-content/40 tracking-widest block text-left px-1">
                                        Step 2: Enter Transaction ID (UTR)
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter 12-digit UTR number"
                                        value={transactionId}
                                        onChange={(e) => setTransactionId(e.target.value)}
                                        className="w-full bg-base-200 border border-white/5 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-colors font-mono text-sm"
                                    />
                                </div>

                                <button
                                    onClick={handleVerify}
                                    disabled={isVerifying}
                                    className="btn btn-primary w-full gap-2"
                                >
                                    {isVerifying ? (
                                        <span className="loading loading-spinner loading-sm"></span>
                                    ) : (
                                        <ShieldCheckIcon className="size-5" />
                                    )}
                                    Verify & Activate PRO
                                </button>
                            </div>

                            <div className="flex items-center justify-between text-[10px] text-base-content/40 font-bold uppercase tracking-widest pt-2">
                                <span>Status: Waiting for proof</span>
                                <span className="text-primary animate-pulse">● Live</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PricingPage;
