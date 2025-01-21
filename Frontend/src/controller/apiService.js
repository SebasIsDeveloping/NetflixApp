import { BASE_URL, options } from '../apiConfig';

//para los gets
export const fetchData = async (endpoint) => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, options);
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error al obtenr datos:', error);
        throw error;
    }
};

//pelis
export const getTrendingMovies = async () => {
    return await fetchData('/trending/movie/day?language=en-US');
};

//peli unica
export const getFilmDetail = async (id) => {
    return await fetchData('/movie/' + id + '?language=en-US');
};

//filtro 1
export const getFilmGenres = async () => {
    return await fetchData('/genre/movie/list?');
};
export const getFilmByGenre = async (genreId) => {
    return await fetchData('/discover/movie?language=es-ES&with_genres=' + genreId);
};

//filtro 2
export const getFilmByYear = async (year) => {
    return await fetchData('/discover/movie?language=en-US&primary_release_year=' + year);
};

