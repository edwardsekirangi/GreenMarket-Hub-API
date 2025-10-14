// server.js
const express = require("express");
const connectDB = require("./db/connection");
const productRoutes = require("./routes/productRoutes");
const shopRoutes = require("./routes/shopRoutes");
const errorHandler = require("./middleware/errorHandler");
const { swaggerUi, swaggerDocument } = require("./docs/swagger");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

// Middleware goes here
// Middleware

// routes
// Home route
app.get("/", (req, res) => {
    res.send("API is running...");
});

// Routes
app.use("/products", productRoutes);
app.use("shops", shopRoutes);

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Error handler
app.use(errorHandler);

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
