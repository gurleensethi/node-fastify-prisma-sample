import { FastifyInstance } from "fastify";

const schemas = {
  notFound: {
    type: "object",
    properties: {
      message: { type: "string" },
    },
    required: ["message"],
  },
};

export default schemas;

export async function initSchemas(fastify: FastifyInstance) {
  fastify.addSchema({
    $id: "notFound",
    ...schemas.notFound,
  });
}
