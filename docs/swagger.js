// docs/swagger.js
const swaggerUi = require("swagger-ui-express");

const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "GreenMarket Hub API",
    version: "1.0.0",
    description:
      "API documentation for the GreenMarket Hub community marketplace. Endpoints are grouped by resource (Products, Shops). MongoDB generates IDs automatically, so you only provide business fields when creating items.",
  },
  servers: [
    {
      url: "http://localhost:4800",
      description: "Development server (local)",
    },
    {
      url: "https://greenmarket-hub-api.onrender.com",
      description: "Production server (Render deployment)",
    },
  ],
  tags: [
    { name: "Products", description: "Operations related to product management" },
    { name: "Shops", description: "Operations related to shop management" },
  ],
  paths: {
    // ---------------- PRODUCTS ----------------
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
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ProductInput",
              },
            },
          },
        },
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
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "string" },
            description: "The ID of the product",
          },
        ],
        responses: {
          200: { description: "Product found" },
          404: { description: "Not found" },
        },
      },
      put: {
        tags: ["Products"],
        summary: "Update product by ID",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "string" },
            description: "The ID of the product to update",
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/ProductUpdate" },
            },
          },
        },
        responses: {
          200: { description: "Product updated" },
          400: { description: "Validation error" },
          404: { description: "Not found" },
        },
      },
      delete: {
        tags: ["Products"],
        summary: "Delete product by ID",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "string" },
            description: "The ID of the product to delete",
          },
        ],
        responses: {
          204: { description: "Deleted" },
          404: { description: "Not found" },
        },
      },
    },

    // ---------------- SHOPS ----------------
    "/shops": {
      get: {
        tags: ["Shops"],
        summary: "List all shops",
        responses: {
          200: { description: "Array of shops" },
          500: { description: "Server error" },
        },
      },
      post: {
        tags: ["Shops"],
        summary: "Create a new shop",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/ShopInput" },
            },
          },
        },
        responses: {
          201: { description: "Shop created" },
          400: { description: "Validation error" },
        },
      },
    },
    "/shops/{id}": {
      get: {
        tags: ["Shops"],
        summary: "Get shop by ID",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "string" },
            description: "The ID of the shop",
          },
        ],
        responses: {
          200: { description: "Shop found" },
          404: { description: "Not found" },
        },
      },
      put: {
        tags: ["Shops"],
        summary: "Update shop by ID",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "string" },
            description: "The ID of the shop to update",
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/ShopUpdate" },
            },
          },
        },
        responses: {
          200: { description: "Shop updated" },
          400: { description: "Validation error" },
          404: { description: "Not found" },
        },
      },
      delete: {
        tags: ["Shops"],
        summary: "Delete shop by ID",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "string" },
            description: "The ID of the shop to delete",
          },
        ],
        responses: {
          204: { description: "Deleted" },
          404: { description: "Not found" },
        },
      },
    },
  },

  // ---------------- COMPONENT SCHEMAS ----------------
  components: {
    schemas: {
      ProductInput: {
        type: "object",
        required: ["shopId", "name", "price"],
        properties: {
          shopId: { type: "string", description: "ID of the shop (ObjectId)" },
          name: { type: "string" },
          desc: { type: "string" },
          price: { type: "number", minimum: 0 },
          currency: { type: "string", example: "USD" },
          stock: { type: "integer", minimum: 0 },
          tags: { type: "array", items: { type: "string" } },
          images: { type: "array", items: { type: "string" } },
          status: { type: "string", enum: ["active", "archived"], default: "active" },
        },
      },
      ProductUpdate: {
        type: "object",
        properties: {
          name: { type: "string" },
          desc: { type: "string" },
          price: { type: "number" },
          stock: { type: "integer" },
          status: { type: "string", enum: ["active", "archived"] },
        },
      },
      ShopInput: {
        type: "object",
        required: ["ownerId", "name", "contactEmail"],
        properties: {
          ownerId: { type: "string" },
          name: { type: "string" },
          bio: { type: "string" },
          logoUrl: { type: "string" },
          contactEmail: { type: "string", format: "email" },
          location: { type: "string" },
          isVerified: { type: "boolean", default: false },
        },
      },
      ShopUpdate: {
        type: "object",
        properties: {
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
};

module.exports = { swaggerUi, swaggerDocument };
