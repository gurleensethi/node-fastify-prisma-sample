import { JSONSchema6 } from "json-schema";

const productSchemas: Record<string, JSONSchema6> = {
  productIdParamsSchema: {
    type: "object",
    properties: {
      productId: { type: "number" },
    },
    required: ["productId"],
  },
  productItemSchema: {
    type: "object",
    properties: {
      id: { type: "number" },
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
    },
    required: ["name", "description"],
  },
  productUpdateBody: {
    type: "object",
    properties: {
      name: { type: "string" },
      description: { type: "string" },
    },
  },
};

export default productSchemas;
