import axios from 'axios';

const API_KEY = '85016821a1bc8ff98f458419e9b647f9';

export const requestSearchedMovies = async query => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=1&include_adult=false`
  );

  return data;
};

export const requestTrendingMovies = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );

  return data;
};

export const requestMoviesById = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );

  return data;
};

export const requestMoviesCredits = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

  return data;
};

export const requestMoviesReviews = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  return data;
};
