export default {
  notFound: {
    type: "object",
    properties: {
      message: { type: "string" },
    },
    required: ["message"],
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
};
