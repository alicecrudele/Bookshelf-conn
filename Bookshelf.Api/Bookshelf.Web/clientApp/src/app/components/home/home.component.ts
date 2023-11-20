import { Component } from '@angular/core';
import { Book } from '../../classes/book';
import { BookList } from '../../classes/book-list';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { SessionService } from '../../services/session.service';
import { ConstantHelper } from '../../helpers/constant.helper';
import { RepositoryService } from '../../services/repository.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public searchText: string;
  public gridData: Book[];
  public originalData: Book[];
  
  constructor(
    private router: Router,
    private commonSvc: CommonService,
    private sessionSvc: SessionService,
    private constantHelper: ConstantHelper,
    private repositorySvc: RepositoryService,) {
   
  }

  
  onChangeSearchText(newValue) {
    this.searchText = newValue;
    this.refreshSearchFilter();
  }


  public refreshSearchFilter() {
    //this.gridData = this.originalData.filter(
      //(request: BookList) =>
      //((this.getLaboratoryDescr(request.laboratoryTestingType) != null && this.getLaboratoryDescr(request.laboratoryTestingType).toUpperCase().includes(this.searchText.toUpperCase()))
      //  || (request.name != null && request.name.toUpperCase().includes(this.searchText.toUpperCase()))
      //  || (request.familyName != null && request.familyName.toUpperCase().includes(this.searchText.toUpperCase()))
      //  || (request.laboratoryName != null && request.laboratoryName.toUpperCase().includes(this.searchText.toUpperCase()))
      //  || (request.manufacturer != null && request.manufacturer.toUpperCase().includes(this.searchText.toUpperCase()))
      //  || (request.model != null && request.model.toUpperCase().includes(this.searchText.toUpperCase()))
      //  || (request.frameNumber != null && request.frameNumber.toUpperCase().includes(this.searchText.toUpperCase()))
      //  || (request.assetNumber != null && request.assetNumber.toUpperCase().includes(this.searchText.toUpperCase()))
      //  || (request.notes != null && request.notes.toUpperCase().includes(this.searchText.toUpperCase()))
      //));

    //this.selectFirstPage();
  }

  public getLaboratoryDescr(laboratoryTestingType: number) {
    //if (laboratoryTestingType === LaboratoryTestingType.Chemical) {
    //  return this.labelChemicalDesc;
    //}
    //else if (laboratoryTestingType === LaboratoryTestingType.Mechanical) {
    //  return this.labelMechanicalDesc;
    //}
  }

  public selectFirstPage() {
    //this.grid.resetPager();
  }


}
