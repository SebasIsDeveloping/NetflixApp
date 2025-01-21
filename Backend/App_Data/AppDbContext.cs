using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Backend.Models;

namespace Backend
{
    public class AppDbContext : DbContext
    {
        public AppDbContext() : base("name=DefaultConnection") { }

        public DbSet<Film> Film { get; set; }
        public DbSet<List> List { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<ListFilm> ListFilm { get; set; }
    }
}
