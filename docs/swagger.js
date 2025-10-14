// docs/swagger.js
const swaggerUi = require("swagger-ui-express");

const swaggerDocument = {
    openapi: "3.0.0",
    info: {
        title: "GreenMarket Hub API",
        version: "1.0.0",
        description: "API documentation for Products and Shops",
    },
    servers: [{ url: "http://localhost:3000" }],
    paths: {
        "/products": {
            get: {
                summary: "List all products",
                responses: {
                    200: { description: "Array of products" },
                    500: { description: "Server error" },
                },
            },
            post: {
                summary: "Create a new product",
                responses: {
                    201: { description: "Product created" },
                    400: { description: "Validation error" },
                },
            },
        },
        "/products/{id}": {
            get: {
                summary: "Get product by ID",
                parameters: [{ name: "id", in: "path", required: true }],
                responses: {
                    200: { description: "Product found" },
                    404: { description: "Not found" },
                },
            },
            put: {
                summary: "Update product by ID",
                parameters: [{ name: "id", in: "path", required: true }],
                responses: {
                    200: { description: "Product updated" },
                    400: { description: "Validation error" },
                },
            },
            delete: {
                summary: "Delete product by ID",
                parameters: [{ name: "id", in: "path", required: true }],
                responses: {
                    204: { description: "Deleted" },
                    404: { description: "Not found" },
                },
            },
        },
        "/shops": {
            get: {
                summary: "List all shops",
                responses: { 200: { description: "Array of shops" } },
            },
            post: {
                summary: "Create a new shop",
                responses: { 201: { description: "Shop created" } },
            },
        },
    },
};

module.exports = { swaggerUi, swaggerDocument };
