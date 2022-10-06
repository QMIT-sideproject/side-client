import styled from '@emotion/styled';
import { SkeletonCommonStyle } from './styles';

const SkeletonName = () => {
  return <SkeletonNameSpan />;
};

const SkeletonNameSpan = styled(SkeletonCommonStyle)`
  width: 150px;
  height: 25px;
`;

export default SkeletonName;
