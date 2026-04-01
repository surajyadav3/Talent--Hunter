import { Code2Icon, LoaderIcon, PlusIcon } from "lucide-react";
import { PROBLEMS } from "../data/problems";

function CreateSessionModal({
    isOpen,
    onClose,
    roomConfig,
    setRoomConfig,
    onCreateRoom,
    isCreating,
}) {
    const problems = Object.values(PROBLEMS);

    if (!isOpen) return null;

    return (
        <div className="modal modal-open">
            <div className="modal-box max-w-2xl">
                <h3 className="font-bold text-2xl mb-6">Create New Session</h3>

                <div className="space-y-8">
                    {/* PROBLEM SELECTION */}
                    <div className="space-y-2">
                        <label className="label">
                            <span className="label-text font-semibold">Select Problem</span>
                            <span className="label-text-alt text-error">*</span>
                        </label>

                        <select
                            className="select w-full"
                            value={roomConfig.problem}
                            onChange={(e) => {
                                const selectedProblem = problems.find((p) => p.title === e.target.value);
                                setRoomConfig({
                                    difficulty: selectedProblem.difficulty,
                                    problem: e.target.value,
                                });
                            }}
                        >
                            <option value="" disabled>
                                Choose a coding problem...
                            </option>

                            {problems.map((problem) => (
                                <option key={problem.id} value={problem.title}>
                                    {problem.title} ({problem.difficulty})
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* ROOM SUMMARY */}
                    {roomConfig.problem && (
                        <div className="alert alert-success">
                            <Code2Icon className="size-5" />
                            <div>
                                <p className="font-semibold">Room Summary:</p>
                                <p>
                                    Problem: <span className="font-medium">{roomConfig.problem}</span>
                                </p>
                                <p>
                                    Max Participants: <span className="font-medium">2 (1-on-1 session)</span>
                                </p>
                            </div>
                        </div>
                    )}

                    {/* OPTIONAL INVITE */}
                    <div className="space-y-4 pt-4 border-t border-base-content/10">
                        <label className="label">
                            <span className="label-text font-bold text-base">Invite Candidate (Optional)</span>
                        </label>
                        <div className="flex gap-2">
                            <div className="relative flex-1">
                                <PlusIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40" />
                                <input 
                                    type="email" 
                                    placeholder="candidate@example.com" 
                                    className="input input-bordered w-full pl-10"
                                    value={roomConfig.inviteEmail || ""}
                                    onChange={(e) => setRoomConfig({ ...roomConfig, inviteEmail: e.target.value })}
                                />
                            </div>
                        </div>
                        <p className="text-[10px] opacity-40 italic">An invitation link will be sent automatically if provided.</p>
                    </div>
                </div>

                <div className="modal-action">
                    <button className="btn btn-ghost" onClick={onClose}>
                        Cancel
                    </button>

                    <button
                        className="btn btn-primary gap-2"
                        onClick={onCreateRoom}
                        disabled={isCreating || !roomConfig.problem}
                    >
                        {isCreating ? (
                            <LoaderIcon className="size-5 animate-spin" />
                        ) : (
                            <PlusIcon className="size-5" />
                        )}

                        {isCreating ? "Creating..." : "Create"}
                    </button>
                </div>
            </div>
            <div className="modal-backdrop" onClick={onClose}></div>
        </div>
    );
}
export default CreateSessionModal;