import { FastifyInstance, FastifyPluginAsync } from "fastify";
import ProductRoute from "./product.route";

const routes: FastifyPluginAsync[] = [ProductRoute];

export async function registerRoutes(
  fastify: FastifyInstance,
  options?: { prefix?: string }
) {
  routes.forEach((route) =>
    fastify.register(route, { prefix: options?.prefix || "" })
  );
}
