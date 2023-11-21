import { Component } from '@angular/core';
import { Book } from '../../classes/book';
import { Observable } from 'rxjs';
import { GridConstantsConfig } from '../../interfaces/gridColumn.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { RepositoryService } from '../../services/repository.service';
import { CommonService } from '../../services/common.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonHelper } from '../../helpers/common.helper';

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
  private bookId?: number;
  private book?: Book;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private repositorySvc: RepositoryService,
    private commonHelper: CommonHelper,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe(params => {
      if (params) {
        const paramId = params['id'];

        if (this.commonHelper.isEmptyOrSpaces(paramId)) {
          // Create
          this.setFormGroup();
        } else {
          // Update
          this.bookId = +paramId;
          this.loadData();
        }
      }
    });
  }
  
  public loadData()
  {
    this.repositorySvc.getBook<Book>(this.bookId).then(res => {
      console.log('RES: ', res);
      this.book = res;
      this.setFormGroup(res);
    }, error => {
      console.log(error);
    });
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

  save(e: any) {
    if (this.formGroup.invalid) {
      //const errors = this.commonHelper.showErrors(
      //  this.formGroup, ['error.required'],
      //  'machine',
      //  (label) => {
      //    return this.resourceSvc.getLabel(label);
      //  });
      //errors.forEach(message => this.toastSvc.openToast(ToastType.Warning, message));
      return;
    }

    const formData = new FormData();
    formData.append("book", JSON.stringify(this.formGroup.value));


    if (this.book == null) {
      this.repositorySvc.createBook<FormData>(formData).then(res => {
      }, error => {
        console.log(error);
      });
    } else {
      this.repositorySvc.updateBook<FormData>(this.book.id, formData).then(res => {
      }, error => {
        console.log(error);
      });
    }

    this.router.navigate(['/books']);
  }
}
