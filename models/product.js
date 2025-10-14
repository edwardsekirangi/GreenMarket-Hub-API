const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        shopId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Shop",
            required: true,
        },
        name: { type: String, required: true },
        desc: String,
        price: { type: Number, required: true, min: 0 },
        currency: { type: String, default: "USD" },
        stock: { type: Number, min: 0, default: 0 },
        tags: [String],
        images: [String],
        status: {
            type: String,
            enum: ["active", "archived"],
            default: "active",
        },
    },
    { timestamps: true }
);

productSchema.index({ name: "text", desc: "text" });
productSchema.index({ shopId: 1, status: 1 });

module.exports = mongoose.model("Product", productSchema);
