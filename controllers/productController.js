const Product = require("../models/product");

exports.getAll = async (req, res, next) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        next(err);
    }
};

exports.getById = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            const error = new Error("Product not found");
            error.status = 404;
            throw error;
        }
        res.json(product);
    } catch (err) {
        next(err);
    }
};

exports.create = async (req, res, next) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        err.status = 400;
        next(err);
    }
};

exports.update = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!product) {
            const error = new Error("Product not found");
            error.status = 404;
            throw error;
        }
        res.json(product);
    } catch (err) {
        next(err);
    }
};

exports.remove = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            const error = new Error("Product not found");
            error.status = 404;
            throw error;
        }
        res.status(204).end();
    } catch (err) {
        next(err);
    }
};
