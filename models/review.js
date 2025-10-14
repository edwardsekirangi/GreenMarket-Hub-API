const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
    {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        rating: {
            type: Number,
            required: true,
            validate: {
                validator: (v) => v >= 1 && v <= 5,
                message: (props) =>
                    `${props.value} is not a valid rating (1–5)!`,
            },
        },
        comment: String,
    },
    { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
