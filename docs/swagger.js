// docs/swagger.js
const swaggerUi = require("swagger-ui-express");

const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "GreenMarket Hub API",
    version: "1.0.0",
    description: "API documentation for the GreenMarket Hub community marketplace. Endpoints are grouped by resource (Products, Shops, etc.).",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Development server (local)",
    },
    {
      url: "https://greenmarket-hub-api.onrender.com",
      description: "Production server (Render deployment)",
    },
  ],
  tags: [
    {
      name: "Products",
      description: "Operations related to product management",
    },
    {
      name: "Shops",
      description: "Operations related to shop management",
    },
  ],
  paths: {
    "/products": {
      get: {
        tags: ["Products"],
        summary: "List all products",
        responses: {
          200: { description: "Array of products" },
          500: { description: "Server error" },
        },
      },
      post: {
        tags: ["Products"],
        summary: "Create a new product",
        responses: {
          201: { description: "Product created" },
          400: { description: "Validation error" },
        },
      },
    },
    "/products/{id}": {
      get: {
        tags: ["Products"],
        summary: "Get product by ID",
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: {
          200: { description: "Product found" },
          404: { description: "Not found" },
        },
      },
      put: {
        tags: ["Products"],
        summary: "Update product by ID",
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: {
          200: { description: "Product updated" },
          400: { description: "Validation error" },
        },
      },
      delete: {
        tags: ["Products"],
        summary: "Delete product by ID",
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: {
          204: { description: "Deleted" },
          404: { description: "Not found" },
        },
      },
    },
    "/shops": {
      get: {
        tags: ["Shops"],
        summary: "List all shops",
        responses: { 200: { description: "Array of shops" } },
      },
      post: {
        tags: ["Shops"],
        summary: "Create a new shop",
        responses: { 201: { description: "Shop created" } },
      },
    },
    "/shops/{id}": {
      get: {
        tags: ["Shops"],
        summary: "Get shop by ID",
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: {
          200: { description: "Shop found" },
          404: { description: "Not found" },
        },
      },
      put: {
        tags: ["Shops"],
        summary: "Update shop by ID",
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: {
          200: { description: "Shop updated" },
          400: { description: "Validation error" },
        },
      },
      delete: {
        tags: ["Shops"],
        summary: "Delete shop by ID",
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: {
          204: { description: "Deleted" },
          404: { description: "Not found" },
        },
      },
    },
  },
};

module.exports = { swaggerUi, swaggerDocument };
