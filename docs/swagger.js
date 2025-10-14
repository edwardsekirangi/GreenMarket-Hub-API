// docs/swagger.js
const swaggerUi = require("swagger-ui-express");

const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "GreenMarket Hub API",
    version: "1.0.0",
    description: "API documentation for Products and Shops",
  },
  servers: [
    { url: "http://localhost:3000", description: "Development server" },
    { url: "https://greenmarket-hub-api.onrender.com", description: "Production server" },
  ],
  tags: [
    { name: "Products", description: "Product management" },
    { name: "Shops", description: "Shop management" },
  ],
  paths: {
    "/products": {
      get: {
        tags: ["Products"],
        summary: "List all products",
        responses: { 200: { description: "Array of products" } },
      },
      post: {
        tags: ["Products"],
        summary: "Create a new product",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["shopId", "name", "price"],
                properties: {
                  shopId: { type: "string", description: "ID of the shop" },
                  name: { type: "string" },
                  desc: { type: "string" },
                  price: { type: "number", minimum: 0 },
                  currency: { type: "string", example: "USD" },
                  stock: { type: "integer", minimum: 0 },
                  tags: { type: "array", items: { type: "string" } },
                  images: { type: "array", items: { type: "string" } },
                },
              },
            },
          },
        },
        responses: { 201: { description: "Product created" }, 400: { description: "Validation error" } },
      },
    },
    "/products/{id}": {
      get: {
        tags: ["Products"],
        summary: "Get product by ID",
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: { 200: { description: "Product found" }, 404: { description: "Not found" } },
      },
      put: {
        tags: ["Products"],
        summary: "Update product by ID",
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  name: { type: "string" },
                  desc: { type: "string" },
                  price: { type: "number" },
                  stock: { type: "integer" },
                  status: { type: "string", enum: ["active", "archived"] },
                },
              },
            },
          },
        },
        responses: { 200: { description: "Product updated" }, 400: { description: "Validation error" } },
      },
      delete: {
        tags: ["Products"],
        summary: "Delete product by ID",
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: { 204: { description: "Deleted" }, 404: { description: "Not found" } },
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
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["ownerId", "name", "contactEmail"],
                properties: {
                  ownerId: { type: "string" },
                  name: { type: "string" },
                  bio: { type: "string" },
                  logoUrl: { type: "string" },
                  contactEmail: { type: "string", format: "email" },
                  location: { type: "string" },
                  isVerified: { type: "boolean" },
                },
              },
            },
          },
        },
        responses: { 201: { description: "Shop created" }, 400: { description: "Validation error" } },
      },
    },
    "/shops/{id}": {
      put: {
        tags: ["Shops"],
        summary: "Update shop by ID",
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  name: { type: "string" },
                  bio: { type: "string" },
                  logoUrl: { type: "string" },
                  contactEmail: { type: "string" },
                  location: { type: "string" },
                  isVerified: { type: "boolean" },
                },
              },
            },
          },
        },
        responses: { 200: { description: "Shop updated" }, 400: { description: "Validation error" } },
      },
      delete: {
        tags: ["Shops"],
        summary: "Delete shop by ID",
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: { 204: { description: "Deleted" }, 404: { description: "Not found" } },
      },
    },
  },
};

module.exports = { swaggerUi, swaggerDocument };
