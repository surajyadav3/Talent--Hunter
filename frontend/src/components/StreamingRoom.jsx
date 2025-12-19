import {
    StreamCall,
    SpeakerLayout,
    CallControls,
    useStreamVideoClient,
    LoadingIndicator
} from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

export default function StreamingRoom({ session }) {
    const client = useStreamVideoClient();
    const [call, setCall] = useState(null);

    useEffect(() => {
        if (!client || !session.callId) return;

        const myCall = client.call("default", session.callId);
        myCall.join({ create: true }).then(() => {
            setCall(myCall);
        }).catch(err => {
            console.error("Failed to join call:", err);
        });

        return () => {
            if (myCall) myCall.leave();
            setCall(null);
        };
    }, [client, session.callId]);

    if (!call) return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-black text-white p-4">
            <LoadingIndicator />
            <p className="text-[10px] mt-4 font-bold uppercase tracking-widest opacity-40">Connecting to Video Call...</p>
        </div>
    );

    return (
        <StreamCall call={call}>
            <div className="w-full h-full relative group">
                <SpeakerLayout participantsBarPosition="bottom" />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 origin-bottom">
                    <CallControls />
                </div>
            </div>
        </StreamCall>
    );
}
