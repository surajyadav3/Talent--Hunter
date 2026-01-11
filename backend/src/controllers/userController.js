import User from "../models/User.js";

export const getLeaderboard = async (req, res) => {
    try {
        const users = await User.find({})
            .sort({ problemsSolved: -1 })
            .limit(20) // Top 20 users
            .select("name email profileImage problemsSolved");

        res.status(200).json({ users });
    } catch (error) {
        console.error("Error in getLeaderboard:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
