import { Component } from '@angular/core';
import { Book } from '../../classes/book';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public filterList: Book[] = [];

  
  constructor() {
   
  }

  //search bar
  public filterResult() {

  }

}
