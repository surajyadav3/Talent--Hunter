import axiosInstance from "../lib/axios";

export const userApi = {
    getLeaderboard: async () => {
        const response = await axiosInstance.get("/users/leaderboard");
        return response.data;
    },
};
