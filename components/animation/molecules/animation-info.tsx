import styled from '@emotion/styled';
import AnimationInfoLabel from '../atoms/animation-info-label';
import AnimationInfoValue from '../atoms/animation-info-value';

const AnimationInfo = () => {
  return (
    <InfoLayout>
      <AnimationInfoLabel label="label" />
      <AnimationInfoValue value="value" />
    </InfoLayout>
  );
};

const InfoLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export default AnimationInfo;
