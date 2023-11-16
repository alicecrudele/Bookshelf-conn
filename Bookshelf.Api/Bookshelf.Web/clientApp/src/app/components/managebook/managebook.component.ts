import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Book } from '../../classes/book';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourceService } from '../../services/resource.service';
import { RepositoryService } from '../../services/repository.service';
import { CommonHelper } from '../../helpers/common.helper';

@Component({
  selector: 'managebook',
  templateUrl: './managebook.component.html',
  styleUrls: ['./managebook.component.scss']
})
export class ManagebookComponent  {

  public show: boolean = false;
  public buttonName: any = 'Show';

  formGroup: FormGroup | undefined;
  public book: Book | undefined;
  private bookId: number | undefined;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private repositorySvc: RepositoryService,
    private commonHelper: CommonHelper
  ) {
      this.route.params.subscribe(params => {
        if (params) {
          const paramid = params['id'];

          if (this.commonHelper.isEmptyOrSpaces(paramid)) {
            // create
            this.setFormGroup();
          } else {
            // update
            this.bookId = +paramid;
            this.loadData();
          }
        }
      });

  }

     private loadData() {
      //this.repositorySvc.getBook<BookDetail>(this.bookId).then(res => {
      //  this.book = res;
      //  this.setFormGroup(res);
      //}, error => {
      //  console.log(error);
      //});
     }

  setFormGroup(item: Book = undefined) {
    this.formGroup = this.fb.group({
      id: [{ value: item?.id, disabled: false }],
      title: [{ value: item?.title, disabled: false }],
      author: [{ value: item?.author, disabled: false }],
      price: [{ value: item?.price, disabled: false }],
      genre: [{ value: item?.genre, disabled: false }],
      publish_Year: [{ value: item?.publish_Year, disabled: false }],
      publisher: [{ value: item?.publisher, disabled: false }],
      description: [{ value: item?.description, disabled: false }],
    });
  }

  showForm() {
    this.show = !this.show;
    if (this.show) {
      this.buttonName = "Hide";
    } else {
      this.buttonName = "Show";
    }
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
    formData.append("dto", JSON.stringify(this.formGroup.value));

    this.repositorySvc.createBook<FormData>(formData).then(res => {
      this.router.navigate(['/books']);
    }, error => {
      console.log(error);
    });

  }

  public cancel(data: any) {
    this.router.navigate(['/books']);
  }

}
