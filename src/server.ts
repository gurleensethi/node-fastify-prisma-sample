import fastify from "fastify";

const server = fastify();

server.get("/ping", async (request, reply) => {
  return "pong\n";
});

server.listen(8080, (err, address) => {
  if (err) return console.error(err);

  console.log(`Server listening on ${address}`);
});
