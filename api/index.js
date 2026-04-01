import { app } from '../backend/src/app.js';
import { connectDB } from '../backend/src/lib/db.js';

// Ensure DB is connected for serverless function execution
// Serverless environments can reuse instances, so we connect gracefully
connectDB().catch(err => {
    console.error("❌ Failed to connect to DB during startup (Likely missing ENV vars or IP whitelist issue):", err);
});

export default app;
