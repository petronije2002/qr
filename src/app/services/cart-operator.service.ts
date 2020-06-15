import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Element} from './../Models/models'


@Injectable({
  providedIn: 'root'
})


export class CartOperatorService implements OnInit{

  cart: Element[]=[]


  tableNumber: number = null
  sellerID: number= null

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

  wishListObserver: Observable<Element[]>  =  Observable.create(observer=>{
    setInterval(()=>{
      observer.next(this.wishes)
    },500)
  })


  removeFromWishes(el){

    console.log('this is what service received', el)

    console.log('current wishes', this.wishes)

    this.wishes = this.wishes.filter(obj=>obj.id !== el.id)

    console.log('After removing', this. wishes)
    // let temp_wishes = this.wishes.filter(x=>x.id != el.id)

    console.log("removed from wishes", this.wishes)

  }


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

  setHttpParamteres(tableNumber,sellerID){

    this.sellerID=sellerID
    this.tableNumber = tableNumber
  }


  getHttpParameters(){

    return this.sellerID,this.tableNumber
  }


  groupBy(id='id') {
    return this.cart.reduce((acc, obj) => {
       const key = obj[id];
       if (!acc[key]) {
          acc[key] = [];
       }
       // Add object to list for given key's value
       acc[key].push(obj);
       return acc;
    }, {});
  }

}
