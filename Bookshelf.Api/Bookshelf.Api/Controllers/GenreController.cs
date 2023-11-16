using Bookshelf.Api.Domain.Dto;
using Bookshelf.Api.Domain.Enums;
using Bookshelf.Api.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Bookshelf.Api.Controllers
{
    /// <summary>
    ///     Controller per i generi
    /// </summary>
    /// <seealso cref="Controller" />

    [Route("api/[controller]")]
    public class GenreController : Controller
    {
        private IGenreDtoService _genreDtoService;
        public GenreController(IGenreDtoService genreDtoService)
        {
            _genreDtoService = genreDtoService;
        }

        /// <summary>
        ///     Chiamata per ottenere la lista dei libri
        /// </summary>

        [HttpGet("[action]/{genre}")]
        public GenreListDto GetFictionGenre([FromRoute] long id, [FromQuery] GenreType genreType)
        {
            return _genreDtoService.Get(id, genreType);
        }

        [HttpGet("[action]/{genre}")]
        public GenreListDto GetMysteryGenre([FromRoute] long id, [FromQuery] GenreType genreType)
        {
            return _genreDtoService.Get(id, genreType);
        }

        [HttpGet("[action]/{genre}")]
        public GenreListDto GetThrillerGenre([FromRoute] long id, [FromQuery] GenreType genreType)
        {
            return _genreDtoService.Get(id, genreType);
        }

        [HttpGet("[action]/{genre}")]
        public GenreListDto GetHorrorGenre([FromRoute] long id, [FromQuery] GenreType genreType)
        {
            return _genreDtoService.Get(id, genreType);
        }

        [HttpGet("[action]/{genre}")]
        public GenreListDto GetHistoricalGenre([FromRoute] long id, [FromQuery] GenreType genreType)
        {
            return _genreDtoService.Get(id, genreType);
        }

        [HttpGet("[action]/{genre}")]
        public GenreListDto GetRomanceGenre([FromRoute] long id, [FromQuery] GenreType genreType)
        {
            return _genreDtoService.Get(id, genreType);
        }

        [HttpGet("[action]/{genre}")]
        public GenreListDto GetWesternGenre([FromRoute] long id, [FromQuery] GenreType genreType)
        {
            return _genreDtoService.Get(id, genreType);
        }

        [HttpGet("[action]/{genre}")]
        public GenreListDto GetScienceFictionGenre([FromRoute] long id, [FromQuery] GenreType genreType)
        {
            return _genreDtoService.Get(id, genreType);
        }

        [HttpGet("[action]/{genre}")]
        public GenreListDto GetFantasyGenre([FromRoute] long id, [FromQuery] GenreType genreType)
        {
            return _genreDtoService.Get(id, genreType);
        }

        [HttpGet("[action]/{genre}")]
        public GenreListDto GetPoetryGenre([FromRoute] long id, [FromQuery] GenreType genreType)
        {
            return _genreDtoService.Get(id, genreType);
        }

        
    }
}
