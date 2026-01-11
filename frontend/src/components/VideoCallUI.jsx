import {
    CallControls,
    CallingState,
    PaginatedGridLayout,
    useCall,
    useCallStateHooks,
} from "@stream-io/video-react-sdk";
import {
    Loader2Icon,
    MessageSquareIcon,
    UsersIcon,
    XIcon,
    ShieldIcon,
    MicOffIcon,
    VideoOffIcon,
    UserMinusIcon,
    MonitorOffIcon
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Channel, Chat, MessageInput, MessageList, Thread, Window } from "stream-chat-react";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "stream-chat-react/dist/css/v2/index.css";

function VideoCallUI({ chatClient, channel, isHost, user }) {
    const navigate = useNavigate();
    const call = useCall();
    const { useCallCallingState, useParticipantCount, useParticipants } = useCallStateHooks();
    const callingState = useCallCallingState();
    const participantCount = useParticipantCount();
    const participants = useParticipants(); // remote + local
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [showHostControls, setShowHostControls] = useState(false);

    if (callingState === CallingState.JOINING) {
        return (
            <div className="h-full flex items-center justify-center">
                <div className="text-center">
                    <Loader2Icon className="w-12 h-12 mx-auto animate-spin text-primary mb-4" />
                    <p className="text-lg">Joining call as {user?.fullName || "Guest"}...</p>
                </div>
            </div>
        );
    }

    // Filter remote participants only (don't kick yourself)
    const remoteParticipants = participants.filter(p => !p.isLocal);

    const handleKickUser = async (userId) => {
        if (!call) return;
        try {
            await call.blockUser(userId);
            toast.success("User kicked successfully");
        } catch (error) {
            console.error("Failed to kick user", error);
        }
    };

    const handleMuteUser = async (userId, type) => {
        if (!call) return;
        try {
            await call.muteUser(userId, type); // type: 'audio' or 'video'
        } catch (error) {
            console.error(`Failed to mute ${type}`, error);
        }
    };

    return (
        <div className="h-full flex gap-3 relative str-video">
            <div className="flex-1 flex flex-col gap-3">
                {/* Participants count, Host Controls */}
                <div className="absolute top-2 left-2 z-10 flex items-center gap-2">
                    <div className="flex items-center gap-2 bg-base-100/90 backdrop-blur p-2 rounded-lg shadow-sm border border-base-content/10">
                        <UsersIcon className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-xs text-base-content">
                            {participantCount}
                        </span>
                    </div>

                    {isHost && remoteParticipants.length > 0 && (
                        <div className="relative">
                            <button
                                onClick={() => setShowHostControls(!showHostControls)}
                                className={`btn btn-sm btn-circle ${showHostControls ? 'btn-error' : 'btn-ghost bg-base-100/90 backdrop-blur shadow-sm border border-base-content/10'}`}
                                title="Host Controls"
                            >
                                <ShieldIcon className="w-4 h-4" />
                            </button>

                            {showHostControls && (
                                <div className="absolute top-full left-0 mt-2 w-64 bg-base-100 rounded-xl shadow-xl border border-base-300 p-2 flex flex-col gap-1 overflow-hidden z-20">
                                    <h3 className="text-xs font-bold text-base-content/50 uppercase px-2 py-1">Participants</h3>
                                    {remoteParticipants.map(p => (
                                        <div key={p.userId} className="flex items-center justify-between p-2 rounded-lg hover:bg-base-200 transition-colors">
                                            <div className="flex items-center gap-2 overflow-hidden">
                                                <div className="avatar placeholder">
                                                    <div className="bg-neutral text-neutral-content rounded-full w-6">
                                                        <span className="text-xs">{p.name?.[0] || 'U'}</span>
                                                    </div>
                                                </div>
                                                <span className="text-sm font-medium truncate max-w-[80px] text-base-content">{p.name || 'User'}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <button
                                                    onClick={() => handleMuteUser(p.userId, 'audio')}
                                                    className="btn btn-xs btn-square btn-ghost hover:text-error"
                                                    title="Mute Mic"
                                                >
                                                    <MicOffIcon className="w-3 h-3" />
                                                </button>
                                                <button
                                                    onClick={() => handleMuteUser(p.userId, 'video')}
                                                    className="btn btn-xs btn-square btn-ghost hover:text-error"
                                                    title="Turn Off Video"
                                                >
                                                    <VideoOffIcon className="w-3 h-3" />
                                                </button>
                                                <button
                                                    onClick={() => handleKickUser(p.userId)}
                                                    className="btn btn-xs btn-square btn-ghost text-error hover:bg-error/10"
                                                    title="Kick User"
                                                >
                                                    <UserMinusIcon className="w-3 h-3" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div className="flex-1 rounded-lg overflow-hidden relative bg-base-300">
                    <PaginatedGridLayout icon={null} groupSize={4} />
                </div>

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-base-100/90 backdrop-blur p-2 rounded-xl shadow-lg border border-base-content/10 flex justify-center">
                    <CallControls onLeave={() => navigate("/dashboard")} />
                </div>
            </div>

            {/* CHAT SECTION (Removed here as it's now in SessionPage, but kept empty/conditional structure if passed for backward compat - actually SessionPage handles structure now, so this component only deals with video part) 
               Wait, SessionPage renders <VideoCallUI chatClient={chatClient} channel={channel} /> BUT passes chat props.
               However, SessionPage structure says: 
               CENTER: Code
               RIGHT: Chat
               BOTTOM: VideoCallUI
               
               In SessionPage step 427, we REMOVED the chat rendering from the VideoCallUI props usage inside the VideoCallUI component? 
               Checking step 424/427: VideoCallUI RETAINED the Chat rendering logic inside itself in the replaced content.
               BUT step 427 in SessionPage explicitly adds the Chat panel into the PanelGroup.
               
               So VideoCallUI receives chatClient/channel but should probably NOT render them if they are rendered externally. 
               
               Actually, looking at `VideoCallUI.jsx` current content (Step 545):
               It HAS the Chat Section logic at the bottom (lines 55-89).
               BUT SessionPage now renders Chat separately in the layout.
               
               We should REMOVE the chat section from VideoCallUI to avoid duplication/weirdness, 
               OR keep it but hide it if we want the bottom bar to only be Video.
               
               The user asked "video section to side by side of each video and chat option to the right side of coding console".
               So Chat is definitely on the right. 
               
               So in VideoCallUI, we should REMOVE the chat rendering completely.
            */}
        </div>
    );
}

export default VideoCallUI;