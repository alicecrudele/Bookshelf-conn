import { Component } from '@angular/core';
import { Book } from '../../classes/book';
import { Observable } from 'rxjs';
import { GridConstantsConfig } from '../../interfaces/gridColumn.interface';
import { Router } from '@angular/router';
import { RepositoryService } from '../../services/repository.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.scss']
})
export class BookdetailComponent {
  public gridData: Book[];
  public originalData: Book[];
  public constantsListener: Observable<GridConstantsConfig>;


  constructor(
    private router: Router,
    private repositorySvc: RepositoryService,
    private commonSvc: CommonService
  ) {

    this.gridData = [];

  }

}
