import styled from '@emotion/styled';
import AnimationInfoLabel from '../atoms/animation-info-label';
import AnimationInfoValue from '../atoms/animation-info-value';

interface AnimationInfoProps {
  label: string;
  value: string | number;
}

const AnimationInfo = ({ label, value }: AnimationInfoProps) => {
  return (
    <InfoLayout>
      <AnimationInfoLabel label={label} />
      <AnimationInfoValue value={value} />
    </InfoLayout>
  );
};

const InfoLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default AnimationInfo;
