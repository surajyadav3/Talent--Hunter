import {
    CallControls,
    CallingState,
    PaginatedGridLayout,
    useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { Loader2Icon, MessageSquareIcon, UsersIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Channel, Chat, MessageInput, MessageList, Thread, Window } from "stream-chat-react";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "stream-chat-react/dist/css/v2/index.css";

function VideoCallUI({ chatClient, channel }) {
    const navigate = useNavigate();
    const { useCallCallingState, useParticipantCount } = useCallStateHooks();
    const callingState = useCallCallingState();
    const participantCount = useParticipantCount();
    const [isChatOpen, setIsChatOpen] = useState(false);

    if (callingState === CallingState.JOINING) {
        return (
            <div className="h-full flex items-center justify-center">
                <div className="text-center">
                    <Loader2Icon className="w-12 h-12 mx-auto animate-spin text-primary mb-4" />
                    <p className="text-lg">Joining call...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="h-full flex gap-3 relative str-video">
            <div className="flex-1 flex flex-col gap-3">
                {/* Participants count badge and Chat Toggle */}
                <div className="absolute top-2 left-2 z-10 flex items-center gap-2">
                    <div className="flex items-center gap-2 bg-base-100/90 backdrop-blur p-2 rounded-lg shadow-sm border border-base-content/10">
                        <UsersIcon className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-xs">
                            {participantCount}
                        </span>
                    </div>
                </div>

                <div className="flex-1 rounded-lg overflow-hidden relative bg-base-300">
                    <PaginatedGridLayout icon={null} groupSize={4} />
                </div>

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-base-100/90 backdrop-blur p-2 rounded-xl shadow-lg border border-base-content/10 flex justify-center">
                    <CallControls onLeave={() => navigate("/dashboard")} />
                </div>
            </div>

            {/* CHAT SECTION */}

            {chatClient && channel && (
                <div
                    className={`flex flex-col rounded-lg shadow overflow-hidden bg-[#272a30] transition-all duration-300 ease-in-out ${isChatOpen ? "w-80 opacity-100" : "w-0 opacity-0"
                        }`}
                >
                    {isChatOpen && (
                        <>
                            <div className="bg-[#1c1e22] p-3 border-b border-[#3a3d44] flex items-center justify-between">
                                <h3 className="font-semibold text-white">Session Chat</h3>
                                <button
                                    onClick={() => setIsChatOpen(false)}
                                    className="text-gray-400 hover:text-white transition-colors"
                                    title="Close chat"
                                >
                                    <XIcon className="size-5" />
                                </button>
                            </div>
                            <div className="flex-1 overflow-hidden stream-chat-dark">
                                <Chat client={chatClient} theme="str-chat__theme-dark">
                                    <Channel channel={channel}>
                                        <Window>
                                            <MessageList />
                                            <MessageInput />
                                        </Window>
                                        <Thread />
                                    </Channel>
                                </Chat>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
export default VideoCallUI;