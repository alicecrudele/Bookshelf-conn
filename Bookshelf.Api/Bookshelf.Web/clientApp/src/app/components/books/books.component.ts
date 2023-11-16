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


    //Action buttons declarations
    //this.actions = [
    //  new ViewButtonAction(this.viewRequestButtonClick, this)
    //];



    this.reloadData();
  }



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

}
