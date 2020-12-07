import { FastifyInstance, FastifyPluginAsync } from "fastify";
import productRoutes from "./products/product.routes";
import authRoutes from "./auth/auth.routes";

const routes: FastifyPluginAsync[] = [productRoutes, authRoutes];

export async function registerRoutes(
  fastify: FastifyInstance,
  options?: { prefix?: string }
) {
  routes.forEach((route) =>
    fastify.register(route, { prefix: options?.prefix || "" })
  );
}
