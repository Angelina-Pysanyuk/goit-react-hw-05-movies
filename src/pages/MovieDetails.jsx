import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Route, Routes, useLocation, useParams } from 'react-router-dom';
import { requestMoviesById } from 'api_service/api';
import { BackLink } from 'components/BackLink/BackLink';
import MovieCard from 'components/MovieCard/MovieCard';

const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

const MovieDetails = () => {
  const { id: movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchMoviesById(movieId);
  }, [movieId]);

  const fetchMoviesById = async movieId => {
    try {
      const data = await requestMoviesById(movieId);
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <BackLink to={location?.state?.from ?? '/'}>⬅ Go back</BackLink>
      <MovieCard movie={movie} />

      <Suspense>
        <Routes>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default MovieDetails;
