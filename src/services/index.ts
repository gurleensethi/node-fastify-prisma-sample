import { FastifyInstance } from "fastify";
import ProductsService from "./products-service";

export interface AppServices {
  productsService: ProductsService;
}

export async function injectServices(fastify: FastifyInstance) {
  const productsService = new ProductsService();

  const services: AppServices = {
    productsService,
  };

  fastify.decorate("services", services);
}
