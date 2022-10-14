import styled from '@emotion/styled';
import { SkeletonCommonStyle } from './styles';

const SkeletonImg = () => {
  return <SkeletonImgStyle />;
};

const SkeletonImgStyle = styled(SkeletonCommonStyle)`
  width: 170px;
  height: 250px;
  margin: 10px 0 5px 0;
`;

export default SkeletonImg;
