const connectDB = require("./connection");
const User = require("../models/user");
const Shop = require("../models/shop");
const Product = require("../models/product");
const dotenv = require("dotenv");
dotenv.config();

(async () => {
    await connectDB();
    await User.deleteMany({});
    await Shop.deleteMany({});
    await Product.deleteMany({});

    const user = await User.create({
        provider: "google",
        providerId: "12345",
        email: "test@example.com",
        name: "Test User",
        role: "user",
        status: "active",
        addresses: [
            {
                label: "Home",
                line1: "123 Street",
                city: "Kampala",
                country: "UG",
            },
        ],
    });

    const shop = await Shop.create({
        ownerId: user._id,
        name: "Eco Shop",
        bio: "Sustainable goods",
        contactEmail: "eco@example.com",
        location: "Kampala",
    });

    await Product.create({
        shopId: shop._id,
        name: "Reusable Bottle",
        desc: "Eco-friendly water bottle",
        price: 10,
        stock: 50,
        tags: ["eco", "bottle"],
    });

    console.log("✅ Seed data inserted");
    process.exit();
})();
