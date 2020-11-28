import { FastifyPluginAsync } from "fastify";

const products = [{ name: "A" }, { name: "B" }];

const ProductRoute: FastifyPluginAsync = async (fastify, options) => {
  fastify.get("/products", {}, async (request, reply) => {
    return fastify.services.productsService.find();
  });
};

export default ProductRoute;
