import styled from '@emotion/styled';

interface Props {
  value: string | number;
}

const AnimationInfoValue = ({ value }: Props) => {
  return <StyledAnimationInfoValue>{value}</StyledAnimationInfoValue>;
};

const StyledAnimationInfoValue = styled.div`
  font-size: 16px;
  color: #777;
`;

export default AnimationInfoValue;
