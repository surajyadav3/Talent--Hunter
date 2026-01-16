import { useQuery } from "@tanstack/react-query";
import axios from "../lib/axios";
import { useAuth } from "@clerk/clerk-react";

export const useUserStatus = () => {
    const { getToken, userId } = useAuth();

    return useQuery({
        queryKey: ["userStatus", userId],
        queryFn: async () => {
            const token = await getToken();
            const response = await axios.get(`/users/me`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        },
        enabled: !!userId,
    });
};
