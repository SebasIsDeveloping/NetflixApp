using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Web.Http;
using Microsoft.AspNetCore.Mvc;
using Backend.Models;

namespace Backend.Controllers
{

    public class FilmController : ControllerBase
    {
        private string _connectionString = "Data Source=LAPTOP-HL4QB854\\SQLEXPRESS;Initial Catalog=dbbInsfera;Integrated Security=True;TrustServerCertificate=True";

        //GET api/lists
        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("user/lists/{userId}")]
        public ActionResult GetUserLists(int userId)
        {
            try
            {
                var lists = new List<string>();

                using (SqlConnection connection = new SqlConnection(_connectionString))
                {
                    connection.Open();
                    string query = "SELECT Name, Description FROM Lists WHERE UserId = @UserId";

                    using (SqlCommand command = new SqlCommand(query, connection))
                    {
                        command.Parameters.AddWithValue("@UserId", 1);
                        //command.Parameters.AddWithValue("@UserId", userId);

                        using (var reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                lists.Add(reader.GetString(0));
                            }
                        }
                    }
                }

                return Ok(lists); // Devuelve las listas en formato JSON
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error al obtener las listas: {ex.Message}");
            }
        }

        // POST guarda como fav
        [System.Web.Http.HttpPost]
        public ActionResult SaveMovie(Film film)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(_connectionString))
                {
                    connection.Open();

                    // NO USARIA LA QUERY EN STRING DESDE EL BACK, LA TENDRIA ALMACENADA EN UN STORED PROCEDURE, POR FALTA DE TIEMPO LA DEJO AQUI
                    string query = "INSERT INTO Films (Title, Overview, ReleaseDate, Poster) VALUES (@Title, @Overview, @ReleaseDate, @PosterPath)";

                    using (SqlCommand command = new SqlCommand(query, connection))
                    {
                        command.Parameters.AddWithValue("@Title", film.Title);
                        command.Parameters.AddWithValue("@Overview", film.Overview);
                        command.Parameters.AddWithValue("@ReleaseDate", film.ReleaseDate);
                        command.Parameters.AddWithValue("@PosterPath", film.Poster);

                        command.ExecuteNonQuery();
                    }
                }

                return Ok("Película guardada con éxito.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error al guardar la película: {ex.Message}");
            }

        }

    }
}
