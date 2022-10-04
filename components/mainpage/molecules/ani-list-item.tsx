import React from 'react';
import styled from '@emotion/styled';

import AniImg from '../atoms/ani-image';
import AniName from '../atoms/ani-name';

const AniBox = styled.div`
  cursor: pointer;
  width: 170px;
`;

const AniListItem = () => {
  return (
    <AniBox>
      <AniImg />
      <AniName />
    </AniBox>
  );
};

export default AniListItem;
