export interface Product {
  id: number;
  name: string;
  description: string;
}

export type CreateProductData = Omit<Product, "id">;

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
}
