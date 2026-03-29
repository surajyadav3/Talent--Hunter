import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { sessionApi, userApi } from "../api/sessions";

export const useInviteStudent = () => {
    return useMutation({
        mutationFn: sessionApi.inviteStudent,
        onSuccess: (data) => toast.success(data.message),
        onError: (error) => toast.error(error.response?.data?.message || "Failed to send invitation"),
    });
};

export const useAllStudents = () => {
    return useQuery({
        queryKey: ["students"],
        queryFn: userApi.getAllStudents,
    });
};

export const useCreateSession = () => {
    const queryClient = useQueryClient();

    const result = useMutation({
        mutationKey: ["createSession"],
        mutationFn: sessionApi.createSession,
        onSuccess: (data) => {
            const message = data?.message || "Session created successfully!";
            toast.success(message);
            // Invalidate active sessions so dashboard updates
            queryClient.invalidateQueries({ queryKey: ["activeSessions"] });
        },
        onError: (error) => {
            console.error("Create Session Error:", error);
            toast.error(error.response?.data?.message || error.message || "Failed to create room");
        },
    });

    return result;
};

export const useActiveSessions = () => {
    const result = useQuery({
        queryKey: ["activeSessions"],
        queryFn: sessionApi.getActiveSessions,
        staleTime: 15_000,       // Data is "fresh" for 15 seconds — prevents refetch on tab switches etc
        refetchInterval: 30_000, // Background poll every 30s (not on every mount)
        refetchOnWindowFocus: true,
    });

    return result;
};

export const useMyRecentSessions = () => {
    const result = useQuery({
        queryKey: ["myRecentSessions"],
        queryFn: sessionApi.getMyRecentSessions,
        staleTime: 30_000,      // Recent sessions don't change frequently
        refetchOnWindowFocus: false,
    });

    return result;
};

export const useSessionById = (id) => {
    const result = useQuery({
        queryKey: ["session", id],
        queryFn: () => sessionApi.getSessionById(id),
        enabled: !!id,
        staleTime: 3_000,        // Fresh for 3 seconds
        refetchInterval: (query) => {
            // Only poll actively if session is active — stop polling when completed
            const session = query.state.data?.session;
            if (session?.status === "completed") return false;
            return 5000; // 5 seconds for active sessions
        },
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