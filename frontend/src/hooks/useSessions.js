import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { sessionApi } from "../api/sessions";

export const useCreateSession = () => {
    const queryClient = useQueryClient();
    const result = useMutation({
        mutationKey: ["createSession"],
        mutationFn: sessionApi.createSession,
        onSuccess: () => {
            toast.success("Session created successfully!");
            queryClient.invalidateQueries({ queryKey: ["activeSessions"] });
        },
        onError: (error) => toast.error(error.response?.data?.message || "Failed to create room"),
    });

    return result;
};

export const useActiveSessions = () => {
    const result = useQuery({
        queryKey: ["activeSessions"],
        queryFn: sessionApi.getActiveSessions,
        refetchInterval: 3000, // snappier polling for a "live" feel
        staleTime: 2000,
    });

    return result;
};

export const useMyRecentSessions = () => {
    const result = useQuery({
        queryKey: ["myRecentSessions"],
        queryFn: sessionApi.getMyRecentSessions,
        staleTime: 60000,
    });

    return result;
};

export const useSessionById = (id) => {
    const result = useQuery({
        queryKey: ["session", id],
        queryFn: () => sessionApi.getSessionById(id),
        enabled: !!id,
        refetchInterval: 3000, // refetch faster to detect status changes
    });

    return result;
};

export const useJoinSession = () => {
    const queryClient = useQueryClient();
    const result = useMutation({
        mutationKey: ["joinSession"],
        mutationFn: sessionApi.joinSession,
        onSuccess: () => {
            toast.success("Joined session successfully!");
            queryClient.invalidateQueries({ queryKey: ["activeSessions"] });
        },
        onError: (error) => toast.error(error.response?.data?.message || "Failed to join session"),
    });

    return result;
};

export const useEndSession = () => {
    const queryClient = useQueryClient();
    const result = useMutation({
        mutationKey: ["endSession"],
        mutationFn: sessionApi.endSession,
        onSuccess: () => {
            toast.success("Session ended successfully!");
            queryClient.invalidateQueries({ queryKey: ["activeSessions"] });
            queryClient.invalidateQueries({ queryKey: ["myRecentSessions"] });
        },
        onError: (error) => toast.error(error.response?.data?.message || "Failed to end session"),
    });

    return result;
};
