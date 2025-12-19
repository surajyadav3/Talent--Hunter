import express from "express";
import { getAppStats } from "../controllers/statsController.js";

const router = express.Router();

router.get("/", getAppStats);

export default router;
