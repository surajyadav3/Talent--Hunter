import express from "express";
import path from "path";
import { ENV } from "./lib/env.js";
import { connect } from "http2";
import { connectDB } from "./lib/db.js";
import cors from "cors";
import { serve } from "inngest/express";
import { inngest, functions } from "./lib/inngest.js";
import { clerkMiddleware } from '@clerk/express'
import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoute.js";
import statsRoutes from "./routes/statsRoutes.js";
import { protectRoute } from "./middleware/protectRoute.js";

const app = express();

const __dirname = path.resolve()

//middlewares
app.use(express.json());
//credentials true means server allows the browser to include cookies on request


app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
app.use(clerkMiddleware());//this adds auth field to request object;

app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/stats", statsRoutes);


app.get("/health", (req, res) => {
     res.status(200).json({ msg: "API  is up and running" })
});
//when u pass an array of middleware to Express ,it auto flattens and excute them sequentially, one by one 
app.get("/video-calls", protectRoute, (req, res) => {
     res.status(200).json({ msg: "this is protected route" })
});

//make app our app ready for deployment
if (ENV.NODE_ENV === "production") {
     app.use(express.static(path.join(__dirname, "../frontend/dist")))

     app.get("/{*any}", (req, res) => {
          res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
     });
}





const startServer = async () => {
     try {
          await connectDB();
          app.listen(ENV.PORT, () => console.log("Server is running on port:", ENV.PORT));
     } catch (error) {
          console.error("Error starting the Server🕸️", error)
     }
};


startServer();
