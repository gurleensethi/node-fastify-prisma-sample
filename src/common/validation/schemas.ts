import { FastifyInstance } from "fastify";

const schemas = {
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

export default schemas;

export async function initSchemas(fastify: FastifyInstance) {
  fastify.addSchema({
    $id: "product",
    ...schemas.productItemSchema,
  });
}
