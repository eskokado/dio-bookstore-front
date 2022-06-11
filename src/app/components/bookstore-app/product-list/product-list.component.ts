import { Component, Input, OnInit } from '@angular/core';
import { BookService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input()
  livros: any;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(data => {
      this.livros = data;
      console.log(this.livros);
    });
  }

}
