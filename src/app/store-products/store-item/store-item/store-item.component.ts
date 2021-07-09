import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.scss']
})
export class StoreItemComponent implements OnInit {

  @Input() name:any;
  @Input() price:any;
  @Input() quantity:any;
  @Input() code:any;
  @Input() cartQuantity:any;
  @Output() addToCart = new EventEmitter<any>();
  @Output() removeFromCart = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  OnRemove() {
    this.removeFromCart.emit(this.code);
  }

  onAddtoCart() {
    this.addToCart.emit(this.code);
  }

}
