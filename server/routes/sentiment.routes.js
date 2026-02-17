import express from "express";
import upload from "../middleware/upload.js";
import {
  analyzeAudio,
  getAnalysisHistory,
  getStats,
  deleteAnalysis
} from "../controllers/sentiment.controller.js";

const router = express.Router();

// Health check
router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Sentiment Analysis API is running",
    version: "1.0.0",
    endpoints: {
      analyze: "POST /analyze",
      history: "GET /history",
      stats: "GET /stats",
      delete: "DELETE /:id"
    }
  });
});

// Analyze audio file
router.post("/analyze", upload.single("audio"), analyzeAudio);

// Get analysis history with pagination
router.get("/history", getAnalysisHistory);

// Get dashboard statistics
router.get("/stats", getStats);

// Delete specific analysis
router.delete("/:id", deleteAnalysis);

export default router;