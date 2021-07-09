import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../shared/notification.service';
import { PIZZA_DATA } from '../shared/pizzaData';

@Component({
  selector: 'app-store-products',
  templateUrl: './store-products.component.html',
  styleUrls: ['./store-products.component.scss']
})
export class StoreProductsComponent implements OnInit {

  public pizza = PIZZA_DATA.pizza;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  onAddToCart(value:any) {
    this.pizza.forEach(val => {
      if(val.code === value) {
        val.cartQuantity = val.cartQuantity +1;
        val.quantity = val.quantity -1;
      }
    });
    this.notificationService.showNotification('Added to the cart Successfully')
  }

  onRemove(value:any) {
    this.pizza.forEach(val => {
      if(val.code === value) {
        val.cartQuantity = val.cartQuantity -1;
        val.quantity = val.quantity +1;
      }
    });
    this.notificationService.showNotification('Removed from the cart Successfully')
  }

}
