import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PIZZA_DATA } from '../shared/pizzaData';
import { AddItemComponent } from './add-item/add-item.component';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {

  public pizza = PIZZA_DATA.pizza

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddItemComponent,{
      width: '640px',disableClose: true 
    });
}

onDelete(val:any) {
const deletedValIndex = this.pizza.findIndex( x => x.code === val);
this.pizza.splice(deletedValIndex,1);
}

}
