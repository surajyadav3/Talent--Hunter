import { useEffect, useState } from "react";
import {
    Channel,
    ChannelHeader,
    MessageList,
    MessageInput,
    Window,
    useChatContext
} from "stream-chat-react";
import { MessageCircleIcon } from "lucide-react";

export default function ChatSidebar({ session }) {
    const { client } = useChatContext();
    const [channel, setChannel] = useState(null);

    useEffect(() => {
        if (!client || !session.callId) return;

        const myChannel = client.channel("messaging", session.callId, {
            name: `${session.problem} Chat`,
        });

        myChannel.watch().then(() => {
            setChannel(myChannel);
        }).catch(err => {
            console.error("Failed to watch channel:", err);
        });

        return () => {
            // We don't necessarily want to stop watching on unmount if we want notifications
            // but for clean state we set null
            setChannel(null);
        };
    }, [client, session.callId, session.problem]);

    if (!channel) return (
        <div className="h-full flex flex-col items-center justify-center opacity-30 italic text-xs">
            <div className="loading loading-dots loading-sm mb-2"></div>
            Syncing Chat...
        </div>
    );

    return (
        <div className="h-full flex flex-col stream-chat-custom">
            <Channel channel={channel}>
                <Window>
                    <div className="p-4 border-b border-base-content/5 flex items-center justify-between bg-base-100/50 backdrop-blur-sm">
                        <h3 className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
                            <MessageCircleIcon className="size-4 text-primary" />
                            Live Chat
                        </h3>
                    </div>
                    <MessageList />
                    <MessageInput grow />
                </Window>
            </Channel>
        </div>
    );
}
