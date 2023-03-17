import React from 'react';
import { StyledSection } from './ReviewsList.styled';

const ReviewsList = ({ reviews }) => {
  return (
    <StyledSection>
      <ul>
        {reviews.length > 0 ? (
          reviews.map(review => {
            return (
              <li key={review.id}>
                <span className="author">{review.author}</span>
                <p className="content">{review.content}</p>
              </li>
            );
          })
        ) : (
          <p>Sorry, there are no reviews for the movie.</p>
        )}
      </ul>
    </StyledSection>
  );
};

export default ReviewsList;
