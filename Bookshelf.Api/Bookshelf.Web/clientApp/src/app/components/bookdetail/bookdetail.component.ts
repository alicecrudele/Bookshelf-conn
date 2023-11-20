import { Component } from '@angular/core';
import { Book } from '../../classes/book';
import { Observable } from 'rxjs';
import { GridConstantsConfig } from '../../interfaces/gridColumn.interface';
import { Router } from '@angular/router';
import { RepositoryService } from '../../services/repository.service';
import { CommonService } from '../../services/common.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.scss']
})
export class BookdetailComponent {
  formGroup: FormGroup;

  public gridData: Book[];
  public originalData: Book[];
  public constantsListener: Observable<GridConstantsConfig>;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private repositorySvc: RepositoryService,
    private commonSvc: CommonService,

  ) {

    this.gridData = [];

  }

  public loadData(item: Book)
  {
    // caricare i dati del libro all'interno degli input come se fossero dei placeholder
  }



  setFormGroup(item: Book = undefined) {
    this.formGroup = this.fb.group({
      title: [{ value: item?.title, disabled: false }],
      author: [{ value: item?.author, disabled: false }],
      price: [{ value: item?.price, disabled: false }],
      genre: [{ value: item?.genre, disabled: false }],
      publish_Year: [{ value: item?.publish_Year, disabled: false }],
      publisher: [{ value: item?.publisher, disabled: false }],
      description: [{ value: item?.description, disabled: false }],
    });
  }

  save() {
    this.router.navigate(['/books']);

    // fare come nella create, cliccando salva mi aggiorna i dati nella tabella dei libri e nel db
  }
}
