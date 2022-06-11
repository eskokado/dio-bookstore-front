import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { BookstoreAppComponent } from './components/bookstore-app/bookstore-app.component';
import { FiltersComponent } from './components/bookstore-app/filters/filters.component';
import { ProductListComponent } from './components/bookstore-app/product-list/product-list.component';
import { ProductItemComponent } from './components/bookstore-app/product-list/product-item/product-item.component';
import { BookService } from './components/bookstore-app/product-list/product-list.component.service';
import { HttpClientModule } from '@angular/common/http';
import { CartListComponent } from './components/bookstore-app/cart-list/cart-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { CartListService } from './components/bookstore-app/cart-list/cart-list.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BookstoreAppComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent,
    CartListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
  ],
  providers: [BookService, CartListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
