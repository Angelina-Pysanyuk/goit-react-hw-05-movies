import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestMoviesCredits } from 'api_service/api';
import CastList from 'components/CastList/CastList';

const Cast = () => {
  const { id: movieId } = useParams();

  const [castMembers, setCastMembers] = useState([]);

  useEffect(() => {
    fetchMoviesCredits(movieId);
  }, [movieId]);

  const fetchMoviesCredits = async movieId => {
    try {
      const { cast } = await requestMoviesCredits(movieId);
      setCastMembers(cast);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {castMembers.length > 0 ? (
        <CastList castMembers={castMembers} />
      ) : (
        <p>Sorry, there is no cast for the movie.</p>
      )}
    </>
  );
};

export default Cast;
