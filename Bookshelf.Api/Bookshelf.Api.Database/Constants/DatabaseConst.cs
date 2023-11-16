
namespace Bookshelf.Api.Database.Constants
{

    /// <summary>
    /// 
    /// </summary>
    static class DatabaseConst
    {
		public const string DEFAULT_LANGUAGE = "en-US";

        public const string DEFAULT_CONNECTION_NAME = "BUSINESS";

        public const string RESOURCE_BASE_PATH = "Bookshelf.Api.Database.Resources.";
        
        //BOOK
        public const string BASE_PATH_BOOK = "Book.";
        public const string BOOK_LIST_DTO_SELECT = "BookListDto_SELECT.sql";
        public const string BOOK_DTO_SELECT_BY_ID = "BookDto_SELECT_BY_ID.sql";
        public const string BOOK_DTO_INSERT = "BookDto_INSERT.sql";
        public const string BOOK_DTO_UPDATE_BY_ID = "BookDto_UPDATE_BY_ID.sql";
        public const string BOOK_DTO_DELETE_BY_ID = "BookDto_DELETE_BY_ID.sql";

        //GENRE
        public const string BASE_PATH_GENRE = "Genre.";
        public const string GENRE_LIST_FICTION_DTO_SELECT = "GenreListDto_Fiction_SELECT.sql";
        public const string GENRE_LIST_MYSTERY_DTO_SELECT = "GenreListDto_Mystery_SELECT.sql";
        public const string GENRE_LIST_THRILLER_DTO_SELECT = "GenreListDto_Thriller_SELECT.sql";
        public const string GENRE_LIST_HORROR_DTO_SELECT = "GenreListDto_Horror_SELECT.sql";
        public const string GENRE_LIST_HISTORICAL_DTO_SELECT = "GenreListDto_Historical_SELECT.sql";
        public const string GENRE_LIST_ROMANCE_DTO_SELECT = "GenreListDto_Romance_SELECT.sql";
        public const string GENRE_LIST_WESTERN_DTO_SELECT = "GenreListDto_Western_SELECT.sql";
        public const string GENRE_LIST_SCIENCE_FICTION_DTO_SELECT = "GenreListDto_ScienceFiction_SELECT.sql";
        public const string GENRE_LIST_FANTASY_DTO_SELECT = "GenreListDto_Fantasy_SELECT.sql";
        public const string GENRE_LIST_POETRY_DTO_SELECT = "GenreListDto_Poetry_SELECT.sql";
    }

}
