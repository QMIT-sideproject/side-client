import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

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

export const FilterDefaultStyle = css`
  width: 160px;
  height: 40px;
  background-color: rgb(251, 251, 251);
  border: 1px solid black;
  margin-top: 5px;
`;
export const SearchInputStyle = css`
  width: 240px;
  padding: 0 20px;
  margin-top: 23px;
`;

export const SkeletonCommonStyle = styled.div`
  border-radius: 4px;
  margin: 10px 0 5px 0;
  animation: ${SkeletonKeyFrame} 2s infinite ease-in-out;
`;
