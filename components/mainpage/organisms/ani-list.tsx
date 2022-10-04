import React from 'react';
import styled from '@emotion/styled';
import SkeletonAniListItem from '../molecules/skeleton-ani-list-item';

const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const AniList = () => {
  return (
    <AniListBox>
      {arr.map((key) => (
        <SkeletonAniListItem key={key} />
      ))}
    </AniListBox>
  );
};

const AniListBox = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: auto;
  place-items: center;
`;

export default AniList;
