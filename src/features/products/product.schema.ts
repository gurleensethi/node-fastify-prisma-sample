import { JSONSchema6 } from "json-schema";

const productSchemas: Record<string, JSONSchema6> = {
  productIdParamsSchema: {
    type: "object",
    properties: {
      productId: { type: "string" },
    },
    required: ["productId"],
  },
  productItemSchema: {
    type: "object",
    properties: {
      id: { type: "string" },
      name: { type: "string" },
      description: { type: "string" },
    },
    required: ["id", "name", "description"],
  },
  productCreateBody: {
    type: "object",
    properties: {
      name: { type: "string" },
      description: { type: "string" },
      price: { type: "number" },
    },
    required: ["name", "description", "price"],
  },
  productUpdateBody: {
    type: "object",
    properties: {
      name: { type: "string" },
      description: { type: "string" },
      price: { type: "number" },
    },
  },
};

export default productSchemas;
