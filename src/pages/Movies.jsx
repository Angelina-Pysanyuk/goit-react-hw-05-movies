import MovieList from 'components/MovieList/MovieList';
import SearchForm from 'components/SearchForm/SearchForm';
import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { requestSearchedMovies } from 'api_service/api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchedMovies, setsearchedMovies] = useState([]);

  const handleFormSubmit = query => {
    setSearchParams({ query });
    setsearchedMovies([]);
  };

  useEffect(() => {
    const query = searchParams.get('query');

    if (!query) {
      return;
    }

    const fetchSearchedMovies = async () => {
      try {
        const { results } = await requestSearchedMovies(query);
        setsearchedMovies(results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSearchedMovies(query);
  }, [searchParams]);

  return (
    <>
      <SearchForm onSubmit={handleFormSubmit} />
      {searchedMovies.length > 0 && <MovieList moviesList={searchedMovies} />}
    </>
  );
};

export default Movies;
