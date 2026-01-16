import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const useUserStatus = () => {
    const { getToken, userId } = useAuth();

    return useQuery({
        queryKey: ["userStatus", userId],
        queryFn: async () => {
            const token = await getToken();
            const response = await axios.get(`${API_URL}/users/me`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        },
        enabled: !!userId,
    });
};
