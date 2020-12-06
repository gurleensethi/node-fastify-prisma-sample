import { PrismaClient } from "@prisma/client";
import { FastifyInstance } from "fastify";
import ProductsService from "./products-service";

export interface AppServices {
  productsService: ProductsService;
}

export async function injectServices(fastify: FastifyInstance) {
  const prismaClient = new PrismaClient();

  const productsService = new ProductsService(prismaClient);

  const services: AppServices = {
    productsService,
  };

  fastify.decorate("services", services);
}
