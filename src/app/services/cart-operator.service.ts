import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Element} from './../Models/models'


@Injectable({
  providedIn: 'root'
})


export class CartOperatorService implements OnInit{

  cart: Element[]=[]

  // public cartObserver: Observable<Element[]>

  public cartSubscription : Subscription

  wishes= []

  constructor() { }

  ngOnInit(){




  }

  cartObserver: Observable<Element[]>  =  Observable.create(observer=>{
    setInterval(()=>{
      observer.next(this.cart)
    },500)
  })


  get cqrts (){
    return this.cartObserver
  }


  addToCart(element){


    this.cart.push(element)





    console.log("This is the cart", this.cart)


  }

  addToWishes(element){
    this.wishes.push(element)
    console.log('Added to wished', this.wishes)
  }

  getCart(){
     return this.cart

  }

  removeFromCart(el_){

    this.cart = this.cart.filter((obj)=>{obj.id !== el_.id})
  }
}
