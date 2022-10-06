import styled from '@emotion/styled';
import { SkeletonCommonStyle } from './styles';

const SkeletonImg = () => {
  return <SkeletonImgStyle />;
};

const SkeletonImgStyle = styled(SkeletonCommonStyle)`
  width: 185px;
  height: 265px;
  margin: 10px 0 5px 0;
`;

export default SkeletonImg;
