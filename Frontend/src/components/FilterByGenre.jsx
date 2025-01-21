import React, { useState, useEffect } from 'react';
import { getFilmGenres, getFilmByGenre } from '../../src/controller/apiService';

function FilterByGenre({ setFilms }) {
    const [genreSelected, setGenreSelected] = useState();
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchGenres = async () => {
            const data = await getFilmGenres();
            setGenres(data.genres);
        };
        fetchGenres();
    }, []);


    useEffect(() => {
        if (!genreSelected) return;

        const fetchGenreSelected = async () => {
            const data = await getFilmByGenre(genreSelected);
            setFilms(data.results);
        };
        fetchGenreSelected();

    }, [genreSelected]);


    return (
        <div>
            <select
                value={genreSelected}
                className="form-control"
                onChange={(e) => setGenreSelected(e.target.value)}
            >
                <option value="">Selecciona un género</option>
                {genres.map((genre) => (
                    <option key={genre.id} value={genre.id}>
                        {genre.name}
                    </option>
                ))}
            </select>
        </div>

    )
}

export default FilterByGenre;
