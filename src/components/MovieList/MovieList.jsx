import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledSection } from './MovieList.styled';

const MovieList = ({ moviesList, title }) => {
  const location = useLocation();

  return (
    <StyledSection>
      {title && <h2>{title}</h2>}
      <ul>
        {moviesList.map(searchedMovie => (
          <li key={searchedMovie.id}>
            <Link to={`/movies/${searchedMovie.id}`} state={{ from: location }}>
              {searchedMovie.title}
            </Link>
          </li>
        ))}
      </ul>
    </StyledSection>
  );
};

MovieList.propTypes = {
  searchedMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MovieList;
