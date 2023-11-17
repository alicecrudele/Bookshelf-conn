import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RepositoryService } from '../../services/repository.service';
import { CommonHelper } from '../../helpers/common.helper';
import { User } from '../../classes/User';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  formGroup: FormGroup | undefined;

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
          //this.bookId = +paramid;
          //this.loadData();
        }
      }
    });

  }

  setFormGroup(item: User = undefined) {
    this.formGroup = this.fb.group({
      username: [{ value: item?.username, disabled: false }],
      password: [{ value: item?.password, disabled: false }],
    });
  }

  save() {
    this.router.navigate(['/books']);
  }
}
