import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/notification.service';
import { PIZZA_DATA } from 'src/app/shared/pizzaData';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  public addItemForm: FormGroup;
  public pizza = PIZZA_DATA.pizza

  constructor(private fb: FormBuilder, private dialog: MatDialog, private notificationService: NotificationService) { 
    this.addItemForm = this.fb.group({
      code:null,
      pizzaName:'',
      price:'',
      quantity:'',
      cartQuantity:0
    })
  }

  ngOnInit(): void {
    
  }

  openDialog() {
    this.dialog.closeAll();
  }

  onaddPizza() {
    const pizzaAddData = this.addItemForm.value;
    pizzaAddData.code = this.pizza.length  + 111;
    this.pizza.push(pizzaAddData);
    this.notificationService.showNotification('Pizza Added successfully');
    this.dialog.closeAll();
  }

}
