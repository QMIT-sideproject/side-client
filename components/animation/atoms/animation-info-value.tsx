import styled from '@emotion/styled';

interface AnimationInfoValueProps {
  value: string;
}

const AnimationInfoValue = ({ value }: AnimationInfoValueProps) => {
  return <StyledAnimationInfoValue>{value}</StyledAnimationInfoValue>;
};

const StyledAnimationInfoValue = styled.div`
  font-size: 14px;
  color: #777;
`;

export default AnimationInfoValue;
