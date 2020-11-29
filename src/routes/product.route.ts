import { FastifyPluginAsync } from "fastify";
import schemas from "../common/validation/schemas";

const ProductRoute: FastifyPluginAsync = async (fastify, options) => {
  fastify.get("/products", {}, async (request, reply) => {
    return fastify.services.productsService.find();
  });

  fastify.get<{ Params: { productId: number } }>(
    "/products/:productId",
    {
      schema: {
        params: {
          type: "object",
          properties: {
            productId: { type: "number" },
          },
        },
        response: {
          200: schemas.productItemSchema,
          404: schemas.notFound,
        },
      },
    },
    async (request, reply) => {
      const { productId } = request.params;
      const { productsService } = fastify.services;

      const product = await productsService.findById(productId);

      if (!product) {
        reply.statusCode = 404;
        return { message: `Product with id ${productId} not found!` };
      }

      return product;
    }
  );
};

export default ProductRoute;
