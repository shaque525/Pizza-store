import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.scss']
})
export class CheckoutItemComponent implements OnInit {

  @Input() name:any;
  @Input() price:any;
  @Input() cartQuantity:any;
  @Input() code:any;

  constructor() { }

  ngOnInit(): void {
  }

}
