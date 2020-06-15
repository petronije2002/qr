import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  { MaterialModule } from './../app/material/material.module';
import { GridComponent } from './grid/grid.component'
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuComponent } from './menu/menu/menu.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { WishListViewComponent } from './wish-list-view/wish-list-view.component';


@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    MenuComponent,
    ProductViewComponent,
    CartViewComponent,
    WishListViewComponent
  ],
  imports: [
    FlexLayoutModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
