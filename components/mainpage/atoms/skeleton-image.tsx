import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const SkeletonImg = () => {
  return <SkeletonImgWrap />;
};

const SkeletonKeyFrame = keyframes`
  0% {
        background-color: rgba(165, 165, 165, 0.1);
    }

    50% {
        background-color: rgba(165, 165, 165, 0.3);
    }

    100% {
        background-color: rgba(165, 165, 165, 0.1);
    }
`;

const SkeletonImgWrap = styled.div`
  width: 185px;
  height: 265px;
  display: block;
  border-radius: 4px;
  margin: 10px 0 5px 0;
  animation: ${SkeletonKeyFrame} 2s infinite ease-in-out;
`;

export default SkeletonImg;
