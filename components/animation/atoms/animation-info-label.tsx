import styled from '@emotion/styled';

interface Props {
  label: string;
}

const AnimationInfoLabel = ({ label }: Props) => {
  return <StyledAnimationInfoLabel>{label}</StyledAnimationInfoLabel>;
};

const StyledAnimationInfoLabel = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export default AnimationInfoLabel;
