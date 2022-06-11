import { Injectable } from "@angular/core";
import { Book } from "../product-list/model/book";

@Injectable()
export class CartListService {
  findCart(): Book[] {
    let cart: any = localStorage.getItem('cart');
    let livros = JSON.parse(cart);
    console.log('Service', livros);
    if(!livros) {
      return [];
    }else {
      return livros;
    }
  }

  clearCart() {
    let clearCart: any = [];
    localStorage.setItem('cart', JSON.stringify(clearCart));
    console.log(clearCart);
  }
}

