import React from 'react';
import styled from '@emotion/styled';

import SkeletonImg from '../atoms/skeleton-image';
import SkeletonName from '../atoms/skeleton-name';

const SkeletonAniBox = styled.div`
  cursor: pointer;
  width: 185px;
`;

const SkeletonAniListItem = () => {
  return (
    <SkeletonAniBox>
      <SkeletonImg />
      <SkeletonName />
    </SkeletonAniBox>
  );
};

export default SkeletonAniListItem;
