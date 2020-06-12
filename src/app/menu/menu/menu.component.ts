import { Component, OnInit, OnDestroy } from '@angular/core';
import {  CartOperatorService } from './../../services/cart-operator.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit , OnDestroy{

  nubmerOfCartItems : number

  cartSubscriber : Subscription

  constructor(private cartOperator: CartOperatorService) { }

  ngOnInit(): void {

    this.cartSubscriber =  this.cartOperator.cartObserver.subscribe(data=>{
      this.nubmerOfCartItems = data.length
    })
  }

  ngOnDestroy(){

    this.cartSubscriber.unsubscribe()

  }


}
