import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { CartViewComponent } from './cart-view/cart-view.component';


const routes: Routes = [
  {path: "grid" , component : GridComponent},
  {path: "" , component : GridComponent},
  {path: "product-view", component : ProductViewComponent},
  {path: "cart-view", component : CartViewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
