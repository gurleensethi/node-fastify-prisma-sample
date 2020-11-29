const productSchemas = {
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
};

export default productSchemas;
