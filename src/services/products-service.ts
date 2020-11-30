export interface Product {
  id: number;
  name: string;
  description: string;
}

export type CreateProductData = Omit<Product, "id">;
export type UpdateProductData = Omit<Product, "id">;

export default class ProductsService {
  private idCounter = 2;
  private products: Product[] = [
    { id: 1, name: "T-Shirt", description: "Sample small t-shirt." },
  ];

  async find(): Promise<Product[]> {
    return this.products;
  }

  async findById(id: number): Promise<Product | undefined> {
    return this.products.find((product) => product.id === id);
  }

  async create(data: CreateProductData): Promise<Product> {
    const product: Product = { id: this.idCounter++, ...data };
    this.products.push(product);
    return product;
  }

  async update(
    id: number,
    data: UpdateProductData
  ): Promise<Product | undefined> {
    const index = this.products.findIndex((product) => product.id === id);
    if (index == -1) return undefined;
    const product = this.products[index];
    this.products[index] = { ...product, ...data };
    return this.products[index];
  }

  async delete(id: number): Promise<Product | undefined> {
    const index = this.products.findIndex((product) => product.id === id);
    if (index == -1) return undefined;
    return this.products.splice(index)[0];
  }
}
