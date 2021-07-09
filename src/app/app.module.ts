import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { AdminProductsComponent } from './admin-products/admin-products.component';
import { StoreProductsComponent } from './store-products/store-products.component';
import { AdminItemComponent } from './admin-products/admin-item/admin-item.component';
import { AddItemComponent } from './admin-products/add-item/add-item.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';
import { StoreItemComponent } from './store-products/store-item/store-item.component';
import { CheckoutItemComponent } from './checkout/checkout-item/checkout-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    AdminProductsComponent,
    StoreProductsComponent,
    AdminItemComponent,
    AddItemComponent,
    CheckoutComponent,
    StoreItemComponent,
    CheckoutItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
