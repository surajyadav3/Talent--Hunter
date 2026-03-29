import { useState } from "react";
import { MailIcon, Loader2Icon, SearchIcon, UserIcon } from "lucide-react";
import { useAllStudents, useInviteStudent } from "../hooks/useSessions";

function InviteStudentModal({ isOpen, onClose, sessionId }) {
    const [email, setEmail] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const { data: studentsData, isLoading: loadingStudents } = useAllStudents();
    const inviteMutation = useInviteStudent();

    const handleInvite = (student) => {
        const payload = student 
            ? { sessionId, studentClerkId: student.clerkId }
            : { sessionId, studentEmail: email };
            
        if (!payload.studentEmail && !payload.studentClerkId) return;

        inviteMutation.mutate(payload, {
            onSuccess: () => {
                onClose();
                setEmail("");
            }
        });
    };

    if (!isOpen) return null;

    const students = studentsData?.students || [];
    const filteredStudents = students.filter(s => 
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        s.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.clerkId?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-base-100 rounded-2xl shadow-2xl w-full max-w-md border border-base-content/10 overflow-hidden transform transition-all">
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <MailIcon className="w-6 h-6 text-primary" />
                        Invite Candidate
                    </h2>
                    
                    <div className="space-y-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Direct Email Invite</span>
                            </label>
                            <div className="join w-full">
                                <input
                                    type="email"
                                    className="input input-bordered join-item w-full"
                                    placeholder="student@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button 
                                    onClick={() => handleInvite()}
                                    disabled={inviteMutation.isPending || !email}
                                    className="btn btn-primary join-item"
                                >
                                    {inviteMutation.isPending ? <Loader2Icon className="w-4 h-4 animate-spin" /> : "Send"}
                                </button>
                            </div>
                        </div>

                        <div className="divider text-xs opacity-40 uppercase tracking-widest">Search Candidates</div>

                        <div className="relative mb-4">
                            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40" />
                            <input
                                type="text"
                                className="input input-bordered input-sm w-full pl-10"
                                placeholder="Search by name, email or Clerk ID..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <div className="max-h-60 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                            {loadingStudents ? (
                                <div className="flex justify-center p-4"><Loader2Icon className="w-6 h-6 animate-spin opacity-20" /></div>
                            ) : filteredStudents.length === 0 ? (
                                <p className="text-center text-sm opacity-50 py-4">No candidates found</p>
                            ) : (
                                filteredStudents.map((student) => (
                                    <div 
                                        key={student.clerkId || student.email}
                                        className="flex items-center justify-between p-3 rounded-xl bg-base-200 hover:bg-base-300 transition-colors cursor-pointer group"
                                        onClick={() => handleInvite(student)}
                                    >
                                        <div className="flex items-center gap-3">
                                            {student.profileImage ? (
                                                <img src={student.profileImage} className="w-10 h-10 rounded-full" alt="" />
                                            ) : (
                                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                    <UserIcon className="w-5 h-5" />
                                                </div>
                                            )}
                                            <div>
                                                <p className="font-bold text-sm">{student.name}</p>
                                                <p className="text-[10px] opacity-40 font-mono">{student.clerkId}</p>
                                            </div>
                                        </div>
                                        <button className="btn btn-ghost btn-xs opacity-0 group-hover:opacity-100 transition-opacity">Invite</button>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    <div className="mt-8 flex justify-end">
                        <button onClick={onClose} className="btn btn-ghost">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InviteStudentModal;
