import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'
import FilterByGenre from '../../components/FilterByGenre';
import FilterByYear from '../../components/FilterByYear';
import { getTrendingMovies } from '../../controller/apiService';

function Home() {
  const [films, setFilms] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchFilms = async () => {
      const data = await getTrendingMovies();
      setFilms(data.results);
    };

    fetchFilms();
  }, []);

  function OnClickFilm(filmId) {
    navigate("/Film/" + filmId);
  }
  return (
    <div>
      <h1 className="mb-5">Películas en Tendencia</h1>
      <div className='d-flex gap-5 mb-5 justify-content-center'>
        <FilterByGenre setFilms={setFilms} />
        <FilterByYear setFilms={setFilms} />
      </div>

      < div className="container mb-5">
        {Array.isArray(films) && films.length > 0 ? (
          <div className="row">
            {films.map(film => (
              <div className="col mb-5" key={film.id}>
                <img src={"https://image.tmdb.org/t/p/w200" + film.poster_path} alt={film.title} onClick={() => OnClickFilm(film.id)} />
                <h3>{film.title}</h3>
              </div>
            ))}
          </div>
        ) : (
          <p>Cargando películas...</p>
        )}
      </div>
    </div >

  )
}

export default Home;
