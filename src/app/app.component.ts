import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  ngOnInit(): void {
    this.isOpenCarrinho = false;
  }
  title = 'dio-bookstore-front';
  @Output() isOpenCarrinho = false;

  openCarrinho(isOpen: boolean) {
    console.log('recebeu evento openCarrinho', isOpen);
    this.isOpenCarrinho = isOpen;
  }
}
