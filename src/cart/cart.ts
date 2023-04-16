import Product from "../products/products";
import { CartProtocol } from "./contracts/cart.protocol";

export default class Cart implements CartProtocol {
  private readonly _items: Product[] = [];

  // adicinoar itens no carrinho
  addItem(item: Product): void {
    this._items.push(item)
  }

  // remover item do carrinho
  removeItem(item: Product): void {
    const index = this._items.indexOf(item)
    this._items.splice(index, 1)
  }

  // retornar todos os itens do carrinho
  get items(): readonly Product[] {
    return this._items
  }

  // somar todos os itens do carrinho
  total(): number {
    let total = 0

    this._items.map(product => {
      total += product.price
    })

    return total
  }

  // verificar se o carrinho está vazio
  isEmpty(): boolean {
    return this._items.length === 0
  }

  // limpar o carrinho
  clear(): void {
    this._items.length = 0
  }
}
