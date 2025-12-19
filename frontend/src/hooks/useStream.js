import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { StreamVideoClient } from "@stream-io/video-react-sdk";
import { StreamChat } from "stream-chat";
import { sessionApi } from "../api/sessions";

const apiKey = import.meta.env.VITE_STREAM_API_KEY;

export const useStream = () => {
    const { user } = useUser();
    const [videoClient, setVideoClient] = useState(null);
    const [chatClient, setChatClient] = useState(null);

    useEffect(() => {
        if (!user) return;
        if (!apiKey) {
            console.error("VITE_STREAM_API_KEY is missing from environment variables!");
            toast.error("Collaborative features are currently unavailable. Please check configuration.");
            return;
        }

        let videoClientInstance;
        let chatClientInstance;

        const initClient = async () => {
            try {
                const { token } = await sessionApi.getStreamToken();

                const streamUser = {
                    id: user.id,
                    name: user.fullName || user.firstName || "Anonymous",
                    image: user.imageUrl,
                };

                // Initialize Video Client
                videoClientInstance = new StreamVideoClient({
                    apiKey,
                    user: streamUser,
                    token,
                });
                setVideoClient(videoClientInstance);

                // Initialize Chat Client
                chatClientInstance = StreamChat.getInstance(apiKey);
                await chatClientInstance.connectUser(streamUser, token);
                setChatClient(chatClientInstance);

            } catch (error) {
                console.error("Failed to initialize Stream clients:", error);
            }
        };

        initClient();

        return () => {
            if (videoClientInstance) videoClientInstance.disconnectUser();
            if (chatClientInstance) chatClientInstance.disconnectUser();
            setVideoClient(null);
            setChatClient(null);
        };
    }, [user]);

    return { videoClient, chatClient };
};
