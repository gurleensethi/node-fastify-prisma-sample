interface Product {
  name: string;
  description: string;
}

export default class ProductsService {
  private products: Product[] = [];

  async find(): Promise<Product[]> {
    return this.products;
  }
}
