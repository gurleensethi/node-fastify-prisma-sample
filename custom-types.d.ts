import fastify = require("fastify");
import { AppServices } from "./src/services";

/// <reference types="./custom-types.d.ts"/>

declare module "fastify" {
  interface FastifyInstance {
    services: AppServices;
  }
}
