import { Component, OnInit, Input } from '@angular/core';
import { CartOperatorService} from './../services/cart-operator.service'
import { Element} from './../Models/models'


export interface Liked{
  id: number,

}




@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {

  @Input() element? : Element[]

  elements: Element[]

  constructor(private cart: CartOperatorService) { }


  ngOnInit(): void {
    this.elements  =
     [
      {
      id : 0,
      title: "Titlefsfd fdssfsdf",
      price: 30,
      link: "https://picsum.photos/600"
      },
      {
        id : 1,
        title: "Title1",
        price: 30,
        link: "https://picsum.photos/700"
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

  }


  onAddToCart(el_){
    this.cart.addToCart(el_)
  }

  onAddToWished(el_){

    this.cart.addToWishes(el_)

  }

}
