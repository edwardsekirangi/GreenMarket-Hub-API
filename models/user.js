const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    label: { type: String, required: true },
    line1: { type: String, required: true },
    city: String,
    country: String,
});

const userSchema = new mongoose.Schema(
    {
        provider: { type: String, required: true },
        providerId: { type: String, required: true },
        email: { type: String, required: true, unique: true, lowercase: true },
        name: { type: String, required: true },
        role: { type: String, enum: ["user", "admin"], default: "user" },
        avatarUrl: String,
        status: {
            type: String,
            enum: ["active", "suspended"],
            default: "active",
        },
        addresses: [addressSchema],
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
