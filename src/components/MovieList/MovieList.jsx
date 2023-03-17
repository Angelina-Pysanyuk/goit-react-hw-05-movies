import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ searchedMovies }) => {
  const location = useLocation();

  return (
    <section>
      <ul>
        {searchedMovies.map(searchedMovie => (
          <li key={searchedMovie.id}>
            <Link to={`/movies/${searchedMovie.id}`} state={{ from: location }}>
              {searchedMovie.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
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
