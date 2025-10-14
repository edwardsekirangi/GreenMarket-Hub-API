// controllers/shopController.js
const Shop = require("../models/shop");

exports.getAll = async (req, res, next) => {
    try {
        const shops = await Shop.find();
        res.json(shops);
    } catch (err) {
        next(err);
    }
};

exports.getById = async (req, res, next) => {
    try {
        const shop = await Shop.findById(req.params.id);
        if (!shop) {
            const error = new Error("Shop not found");
            error.status = 404;
            throw error;
        }
        res.json(shop);
    } catch (err) {
        next(err);
    }
};

exports.create = async (req, res, next) => {
    try {
        const shop = new Shop(req.body);
        await shop.save();
        res.status(201).json(shop);
    } catch (err) {
        err.status = 400;
        next(err);
    }
};

exports.update = async (req, res, next) => {
    try {
        const shop = await Shop.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!shop) {
            const error = new Error("Shop not found");
            error.status = 404;
            throw error;
        }
        res.json(shop);
    } catch (err) {
        next(err);
    }
};

exports.remove = async (req, res, next) => {
    try {
        const shop = await Shop.findByIdAndDelete(req.params.id);
        if (!shop) {
            const error = new Error("Shop not found");
            error.status = 404;
            throw error;
        }
        res.status(204).end();
    } catch (err) {
        next(err);
    }
};
