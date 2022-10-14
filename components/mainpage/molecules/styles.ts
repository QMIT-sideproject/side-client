import styled from '@emotion/styled';
import Link from 'next/link';

export const AnimationListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  position: relative;
  &:hover .popup {
    opacity: 1;
  }
`;

export const AnimationDetailLink = styled(Link)`
  cursor: pointer;
  width: 170px;
`;

export const SkeletonListItemContainer = styled.div`
  width: 170px;
`;

export const AnimationItemBox = styled.div`
  width: 170px;
  height: 310px;
  display: flex;
  flex-direction: column;
`;
