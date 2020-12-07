import { PrismaClient } from "@prisma/client";
import { FastifyInstance } from "fastify";
import ProductsService from "./products-service";
import UserService from "./user.service";

export interface AppServices {
  productsService: ProductsService;
  userService: UserService;
}

export async function injectServices(fastify: FastifyInstance) {
  const prismaClient = new PrismaClient();

  const productsService = new ProductsService(prismaClient);
  const userService = new UserService(prismaClient);

  const services: AppServices = {
    productsService,
    userService,
  };

  fastify.decorate("services", services);
}
