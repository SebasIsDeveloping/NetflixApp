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

    }



    return (
        <div>
            <h1 className="mb-5">Película</h1>
            <div className="container mb-5">
                {film ?
                    (
                        <div className="row">
                            <img src={"https://image.tmdb.org/t/p/w200" + film.poster_path} alt={film.title} />
                            <h3>{film.title}</h3>
                            <button onClick={() => { OnSaveFilm(film) }}></button>
                        </div>
                    ) : (
                        <p>Cargando película...</p>
                    )}
            </div>
        </div>

    )
}

export default Film;
