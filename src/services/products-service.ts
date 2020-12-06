import { PrismaClient, Product } from "@prisma/client";
import { v4 } from "uuid";

export type CreateProductData = Omit<Product, "id">;
export type UpdateProductData = Omit<Product, "id">;

export default class ProductsService {
  constructor(private prisma: PrismaClient) {}

  async find(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  async findById(id: string): Promise<Product | null> {
    return this.prisma.product.findFirst({ where: { id } });
  }

  async create(data: CreateProductData): Promise<Product> {
    return this.prisma.product.create({
      data: {
        id: v4(),
        ...data,
      },
    });
  }

  async update(id: string, data: UpdateProductData): Promise<Product | null> {
    const product = await this.prisma.product.findFirst({ where: { id } });

    if (!product) {
      return null;
    }

    return this.prisma.product.update({
      data: { ...data },
      where: { id },
    });
  }

  async delete(id: string): Promise<Product | null> {
    const product = await this.prisma.product.findFirst({ where: { id } });

    if (!product) {
      return null;
    }

    return this.prisma.product.delete({ where: { id } });
  }
}
