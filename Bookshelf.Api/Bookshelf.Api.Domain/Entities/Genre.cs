using Bookshelf.Api.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bookshelf.Api.Domain.Entities
{
    public class Genre
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public decimal Price { get; set; }

        // capire se aggiungere il genre come nel book
        public int Publish_Year { get; set; }
        public string Publisher { get; set; }
        public string Description { get; set; }
        public string Image_Attachment { get; set; }
    }
}
