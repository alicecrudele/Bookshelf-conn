import { Component } from '@angular/core';
import { RepositoryService } from '../../services/repository.service';
import { Router } from '@angular/router';
import { Book } from '../../classes/book';
import { BookList } from '../../classes/book-list';
import { Observable } from 'rxjs';
import { CommonService } from '../../services/common.service';
import { SessionService } from '../../services/session.service';
import { GridColumn, GridConstantsConfig } from '../../interfaces/gridColumn.interface';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  public currentContext: BooksComponent;
  public columns: GridColumn[] = [];
  public gridData: Book[];
  public originalData: Book[];
  public constantsListener: Observable<GridConstantsConfig>;

  //public actions: BaseButtonAction[] = [];

  constructor(
    private router: Router,
    private repositorySvc: RepositoryService,
    private commonSvc: CommonService
  ) {

    this.currentContext = this;

    this.gridData = [];

    this.reloadData();
  }

  // Get the list of books
  private reloadData() {
    this.repositorySvc.getBookList<BookList>().then(
      result => {
        this.originalData = result.list;
        this.gridData = result.list;
        console.log("LIST", result.list)
      },
      error => {
        console.error(error)
      }
    );
  }

  // Create a new book -> in managebook component


  // Update a book -> in bookdetail component





  // Delete a single book from the list
  public delete(id: number) {
    this.repositorySvc.deleteBook(id, Book).then(
      result => {
        this.reloadData();
      },
      error => {
        console.error(error)
      }
    );
  }

}
