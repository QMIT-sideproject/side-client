import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const SkeletonName = () => {
  return <SkeletonNameSpan />;
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

const SkeletonNameSpan = styled.span`
  font-size: 16px;
  display: block;
  width: 130px;
  animation: ${SkeletonKeyFrame} 2s infinite ease-in-out;
  height: 20px;
`;

export default SkeletonName;
