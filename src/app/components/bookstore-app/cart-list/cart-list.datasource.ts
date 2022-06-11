import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { Output } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Book } from "../product-list/model/book";
import { CartListService } from "./cart-list.service";

export class CartListDatasource implements DataSource<Book> {
  private cartListSubject = new BehaviorSubject<Book[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private cartListService: CartListService) {}
  connect(collectionViewer: CollectionViewer): Observable<Book[]> {
    return this.cartListSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.cartListSubject.complete();
    this.loadingSubject.complete();
  }

  loadCartList() {
    this.loadingSubject.next(true);
    let cartList = this.cartListService.findCart();
    console.log('Cart List (Datasource)', cartList);
    this.cartListSubject.next(cartList);
    this.loadingSubject.next(false)
  }
}
