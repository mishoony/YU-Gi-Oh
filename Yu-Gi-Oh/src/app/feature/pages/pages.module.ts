import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    CreateProductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  
})
export class PagesModule { }
