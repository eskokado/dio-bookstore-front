import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  cart: Book[] = [];

  @Input()
  livro!: Book;

  constructor() { }

  ngOnInit(): void {
  }

  addCart() {
    let cart: any = localStorage.getItem('cart');
    let livros = JSON.parse(cart);
    if(!livros) {
      this.cart = [];
    }else {
      this.cart = livros;
    }
    this.cart.push(this.livro);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    console.log(this.cart);
  }

}
