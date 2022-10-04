import React from 'react';
import styled from '@emotion/styled';
import SkeletonAniListItem from '../molecules/skeleton-ani-list-item';

const arr = new Array(15);

const AniList = () => {
  return (
    <AniListBox>
      {arr.map((value, index) => (
        <SkeletonAniListItem key={index} />
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
