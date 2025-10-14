const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    qty: { type: Number, required: true, min: 1 },
    unitPrice: { type: Number, required: true, min: 0 },
});

const orderSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        items: [itemSchema],
        total: { type: Number, required: true, min: 0 },
        currency: { type: String, default: "USD" },
        status: {
            type: String,
            enum: ["pending", "paid", "shipped", "cancelled"],
            default: "pending",
        },
        shippingAddress: {
            line1: String,
            city: String,
            country: String,
        },
    },
    { timestamps: { createdAt: "placedAt", updatedAt: "updatedAt" } }
);

module.exports = mongoose.model("Order", orderSchema);
