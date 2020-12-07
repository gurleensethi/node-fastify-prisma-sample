import { PrismaClient, User } from "@prisma/client";
import { v4 } from "uuid";
import { BadRequestError } from "../errors/http-errors";

export type CreateUserData = Omit<User, "id" | "createdAt">;
export type DisplayUser = Omit<User, "password">;

export default class UserService {
  constructor(private prismaClient: PrismaClient) {}

  public async createUser(data: CreateUserData): Promise<DisplayUser> {
    const existingUser = await this.prismaClient.user.findFirst({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new BadRequestError(`User with ${data.email} already exists`);
    }

    return this.prismaClient.user.create({
      data: {
        id: v4(),
        ...data,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        createdAt: true,
      },
    });
  }
}
