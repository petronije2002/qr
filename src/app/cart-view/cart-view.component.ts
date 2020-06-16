import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartOperatorService } from '../services/cart-operator.service';
import { Element} from './../Models/models'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit, OnDestroy {

  cartList : Element[] =[]

  subscribeToCart: Subscription

  summedUp

  summedArray = []




  constructor(public srv: CartOperatorService) { }

  ngOnInit(): void {

   this.subscribeToCart = this.srv.cartObserver.subscribe(resp=>
      this.cartList = resp)

    this.summedArray = []

    this.summedUp = this.srv.groupBy()

    let tmp_keys = Object.keys(this.summedUp)

    tmp_keys.forEach(k=>{
      this.summedArray.push([this.summedUp[k],this.summedUp[k].length])
    })
    console.log(this.summedArray,"SummedArray")
  }

  ngOnDestroy(){
    this.subscribeToCart.unsubscribe()
  }


  addToCartBilling(el,i){

    this.srv.addToCart(el);

    this.summedArray[i][1] = this.summedArray[i][1] + 1

  }


  removeToCartBilling(el,i){

    this.srv.removeFromCart(el)

    this.summedArray[i][1] = this.summedArray[i][1] - 1


    if(this.summedArray[i][1]===0){

      this.summedArray.splice(i,1)
    }

  }

}
