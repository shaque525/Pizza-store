import { Component, OnInit } from '@angular/core';
import { PIZZA_DATA } from '../shared/pizzaData';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public pizza = PIZZA_DATA.pizza
  public totalCartValue:number =0;

  constructor() { }

  ngOnInit(): void {
   this.pizza = this.pizza.filter(val => val.cartQuantity>0);
   this.calculateTotalCartValue(this.pizza);
   console.log(this.pizza);
  }

  calculateTotalCartValue(cart:any) {
    cart.forEach((element:any) => {
      this.totalCartValue += element.cartQuantity * element.price;
    });
  }
}
