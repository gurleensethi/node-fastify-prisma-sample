import { FastifyPluginAsync } from "fastify";
import {
  CreateProductData,
  UpdateProductData,
} from "../../services/products-service";
import productSchemas from "./product.schema";

const productRoutes: FastifyPluginAsync = async (fastify, options) => {
  fastify.get("/products", {}, async (request, reply) => {
    return fastify.services.productsService.find();
  });

  fastify.get<{ Params: { productId: string } }>(
    "/products/:productId",
    {
      schema: {
        params: productSchemas.productIdParamsSchema,
        response: {
          200: productSchemas.productItemSchema,
          404: { $ref: "notFound" },
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

  fastify.post<{ Body: CreateProductData }>(
    "/products",
    {
      schema: {
        body: productSchemas.productCreateBody,
      },
    },
    (request, reply) => {
      const { productsService } = fastify.services;
      const { body } = request;
      const product = productsService.create(body);
      return product;
    }
  );

  fastify.put<{ Body: UpdateProductData; Params: { productId: string } }>(
    "/products/:productId",
    {
      schema: {
        body: productSchemas.productUpdateBody,
        response: {
          200: productSchemas.productItemSchema,
          404: { $ref: "notFound" },
        },
        params: productSchemas.productIdParamsSchema,
      },
    },
    async (request, reply) => {
      const { productsService } = fastify.services;
      const { body } = request;
      const { productId } = request.params;

      const product = await productsService.update(productId, body);

      if (!product) {
        reply.statusCode = 404;
        return { message: `Product with id ${productId} not found!` };
      }

      return product;
    }
  );

  fastify.delete<{ Params: { productId: string } }>(
    "/products/:productId",
    {
      schema: {
        params: productSchemas.productIdParamsSchema,
        response: {
          200: productSchemas.productItemSchema,
          404: { $ref: "notFound" },
        },
      },
    },
    async (request, reply) => {
      const { productsService } = fastify.services;
      const { productId } = request.params;

      const product = await productsService.delete(productId);

      if (!product) {
        reply.statusCode = 404;
        return { message: `Product with id ${productId} not found!` };
      }

      return product;
    }
  );
};

export default productRoutes;
