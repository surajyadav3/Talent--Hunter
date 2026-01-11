import { requireAuth } from "@clerk/express";
import User from "../models/User.js";
import { upsertStreamUser } from "../lib/stream.js";

export const protectRoute = [
     requireAuth(),
     async (req, res, next) => {
          try {
               const clerkId = req.auth().userId;

               if (!clerkId) return res.status(401).json({ message: "Unauthorized - invalid token" });

               // find user in db by clerk ID
               let user = await User.findOne({ clerkId });

               if (!user) {
                    // AUTO-HEAL: If user is authenticated via Clerk but not in our DB yet
                    // We create a basic record for them so they can continue working
                    user = await User.create({
                         clerkId,
                         name: "New User", // Placeholder name
                         email: `user_${clerkId}@temporary.com`, // Placeholder email
                         profileImage: "",
                    });
                    console.log("🛠️ Auto-created missing user in MongoDB for ClerkID:", clerkId);
               }

               // attach user to req
               req.user = user;

               // Ensure user exists in Stream (fallback if Inngest hasn't run yet)
               await upsertStreamUser({
                    id: user.clerkId,
                    name: user.name,
                    image: user.profileImage,
               });

               next();
          } catch (error) {
               console.error("Error in protectRoute middleware", error);
               res.status(500).json({ message: "Internal Server Error" });
          }
     },
];