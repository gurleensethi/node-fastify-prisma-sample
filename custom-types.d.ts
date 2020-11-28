import fastify = require("fastify");
import { AppServices } from "./src/services";
import ProductsService from "./src/services/ProductsService";

/// <reference types="./custom-types.d.ts"/>

declare module "fastify" {
  interface FastifyInstance {
    services: AppServices;
  }
}
