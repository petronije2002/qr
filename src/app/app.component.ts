import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template';


  processAdd(){
    console.log('emitted')
  }

  constructor(private _snackBar : MatSnackBar , public router: Router){}



  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3500,
    });
  }
}


