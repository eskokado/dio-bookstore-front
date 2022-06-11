import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CartListDatasource } from './cart-list.datasource';
import { CartListService } from './cart-list.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  constructor(private cartListService: CartListService) { }

  @Output() close = new EventEmitter;
  @Output() isOpenCarrinho = false;

  dataSource!: CartListDatasource;
  displayedColumns = ["img", "id", "name", "quantity", "price", "total"];

  ngOnInit(): void {
    this.dataSource = new CartListDatasource(this.cartListService);
    this.dataSource.loadCartList();
  }

  closeCart(): void {
    console.log('clicou cart-list closeCart');
    this.close.emit(false);
  }

  clearCart(): void {
    console.log('clicou clearCart');
    this.cartListService.clearCart();
    this.dataSource.loadCartList();
  }


  closeCarrinho(isOpen: boolean) {
    console.log('recebeu evento closeCarrinho ', isOpen);
    this.isOpenCarrinho = isOpen;
  }
}
