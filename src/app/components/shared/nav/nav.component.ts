import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
  @Output() open = new EventEmitter;

  ngOnInit(): void {
  }

  openCarrinho(): void {
    console.log('clicou nav openCarrinho');
    this.open.emit(true);
  }

}
