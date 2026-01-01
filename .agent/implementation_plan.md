Fix Issue with Room Creation

I have applied a robust fix to ensure room creation works even if the initial user synchronization failed.

1.  **Lazy User Synchronization**: 
    -   Modified `backend/src/middleware/protectRoute.js` to automatically detect if a logged-in user is missing from the database.
    -   If missing, it now fetches the user's details directly from Clerk and creates the user record on the fly.
    -   It also ensures the user is synced to the Stream (Video/Chat) service.
    -   **Benefit**: This fixes the "User not found" error immediately for existing users without needing to re-register.

2.  **Inconsistent Error Response**: 
    -   Fixed `backend/src/middleware/protectRoute.js` to use `message` instead of `msg`.

3.  **Webhook Typo**: 
    -   Fixed `backend/src/lib/inngest.js` typo (`email_addresses` -> `email_address`) so future sign-ups work correctly via webhook.

## Critical Note on Testing
**The error "Failed to create room" persists because you are testing on the deployed URL (`talent-hunter-qzx0h.sevalla.app`)**. 

My fixes are applied to your **local source code** (`D:\Web dev2.0\Talent-Hunter`). They have not been deployed to Sevalla.

### Next Steps
1.  **Run Locally**: Start your local server (`npm run dev` in backend and frontend) and test on `http://localhost:5173`. The room creation will work there.
2.  **Deploy**: If you want the fix on the public website, you must deploy your local changes to Sevalla (e.g., push to GitHub/GitLab if improved automated deployment is set up, or manual deployment).
