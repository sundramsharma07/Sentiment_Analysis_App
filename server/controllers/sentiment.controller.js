import Ticket from "../models/Ticket.js";
import fs from "fs";
import crypto from "crypto";

// Mock sentiment analysis - deterministic based on file content
// Replace the getDeterministicSentiment function with this:
const getDeterministicSentiment = (filePath) => {
  try {
    const fileBuffer = fs.readFileSync(filePath);
    const hash = crypto.createHash('md5').update(fileBuffer).digest('hex');
    const hashNum = parseInt(hash.substring(0, 8), 16);
    
    // Create a seed for reproducible random-like values
    const seed = hashNum;
    
    // Generate predictable "random" numbers
    const predictableRandom = (min, max) => {
      const range = max - min;
      return min + ((seed % 1000) / 1000) * range;
    };
    
    // More realistic distribution:
    // 60% Positive, 25% Neutral, 15% Negative
    const distribution = seed % 100;
    
    let sentiment, baseConfidence;
    
    if (distribution < 60) { // 0-59 = Positive
      sentiment = "Positive";
      baseConfidence = 0.75;
    } else if (distribution < 85) { // 60-84 = Neutral
      sentiment = "Neutral";
      baseConfidence = 0.65;
    } else { // 85-99 = Negative
      sentiment = "Negative";
      baseConfidence = 0.70;
    }
    
    // Add some variation based on file hash
    const variation = ((hashNum % 100) / 100) * 0.25; // ±25%
    const confidence = Math.min(0.99, Math.max(0.6, baseConfidence + variation));
    
    return { 
      sentiment, 
      confidence: parseFloat(confidence.toFixed(2)),
      hash 
    };
  } catch (error) {
    console.error("File read error:", error);
    // Fallback with more positive bias
    const sentiments = ["Positive", "Neutral", "Negative"];
    const weights = [60, 25, 15]; // Probability weights
    const rand = Math.random() * 100;
    
    let sentiment;
    if (rand < 60) sentiment = "Positive";
    else if (rand < 85) sentiment = "Neutral";
    else sentiment = "Negative";
    
    const confidence = 0.7 + (Math.random() * 0.29);
    
    return { 
      sentiment, 
      confidence: parseFloat(confidence.toFixed(2)),
      hash: Date.now().toString() 
    };
  }
};

export const analyzeAudio = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ 
        success: false, 
        error: "No audio file uploaded" 
      });
    }

    const { sentiment, confidence, hash } = getDeterministicSentiment(req.file.path);
    
    console.log("📊 Analysis Result:", {
      filename: req.file.filename,
      sentiment,
      confidence,
      hash: hash.substring(0, 8) + "..."
    });

    const ticket = new Ticket({
      filename: req.file.filename,
      filePath: req.file.path,
      fileHash: hash,
      sentiment,
      confidence,
      originalName: req.file.originalname,
      size: req.file.size,
      mimetype: req.file.mimetype
    });

    await ticket.save();
    
    console.log("✅ Saved to MongoDB with ID:", ticket._id);

    res.json({
      success: true,
      sentiment,
      confidence,
      file: req.file.filename,
      originalName: req.file.originalname,
      size: req.file.size,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error("❌ Analysis error:", error);
    res.status(500).json({ 
      success: false, 
      error: "Failed to analyze audio",
      message: error.message 
    });
  }
};

export const getAnalysisHistory = async (req, res) => {
  try {
    const { limit = 20, page = 1 } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const tickets = await Ticket.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit))
      .select('-filePath -fileHash -__v');
    
    const total = await Ticket.countDocuments();
    
    res.json({
      success: true,
      data: tickets,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    console.error("History error:", error);
    res.status(500).json({ 
      success: false, 
      error: "Failed to fetch history" 
    });
  }
};

export const getStats = async (req, res) => {
  try {
    const total = await Ticket.countDocuments();
    const positive = await Ticket.countDocuments({ sentiment: "Positive" });
    const neutral = await Ticket.countDocuments({ sentiment: "Neutral" });
    const negative = await Ticket.countDocuments({ sentiment: "Negative" });
    
    const avgConfidence = await Ticket.aggregate([
      { $group: { _id: null, avg: { $avg: "$confidence" } } }
    ]);
    
    res.json({
      success: true,
      stats: {
        total,
        positive,
        neutral,
        negative,
        avgConfidence: avgConfidence[0]?.avg ? parseFloat((avgConfidence[0].avg * 100).toFixed(1)) : 0
      }
    });
  } catch (error) {
    console.error("Stats error:", error);
    res.status(500).json({ 
      success: false, 
      error: "Failed to fetch statistics" 
    });
  }
};

export const deleteAnalysis = async (req, res) => {
  try {
    const { id } = req.params;
    
    const ticket = await Ticket.findById(id);
    if (!ticket) {
      return res.status(404).json({ 
        success: false, 
        error: "Analysis not found" 
      });
    }
    
    // Delete the audio file from disk
    if (ticket.filePath && fs.existsSync(ticket.filePath)) {
      fs.unlinkSync(ticket.filePath);
    }
    
    await Ticket.findByIdAndDelete(id);
    
    res.json({
      success: true,
      message: "Analysis deleted successfully"
    });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ 
      success: false, 
      error: "Failed to delete analysis" 
    });
  }
};