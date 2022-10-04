import styled from '@emotion/styled';
import AnimationContentLayout from '../organisms/animation-content-layout';
import AnimationInfoLayout from '../organisms/animation-info-layout';

const AnimationDetail = () => {
  return (
    <StyledDetailLayout>
      <AnimationContentLayout />
      <AnimationInfoLayout />
    </StyledDetailLayout>
  );
};

const StyledDetailLayout = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export default AnimationDetail;
