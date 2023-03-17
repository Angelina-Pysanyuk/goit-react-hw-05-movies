import React from 'react';
import { StyledDiv, StyledSection } from './MovieCard.styled';
import { NavLink, useLocation } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const releaseYear = parseInt(movie.release_date);
  const location = useLocation();

  return (
    <>
      <StyledSection>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.overview}
          width="200"
        />
        <div>
          <h2>
            {movie.title} ({releaseYear})
          </h2>
          <p>User Score: {movie.vote_average}</p>
          <p>
            <b>Overview</b>: {movie.overview}
          </p>
          <p>
            <b>Genres:</b> {movie?.genres?.map(genre => genre.name).join(', ')}
          </p>
        </div>
      </StyledSection>
      <StyledDiv>
        <NavLink state={{ from: location?.state?.from }} to="cast">
          <p className="info">Cast</p>
        </NavLink>
        <NavLink state={{ from: location?.state?.from }} to="reviews">
          <p className="info">Reviews</p>
        </NavLink>
      </StyledDiv>
    </>
  );
};

export default MovieCard;
