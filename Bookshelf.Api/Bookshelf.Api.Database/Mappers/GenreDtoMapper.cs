using Bookshelf.Api.Domain.Dto;
using Bookshelf.Api.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bookshelf.Api.Database.Mappers
{
    public class GenreDtoMapper
    {

        //intanto book poi deve esere il genere
        public static BookDto MapToDto(Book genre)
        {
            return new BookDto
            {
                Id = genre.Id,
                Title = genre.Title,
                Author = genre.Author,
                Price = genre.Price,
                Publish_Year = genre.Publish_Year,
                Publisher = genre.Publisher,
                Description = genre.Description,
                Image_Attachment = genre.Image_Attachment
            };
        }


    }
}
