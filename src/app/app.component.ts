import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'template';

  backButtonDisabled = true


  processAdd(){
    console.log('emitted')
  }

  constructor(private _snackBar : MatSnackBar , public router: Router){}



  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3500,
    });
  }

  ngOnInit(){

    this.backButtonDisabled = true

    if(this.router.url==="/cart-view'"){

      this.backButtonDisabled = false
    }
  }


}


