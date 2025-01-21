using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Backend.Models
{
    public class ListFilm
    {
        public int Id { get; set; }
        public int FilmId { get; set; }
        public int ListId { get; set; }
        public DateTime DateAdded { get; set; }
    }
}