import { Injectable } from '@angular/core';

@Injectable()
export class ConstantHelper {

  //Chiamate API

  //#region BOOK

  DATA_GET_BOOK_LIST = 'api/book/GetBookList';
  DATA_GET_BOOK = 'api/book/GetBook';
  DATA_CREATE_BOOK = 'api/book/CreateBook';
  DATA_UPDATE_BOOK = 'api/book/UpdateBook';
  DATA_DELETE_BOOK = 'api/book/DeleteBook';

  //#endregion


  //#region GENRE

  DATA_GET_FICTION_GENRE = 'api/genre/GetFictionGenre';
  DATA_GET_MISTERY_GENRE = 'api/genre/GetMisteryGenre';
  DATA_GET_THRILLER_GENRE = 'api/genre/GetThrillerGenre';
  DATA_GET_HORROR_GENRE = 'api/genre/GetHorrorGenre';
  DATA_GET_HISTORICAL_GENRE = 'api/genre/GetHistoricalGenre';
  DATA_GET_ROMANCE_GENRE = 'api/genre/GetRomanceGenre';
  DATA_GET_WESTERN_GENRE = 'api/genre/GetWesternGenre';
  DATA_GET_SCIENCE_FICTION_GENRE = 'api/genre/GetScienceFictionGenre';
  DATA_GET_FANTASY_GENRE = 'api/genre/GetFantasyGenre';
  DATA_GET_POETRY_GENRE = 'api/genre/GetPoetryGenre';

  //#endregion

  //#region LABEL
  DATA_GET_ALL_LABELS = 'api/common/GetLabels';
  //#endregion



}
