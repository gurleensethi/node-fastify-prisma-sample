import fastify from "fastify";
import { initSchemas } from "./common/validation/schemas";
import errorHandler from "./errors/error.handler";
import { BaseHttpError } from "./errors/http-errors";
import { registerRoutes } from "./features";
import { injectServices } from "./services";

async function bootstrap() {
  const server = fastify({ logger: process.env.NODE_ENV === "development" });

  await initSchemas(server);
  await injectServices(server);
  await registerRoutes(server, { prefix: "/api/v1" });

  server.listen(8080, (err, address) => {
    if (err) return console.error(err);
    console.log(`Server listening on ${address}`);
  });

  server.setErrorHandler(errorHandler);
}

bootstrap();
