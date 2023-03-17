import React from 'react';
import { useEffect, useState } from 'react';
import { requestTrendingMovies } from 'api_service/api';
import MovieList from 'components/MovieList/MovieList';
const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const { results } = await requestTrendingMovies();
        setTrendingMovies(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <>
      {trendingMovies.length > 0 ? (
        <MovieList moviesList={trendingMovies} title="Trending today" />
      ) : (
        <p>Something went wrong, try to reload the page.</p>
      )}
    </>
  );
};

export default Home;
