import styled from '@emotion/styled';

import SkeletonImg from '../atoms/skeleton-image';
import SkeletonName from '../atoms/skeleton-name';

const SkeletonAniContainer = styled.div`
  cursor: pointer;
  width: 185px;
`;

const SkeletonAniListItem = () => {
  return (
    <SkeletonAniContainer>
      <SkeletonImg />
      <SkeletonName />
    </SkeletonAniContainer>
  );
};

export default SkeletonAniListItem;
