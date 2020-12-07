import { FastifyPluginAsync } from "fastify";
import { CreateUserData } from "../../services/user.service";
import { signupUserSchema } from "./auth.schema";

const authRoutes: FastifyPluginAsync = async (fastify, options) => {
  fastify.post<{ Body: CreateUserData }>(
    "/auth/signup",
    {
      schema: {
        body: signupUserSchema,
      },
    },
    async (request, reply) => {
      const { userService } = fastify.services;
      return userService.createUser(request.body);
    }
  );
};

export default authRoutes;
