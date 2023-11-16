using System;
using System.Collections.Generic;
using System.Text;

namespace Bookshelf.Api.Domain.Dto
{
    public class GenreListDto
    {
        public GenreListDto()
        {
            List = new List<BookDto>();
        }

        public IList<BookDto> List { get; set; }
    }
}
