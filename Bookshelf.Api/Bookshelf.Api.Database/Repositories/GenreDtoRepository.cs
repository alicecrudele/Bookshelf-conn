using Bookshelf.Api.Database.Constants;
using Bookshelf.Api.Domain.Configurations;
using Bookshelf.Api.Domain.Dto;
using Bookshelf.Api.Domain.Entities;
using Bookshelf.Api.Domain.Helpers;
using Bookshelf.Domain.Helpers;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;

namespace Bookshelf.Api.Database.Repositories
{
    public class GenreDtoRepository : Repository<GenreListDto>
    {
        private readonly SqlConnectionFactory sqlConnectionFactory;

        /// <summary>
        /// Initializes a new instance of the <see cref="MachineDtoRepository"/> class.
        /// </summary>
        /// <param name="connectionConfig">The connection configuration.</param>
        public GenreDtoRepository(ConnectionConfig connectionConfig)
            : base(connectionConfig, DatabaseConst.DEFAULT_CONNECTION_NAME)
        {
            sqlConnectionFactory = new SqlConnectionFactory(connectionConfig[0]);
        }

        public GenreListDto GetFictionGenre()
        {
            string query;
            GenreListDto result = new GenreListDto();
            using (IDbConnection connection = sqlConnectionFactory.CreateConnection())
            {
                query = ResourceHelper.GetResourceAsText($"{DatabaseConst.RESOURCE_BASE_PATH}{DatabaseConst.BASE_PATH_GENRE}{DatabaseConst.GENRE_LIST_FICTION_DTO_SELECT}");
                result.List = (IList<BookDto>)connection.Query<GenreListDto>(query).ToList();

                connection.Close();
            }
            return result;
        }

        public GenreListDto GetMysteryGenre()
        {
            string query;
            GenreListDto result = new GenreListDto();
            using (IDbConnection connection = sqlConnectionFactory.CreateConnection())
            {
                query = ResourceHelper.GetResourceAsText($"{DatabaseConst.RESOURCE_BASE_PATH}{DatabaseConst.BASE_PATH_GENRE}{DatabaseConst.GENRE_LIST_MYSTERY_DTO_SELECT}");
                result.List = (IList<BookDto>)connection.Query<GenreListDto>(query).ToList();

                connection.Close();
            }
            return result;
        }

        public GenreListDto GetThrillerGenre()
        {
            string query;
            GenreListDto result = new GenreListDto();
            using (IDbConnection connection = sqlConnectionFactory.CreateConnection())
            {
                query = ResourceHelper.GetResourceAsText($"{DatabaseConst.RESOURCE_BASE_PATH}{DatabaseConst.BASE_PATH_GENRE}{DatabaseConst.GENRE_LIST_THRILLER_DTO_SELECT}");
                result.List = (IList<BookDto>)connection.Query<GenreListDto>(query).ToList();

                connection.Close();
            }
            return result;
        }

        public GenreListDto GetHorrorGenre()
        {
            string query;
            GenreListDto result = new GenreListDto();
            using (IDbConnection connection = sqlConnectionFactory.CreateConnection())
            {
                query = ResourceHelper.GetResourceAsText($"{DatabaseConst.RESOURCE_BASE_PATH}{DatabaseConst.BASE_PATH_GENRE}{DatabaseConst.GENRE_LIST_HORROR_DTO_SELECT}");
                result.List = (IList<BookDto>)connection.Query<GenreListDto>(query).ToList();

                connection.Close();
            }
            return result;
        }

        public GenreListDto GetHistoricalGenre()
        {
            string query;
            GenreListDto result = new GenreListDto();
            using (IDbConnection connection = sqlConnectionFactory.CreateConnection())
            {
                query = ResourceHelper.GetResourceAsText($"{DatabaseConst.RESOURCE_BASE_PATH}{DatabaseConst.BASE_PATH_GENRE}{DatabaseConst.GENRE_LIST_HISTORICAL_DTO_SELECT}");
                result.List = (IList<BookDto>)connection.Query<GenreListDto>(query).ToList();

                connection.Close();
            }
            return result;
        }

        public GenreListDto GetRomanceGenre()
        {
            string query;
            GenreListDto result = new GenreListDto();
            using (IDbConnection connection = sqlConnectionFactory.CreateConnection())
            {
                query = ResourceHelper.GetResourceAsText($"{DatabaseConst.RESOURCE_BASE_PATH}{DatabaseConst.BASE_PATH_GENRE}{DatabaseConst.GENRE_LIST_ROMANCE_DTO_SELECT}");
                result.List = (IList<BookDto>)connection.Query<GenreListDto>(query).ToList();

                connection.Close();
            }
            return result;
        }

        public GenreListDto GetWesternGenre()
        {
            string query;
            GenreListDto result = new GenreListDto();
            using (IDbConnection connection = sqlConnectionFactory.CreateConnection())
            {
                query = ResourceHelper.GetResourceAsText($"{DatabaseConst.RESOURCE_BASE_PATH}{DatabaseConst.BASE_PATH_GENRE}{DatabaseConst.GENRE_LIST_WESTERN_DTO_SELECT}");
                result.List = (IList<BookDto>)connection.Query<GenreListDto>(query).ToList();

                connection.Close();
            }
            return result;
        }

        public GenreListDto GetScienceFictionGenre()
        {
            string query;
            GenreListDto result = new GenreListDto();
            using (IDbConnection connection = sqlConnectionFactory.CreateConnection())
            {
                query = ResourceHelper.GetResourceAsText($"{DatabaseConst.RESOURCE_BASE_PATH}{DatabaseConst.BASE_PATH_GENRE}{DatabaseConst.GENRE_LIST_SCIENCE_FICTION_DTO_SELECT}");
                result.List = (IList<BookDto>)connection.Query<GenreListDto>(query).ToList();

                connection.Close();
            }
            return result;
        }

        public GenreListDto GetFantasyGenre()
        {
            string query;
            GenreListDto result = new GenreListDto();
            using (IDbConnection connection = sqlConnectionFactory.CreateConnection())
            {
                query = ResourceHelper.GetResourceAsText($"{DatabaseConst.RESOURCE_BASE_PATH}{DatabaseConst.BASE_PATH_GENRE}{DatabaseConst.GENRE_LIST_FANTASY_DTO_SELECT}");
                result.List = (IList<BookDto>)connection.Query<GenreListDto>(query).ToList();

                connection.Close();
            }
            return result;
        }

        public GenreListDto GetPoetryGenre()
        {
            string query;
            GenreListDto result = new GenreListDto();
            using (IDbConnection connection = sqlConnectionFactory.CreateConnection())
            {
                query = ResourceHelper.GetResourceAsText($"{DatabaseConst.RESOURCE_BASE_PATH}{DatabaseConst.BASE_PATH_GENRE}{DatabaseConst.GENRE_LIST_POETRY_DTO_SELECT}");
                result.List = (IList<BookDto>)connection.Query<GenreListDto>(query).ToList();

                connection.Close();
            }
            return result;
        }

    }
}
