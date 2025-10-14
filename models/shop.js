const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema(
    {
        ownerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        name: { type: String, required: true },
        bio: String,
        logoUrl: String,
        contactEmail: String,
        location: String,
        isVerified: { type: Boolean, default: false },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Shop", shopSchema);
