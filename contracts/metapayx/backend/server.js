import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("MetaPayX Paymaster API is live 🚀");
});

// Example endpoint: simulate gas sponsorship
app.post("/sponsor", async (req, res) => {
  const { user, txData } = req.body;
  // Here, you’d sign and relay transaction via Paymaster
  return res.json({ success: true, sponsored: true, user, txData });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Paymaster backend running on ${PORT}`));