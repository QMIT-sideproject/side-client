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
  border: none;
  margin-top: 5px;
  box-shadow: 0 14px 30px rgba(103, 132, 187, 0.1), 0 4px 4px rgba(103, 132, 187, 0.04);
`;
export const SearchInputStyle = css`
  width: 240px;
  margin-top: 25px;
  padding: 0 20px;
`;

export const SkeletonCommonStyle = styled.div`
  border-radius: 4px;
  margin: 10px 0 5px 0;
  animation: ${SkeletonKeyFrame} 2s infinite ease-in-out;
`;
