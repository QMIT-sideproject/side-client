import styled from '@emotion/styled';

interface AnimationInfoValueProps {
  value: string | number;
}

const AnimationInfoValue = ({ value }: AnimationInfoValueProps) => {
  return <StyledAnimationInfoValue>{value}</StyledAnimationInfoValue>;
};

const StyledAnimationInfoValue = styled.div`
  font-size: 16px;
  color: #777;
`;

export default AnimationInfoValue;
