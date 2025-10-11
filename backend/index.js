// index.js — backend server
import express from "express";
import cors from "cors";

const app = express();
app.use(cors()); // ✅ allows requests from your frontend
app.use(express.json()); // ✅ parses JSON body

// Example POST route from frontend (http://localhost:3000)
app.post("/send", async (req, res) => {
  try {
    const { from, to, amount } = req.body;
    console.log(`Received payment request:
      From: ${from}
      To: ${to}
      Amount: ${amount}
    `);

    // For now we’ll just simulate the backend logic
    // (You can integrate ethers.js later if you want backend signing)
    return res.json({
      success: true,
      message: "Transaction request received successfully",
    });
  } catch (err) {
    console.error("Error processing request:", err);
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

// Start server on port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
