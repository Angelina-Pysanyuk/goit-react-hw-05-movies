import React from 'react';
import { CastSection, ActorList, ActorInfo } from './CastList.styled';
import AvatarEmpty from '../../images/avatar-empty.png';

const CastList = ({ castMembers }) => {
  return (
    <CastSection>
      <ActorList>
        {castMembers.map(castMember => {
          return (
            <li key={castMember.id}>
              <img
                src={
                  castMember.profile_path
                    ? `https://image.tmdb.org/t/p/original/${castMember.profile_path}`
                    : AvatarEmpty
                }
                alt="castMember.name"
              />
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
