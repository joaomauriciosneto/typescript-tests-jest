import ProductRepositoryInterface from "./contracts/product.interface";

// inversão de dependências
export default class ProductController {
  constructor(
    private readonly repository: ProductRepositoryInterface
  ) {}

  getAll() {
    return this.repository.findAll();
  }

  store(name: string, price: number) {
    return this.repository.save(name, price)
  }
}
