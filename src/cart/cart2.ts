import Product from "../products/products";
import { CartProtocol2 } from "./contracts/cart.protocol";

type ITEM_CART = {
  product: Product,
  qtd: number
}

export default class Cart2 implements CartProtocol2<ITEM_CART> {
  private readonly _items: ITEM_CART[] = [];

  // adicinoar itens no carrinho
  addItem(product: Product): void {
    const index = this._items.findIndex((item) => {
      return product === item.product
    })
    // se o produto existir
    if (index !== -1) {
      const qtd = this._items[index].qtd + 1
      this._items[index] = {
        product,
        qtd
      }
      return;
    }
    // se não existir, adiciona no carrinho
    this._items.push({
      product,
      qtd: 1
    })
  }

  // remover item do carrinho
  removeItem(product: Product): void {
    this._items.map((item, index) => {
      if (product === item.product) {
        this._items.splice(index, 1)
      }
    })
  }

  // retornar todos os itens do carrinho
  get items(): readonly ITEM_CART[] {
    return this._items
  }

  // somar todos os itens do carrinho
  total(): number {
    let total = 0

    this._items.map(item => {
      total += (item.product.price * item.qtd)
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
