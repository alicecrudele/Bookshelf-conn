import { Component } from '@angular/core';
import { Book } from '../../classes/book';
import { BookList } from '../../classes/book-list';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { SessionService } from '../../services/session.service';
import { ConstantHelper } from '../../helpers/constant.helper';
import { RepositoryService } from '../../services/repository.service';
import { GenresComponent } from '../genres/genres.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public searchText: string;
  public gridData: Book[];
  public originalData: Book[];
  public genreType = GenresComponent;

  public lblGenreFiction: "Fiction";
  public lblGenreMystery: "Mystery";
  public lblGenreThriller: "Thriller";
  public lblGenreHorror: "Horror";
  public lblGenreHistorical: "Historical";
  public lblGenreRomance: "Romance";
  public lblGenreWestern: "Western";
  public lblGenreScienceFiction: "Science Fiction";
  public lblGenreFantasy: "Fantasy";
  public lblGenrePoetry: "Poetry";

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
      //(request: BookList[]) =>
      //((this.getGenreType(request.genreType) != null && this.getGenreType(request.genreType).toUpperCase().includes(this.searchText.toUpperCase()))
      //  || (request.title != null && request.title.toUpperCase().includes(this.searchText.toUpperCase()))
      //  || (request.author != null && request.author.toUpperCase().includes(this.searchText.toUpperCase()))
      //  || (request.price != null && request.price.toUpperCase().includes(this.searchText.toUpperCase()))
      //  || (request.publish_Year != null && request.publish_Year.toUpperCase().includes(this.searchText.toUpperCase()))
      //  || (request.publisher != null && request.publisher.toUpperCase().includes(this.searchText.toUpperCase()))
      //  || (request.description != null && request.description.toUpperCase().includes(this.searchText.toUpperCase()))
      //));

    //this.selectFirstPage();
  }

  public getGenreType(genreType) {

    if (genreType === genreType.fiction) {
      return this.lblGenreFiction;
    }
    else if (genreType === genreType.mystery) {
      return this.lblGenreMystery;
    }
    else if (genreType === genreType.thriller) {
      return this.lblGenreThriller;
    }
    else if (genreType === genreType.horror) {
      return this.lblGenreHorror;
    }
    else if (genreType === genreType.historical) {
      return this.lblGenreHistorical;
    }
    else if (genreType === genreType.romance) {
      return this.lblGenreRomance;
    }
    else if (genreType === genreType.western) {
      return this.lblGenreWestern;
    }
    else if (genreType === genreType.science_fiction) {
      return this.lblGenreScienceFiction;
    }
    else if (genreType === genreType.fantasy) {
      return this.lblGenreFantasy;
    }
    else if (genreType === genreType.poetry) {
      return this.lblGenrePoetry;
    }
  }

  public selectFirstPage() {
    //this.grid.resetPager();
  }


}
