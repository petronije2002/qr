import { Component, OnInit, Input } from '@angular/core';
import { CartOperatorService} from './../services/cart-operator.service'
import { Element} from './../Models/models'
import { Router, ActivatedRoute } from '@angular/router';


export interface Liked{
  id: number,

}






@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {

  disableControl: boolean[] =[]

  liked_color: string [] = []

  bought_color: string [] = []

  bought_qunatity: number[] = []

  elements: Element[]

  sellerID : number = null

  tableNumber: number = null

  constructor(private cart: CartOperatorService, public router: Router, public route: ActivatedRoute) {

    this.route.queryParams.subscribe(params => {
      this.sellerID = params.sellerID;
      this.tableNumber = params.tableNumber;
      this.cart.setHttpParamteres(this.tableNumber,this.sellerID)

  });
  }


  ngOnInit(): void {

    console.log("SellerID:",this.sellerID)
    console.log("tableNumber:",this.tableNumber)

    this.elements  =
     [
      {
      id : 0,
      title: "Titlefsfd fdssfsdf",
      price: 30,
      link: "https://picsum.photos/1202"
      },
      {
        id : 1,
        title: "Title1",
        price: 30,
        link: "https://picsum.photos/1201"
        },
        {
          id : 2,
          title: "Title2",
          price: 45,
          link: "https://picsum.photos/1200"
          },
          {
            id : 3,
            title: "Title3",
            price: 23,
            link: "https://picsum.photos/1200"
            },
            {
              id : 4,
              title: "Title4",
              price: 33,
              link: "https://picsum.photos/1204"
              }

    ]

    this.elements.forEach(el=>{
      this.disableControl.push(false);
      this.liked_color.push("null")
      this.bought_color.push("null")
      this.bought_qunatity.push(0)


    }
     )


     this.elements.forEach((el,ind)=>{
      if(this.cart.cart.filter(x=>x.id ===el.id)){
        this.bought_qunatity[ind] = this.cart.cart.filter(x=>x.id ===el.id).length
      }
     })

     let tmp_wish_keys =[]

     this.cart.wishes.forEach(el=>
      tmp_wish_keys.push(el.id))

      console.log("wishes", this.cart.wishes)


     this.elements.forEach((el,ind)=>{

      console.log("element is ", el, "id", el.id)


      console.log("wishes keys", tmp_wish_keys)

      if(tmp_wish_keys.indexOf(el.id)>-1){


        this.liked_color[ind]="warn"
      }else{
        this.liked_color[ind]="null"
      }
     })





    console.log(this.disableControl)

  }



  onAddToCart(el_,i){

    this.cart.addToCart(el_)



    console.log("GROUPED BY", this.groupBy()[el_.id].length)

    this.bought_qunatity[i] = this.groupBy()[el_.id].length

  }

  onAddToWished(el_,i){

    console.log('Show current element', el_)

    if(this.liked_color[i]==="null"){

      this.liked_color[i]="warn"

      this.cart.addToWishes(el_)

    }else{
      this.liked_color[i]="null"

      this.cart.removeFromWishes(el_)

    }
  }

  groupBy(id='id') {
    return this.cart.cart.reduce((acc, obj) => {
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
