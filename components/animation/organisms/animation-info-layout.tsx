import styled from '@emotion/styled';
import AnimationInfo from '../molecules/animation-info';

const AnimationInfoLayout = () => {
  return (
    <StyledInfoLayout>
      <AnimationInfo />
      <AnimationInfo />
      <AnimationInfo />
      <AnimationInfo />
      <AnimationInfo />
    </StyledInfoLayout>
  );
};

const StyledInfoLayout = styled.section`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 30px 0;
  background-color: #acefff;
`;

export default AnimationInfoLayout;
