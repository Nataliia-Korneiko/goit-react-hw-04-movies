import axios from 'axios';

const URL = 'https://api.themoviedb.org/3';
const KEY = 'bf011c312de769b1a5ea31ca61416e61';

// список самых популярных фильмов на сегодня для создания коллекции на главной странице:
export const getTrending = () =>
  axios.get(`${URL}/trending/movie/day?api_key=${KEY}`);

// поиск кинофильма по ключевому слову на странице фильмов:
export const searchMovies = (query = '') =>
  axios.get(
    `${URL}/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
  );

// запрос полной информации о фильме для страницы кинофильма:
export const getMovieDetails = id =>
  axios.get(`${URL}/movie/${id}?api_key=${KEY}&language=en-US`);

// запрос информации о актреском составе для страницы кинофильма:
export const getMovieCredits = id =>
  axios.get(`${URL}/movie/${id}/credits?api_key=${KEY}`);

// запрос обзоров для страницы кинофильма:
export const getMovieReviews = id =>
  axios.get(`${URL}/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`);
