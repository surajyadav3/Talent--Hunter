import User from "../models/User.js";
import Session from "../models/Session.js";

export const getAppStats = async (req, res) => {
    try {
        const [totalUsers, totalSessions, activeSessions] = await Promise.all([
            User.countDocuments(),
            Session.countDocuments(),
            Session.countDocuments({ status: "active" })
        ]);

        // For "problems solved", we'll count completed sessions
        const completedSessions = await Session.countDocuments({ status: "completed" });

        res.status(200).json({
            success: true,
            stats: {
                totalUsers,
                totalSessions,
                activeSessions,
                problemsSolved: completedSessions,
            }
        });
    } catch (error) {
        console.error("Error in getAppStats controller:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
