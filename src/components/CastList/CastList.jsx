import React from 'react';
import { CastSection, ActorList, ActorInfo } from './CastList.styled';

const CastList = ({ castMembers }) => {
  return (
    <CastSection>
      <ActorList>
        {castMembers.map(castMember => {
          return (
            <li key={castMember.id}>
              {castMember.profile_path === null ? (
                <img
                  src="../../images/avatar_empty.png"
                  alt="avatar_empty"
                  width="150"
                />
              ) : (
                <img
                  src={`https://image.tmdb.org/t/p/original/${castMember.profile_path}`}
                  alt={castMember.character}
                  width="150"
                />
              )}
              <ActorInfo>
                <h3>{castMember.name}</h3>
                <p>
                  <i>{castMember.character}</i>
                </p>
              </ActorInfo>
            </li>
          );
        })}
      </ActorList>
    </CastSection>
  );
};

export default CastList;
