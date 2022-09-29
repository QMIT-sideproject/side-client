import React from 'react';
import styled from '@emotion/styled';
import AniListItem from '../molecules/ani-list-item';

const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const AniListBox = styled.div`
  width: 80%;
  height: 80vh;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: auto;
`;

const AniList = () => {
  return (
    <AniListBox>
      {arr.map((key) => (
        <AniListItem key={key} />
      ))}
    </AniListBox>
  );
};

export default AniList;
