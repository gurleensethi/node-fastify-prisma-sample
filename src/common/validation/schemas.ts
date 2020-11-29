import { FastifyInstance } from "fastify";
import { JSONSchema6 } from "json-schema";

const schemas: Record<string | number, JSONSchema6> = {
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
