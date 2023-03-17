import ReviewsList from 'components/Reviews/ReviewsList';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestMoviesReviews } from 'api_service/api';

const Reviews = () => {
  const { id: movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMoviesReviews(movieId);
  }, [movieId]);

  const fetchMoviesReviews = async movieId => {
    try {
      const { results } = await requestMoviesReviews(movieId);
      setReviews(results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ReviewsList reviews={reviews} />
    </>
  );
};

export default Reviews;
