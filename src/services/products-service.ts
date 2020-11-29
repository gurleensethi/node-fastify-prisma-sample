interface Product {
  id: number;
  name: string;
  description: string;
}

export default class ProductsService {
  private products: Product[] = [
    { id: 1, name: "T-Shirt", description: "Sample small t-shirt." },
  ];

  async find(): Promise<Product[]> {
    return this.products;
  }

  async findById(id: number): Promise<Product | undefined> {
    return this.products.find((product) => product.id === id);
  }
}
