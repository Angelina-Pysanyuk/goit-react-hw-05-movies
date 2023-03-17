import React from 'react';
import { Link } from 'react-router-dom';
import { StyledSection } from './HomeComp.styled';

const HomeComp = ({ trendingMovies }) => {
  return (
    <StyledSection>
      <h2>Trending today</h2>
      <ul>
        {trendingMovies.map(trendingMovie => (
          <li key={trendingMovie.id}>
            <Link to={`/movies/${trendingMovie.id}`}>
              {trendingMovie.title}
            </Link>
          </li>
        ))}
      </ul>
    </StyledSection>
  );
};

export default HomeComp;
