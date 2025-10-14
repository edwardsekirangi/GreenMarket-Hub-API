// server.js
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/connection.js");

dotenv.config();

const app = express();
app.use(express.json());

// Simple route
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 4800;

// Wrap everything in an async function 
async function startServer() {
  try {
    await connectDB(); // Wait for MongoDB connection before continuing
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err.message);
    process.exit(1);
  }
}

// Call the async function
startServer();
