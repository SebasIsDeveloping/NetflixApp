using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Http;
using Backend.Models;

namespace Backend.Controllers
{

    public class FilmController : ApiController
    {

        private AppDbContext db = new AppDbContext();

        // GET api/movies
        [HttpGet]
        [Route("api/movies")]
        public IHttpActionResult GetFilms()
        {
            var movies = db.Film.ToList();
            return Ok(movies);
        }

        // GET api/movies/5
        [HttpGet]
        [Route("api/movies/{id}")]
        public IHttpActionResult GetMovie(int id)
        {
            var movie = db.Film.Find(id);
            if (movie == null)
            {
                return NotFound();
            }
            return Ok(movie);
        }


        /// <summary>
        /// /////////////
        /// </summary>
        /// <returns></returns>
        public ActionResult Index()
        {
            //Conexion a BDD

            return View();
        }

        // GET api/values
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
