import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './feature/pages/create-product/create-product.component';
import { HomeComponent } from './feature/pages/home/home.component';
import { ProductsComponent } from './feature/pages/products/products.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'home'
  },
  {
    path: 'home',
    component:HomeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'create',
    component: CreateProductComponent
  }
];



export const AppRouterModule = RouterModule.forRoot(routes)
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
