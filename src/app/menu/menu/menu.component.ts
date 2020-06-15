import { Component, OnInit, OnDestroy } from '@angular/core';
import {  CartOperatorService } from './../../services/cart-operator.service'
import { Subscription } from 'rxjs';
import { MatBadgePosition,MatBadgeSize } from '@angular/material/badge';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit , OnDestroy{

  nubmerOfCartItems : number

  positionBadge: MatBadgePosition
  sizeBadge: MatBadgeSize

  numberOfWishListItems: number

  cartSubscriber : Subscription

  wishListSubscription : Subscription

  constructor(private cartOperator: CartOperatorService, public router: Router) { }

  ngOnInit(): void {






    this.cartSubscriber =  this.cartOperator.cartObserver.subscribe(data=>{
      this.nubmerOfCartItems = data.length
    })


    this.wishListSubscription = this.cartOperator.wishListObserver.subscribe(data=>{
      this.numberOfWishListItems = data.length
    })



  }

  ngOnDestroy(){

    this.cartSubscriber.unsubscribe()

  }


}
