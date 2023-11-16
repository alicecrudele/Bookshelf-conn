using Bookshelf.Api.Domain.Dto;
using Bookshelf.Api.Domain.Enums;

namespace Bookshelf.Api.Services.Interfaces
{
    public interface IGenreDtoService : IApplicationService
    {
        //tutti i generi hanno la stessa get
        GenreListDto Get(long id, GenreType genreType);

    }
}
