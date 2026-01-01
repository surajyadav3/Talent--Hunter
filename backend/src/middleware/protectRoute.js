import { requireAuth, clerkClient } from "@clerk/express";
import User from "../models/User.js";
import { upsertStreamUser } from "../lib/stream.js";

export const protectRoute = [
     requireAuth({ signInUrl: "/sign-in" }),
     async (req, res, next) => {
          try {
               const clerkId = req.auth().userId;
               if (!clerkId) return res.status(401).json({ message: "Unauthorized - invalid token" })

               //find user in db by clerk ID;
               let user = await User.findOne({ clerkId })

               if (!user) {
                    // Fallback: Lazy sync if webhook failed
                    try {
                         const clerkUser = await clerkClient.users.getUser(clerkId);
                         user = await User.create({
                              clerkId,
                              name: `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim(),
                              email: clerkUser.emailAddresses[0]?.emailAddress,
                              profileImage: clerkUser.imageUrl,
                         });

                         await upsertStreamUser({
                              id: clerkId,
                              name: user.name,
                              image: user.profileImage,
                         });
                    } catch (error) {
                         console.error("Auto-sync failed:", error);
                         return res.status(404).json({ message: "User not found and sync failed" });
                    }
               }

               req.user = user
               next()
          } catch (error) {
               console.error("Error in protectRoute middleware", error);
               res.status(500).json({ message: "Internal service Error" });
          }
     }
]