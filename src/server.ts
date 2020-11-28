import fastify from "fastify";
import { registerRoutes } from "./routes";
import { injectServices } from "./services";

(async () => {
  const server = fastify({ logger: process.env.NODE_ENV === "development" });

  await injectServices(server);
  await registerRoutes(server, { prefix: "/api/v1" });

  server.listen(8080, (err, address) => {
    if (err) return console.error(err);
    console.log(`Server listening on ${address}`);
  });
})();
