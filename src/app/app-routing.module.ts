import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminProductsComponent } from './admin-products/admin-products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { StoreProductsComponent } from './store-products/store-products.component';

const routes: Routes = [
  { path: '', redirectTo:'/admin-products', pathMatch: 'full' },
  { path: 'admin-products', component: AdminProductsComponent },
  { path: 'store-products', component: StoreProductsComponent },
  { path: 'checkout', component: CheckoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
