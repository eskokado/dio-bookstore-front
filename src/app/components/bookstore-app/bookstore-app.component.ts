import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookstore-app',
  templateUrl: './bookstore-app.component.html',
  styleUrls: ['./bookstore-app.component.css']
})
export class BookstoreAppComponent implements OnInit {
  @Input()  isOpenCarrinho!: Boolean;

  constructor() { }

  ngOnInit(): void {
  }

  closeCarrinho(isOpen: boolean) {
    console.log('recebeu evento isOpenCarrinho', isOpen);
    this.isOpenCarrinho = isOpen;
  }
}
