import { Component, OnInit } from '@angular/core';
import { BookService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros: any;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.livros = this.bookService.getBooks();
    console.log(this.livros);
  }
}
