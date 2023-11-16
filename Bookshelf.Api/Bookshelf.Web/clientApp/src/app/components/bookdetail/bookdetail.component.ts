import { Component } from '@angular/core';
import { Book } from '../../classes/book';

@Component({
  selector: 'bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.scss']
})
export class BookdetailComponent {

  public book: Book;
}
