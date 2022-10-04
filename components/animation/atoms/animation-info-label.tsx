import styled from '@emotion/styled';

interface AnimationInfoLabelProps {
  label: string;
}

const AnimationInfoLabel = ({ label }: AnimationInfoLabelProps) => {
  return <StyledAnimationInfoLabel>{label}</StyledAnimationInfoLabel>;
};

const StyledAnimationInfoLabel = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

export default AnimationInfoLabel;
