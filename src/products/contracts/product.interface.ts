import Product from "../products";

export default interface ProductRepositoryInterface {
  findAll(): Product[];
  save(name: string, price: number): Product;
}
