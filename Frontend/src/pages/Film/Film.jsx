import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Film.css'
import { getFilmDetail } from '../../controller/apiService';
function Film() {
    const [film, setFilm] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchFilm = async () => {
            const data = await getFilmDetail(id);
            setFilm(data);
        };

        fetchFilm();
    }, []);

    function OnSaveFilm(film) {
        // sin funcionalidad :(  
    }


    return (
        <div>
            <button class="btn btn-secondary" onClick={() => history.back()}>Volver</button>
            <h1 className="mb-5">{film.title}</h1>

            <div className="container mb-5">
                {film ?
                    (
                        <div>
                            <div className='card d-flex flex-row align-items-center gap-3'>
                                <img src={"https://image.tmdb.org/t/p/w200" + film.poster_path} alt={film.title} width="250px" />

                                <h3>{film.overview}</h3>
                            </div>

                            <div>
                                <button className='btn btn-primary mt-3' onClick={() => { OnSaveFilm(film) }}> Favorita</button>
                            </div>

                        </div>
                    ) : (
                        <p>Cargando película...</p>
                    )}
            </div>
        </div>

    )
}

export default Film;
