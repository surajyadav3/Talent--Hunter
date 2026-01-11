import express from "express";
import mongoose from "mongoose";
import path from "path";
import fs from "fs";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import cors from "cors";
import { serve } from "inngest/express";
import { inngest, functions } from "./lib/inngest.js";
import { clerkMiddleware } from '@clerk/express'
import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoute.js";

import { protectRoute } from "./middleware/protectRoute.js";

const app = express();

process.on('uncaughtException', (err) => {
     console.error('❌ UNCAUGHT EXCEPTION! Shutting down...', err);
});

process.on('unhandledRejection', (err) => {
     console.error('❌ UNHANDLED REJECTION! Shutting down...', err);
});

const rootDir = process.cwd();
const __dirname = path.resolve();

//middlewares
app.use(express.json());
if (ENV.NODE_ENV === "production") {
     app.use((req, res, next) => {
          console.log(`📡 [${req.method}] ${req.url}`);
          next();
     });
}


console.log("🔒 CORS Origin set to:", ENV.CLIENT_URL || "*");
app.use(cors({
     origin: ENV.CLIENT_URL || "*",
     credentials: true
}));
app.use(clerkMiddleware());//this adds auth field to request object;

// Health check
app.get("/health", (req, res) => {
     console.log("🔍 Health check requested");
     res.status(200).json({
          status: "UP",
          db: mongoose.connection.readyState,
          static_path: ENV.NODE_ENV === "production" ? path.resolve(process.cwd(), "frontend", "dist") : "N/A"
     });
});

// Protected test route
app.get("/video-calls", protectRoute, (req, res) => {
     res.status(200).json({ msg: "Authorized" });
});

// API Routes
app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);

// Production Static Serving
if (ENV.NODE_ENV === "production") {
     // Try to find the production build folder in multiple locations
     const possiblePaths = [
          path.resolve(process.cwd(), "frontend", "dist"), // If started from root
          path.resolve(process.cwd(), "..", "frontend", "dist"), // If started from backend/
          path.resolve(__dirname, "..", "..", "frontend", "dist") // Relative to server.js
     ];

     let staticPath = possiblePaths[0];
     for (const p of possiblePaths) {
          if (fs.existsSync(p)) {
               staticPath = p;
               break;
          }
     }

     const indexPath = path.resolve(staticPath, "index.html");

     console.log("📁 Production Mode: Serving static files from", staticPath);

     if (fs.existsSync(staticPath)) {
          app.use(express.static(staticPath));
          // Catch-all route for SPA using Regex literal (required for Express 5)
          app.get(/.*/, (req, res) => {
               res.sendFile(indexPath);
          });
     } else {
          console.warn("⚠️ Frontend dist NOT found. API only mode.");
          app.get(/.*/, (req, res) => {
               res.status(404).json({ error: "Frontend build missing", pathChecked: staticPath });
          });
     }
}




const startServer = async () => {
     const port = parseInt(ENV.PORT || "5000", 10);

     console.log("🚀 Starting server startup sequence...");
     console.log("📝 Environment Keys:", Object.keys(process.env).filter(k => !k.includes("KEY") && !k.includes("SECRET")));

     console.log("🚀 Startup config:", {
          port,
          node_env: ENV.NODE_ENV,
          has_db_url: !!ENV.DB_URL,
          client_url: ENV.CLIENT_URL
     });

     try {
          const server = app.listen(port, () => {
               console.log(`✅ Server successfully started and listening on port ${port}`);

               // Connect to DB in background
               connectDB().catch(err => {
                    console.error("❌ Background DB connection failed:", err);
               });
          });

          server.on('error', (err) => {
               if (err.code === 'EADDRINUSE') {
                    console.error(`❌ Port ${port} is already in use.`);
               } else {
                    console.error("❌ Server secondary error:", err);
               }
          });

     } catch (error) {
          console.error("❌ Critical server startup error:", error);
     }
};

startServer();
