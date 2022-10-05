import styled from '@emotion/styled';

interface Props {
  title: string;
}

const AnimationTitle = ({ title }: Props) => {
  return (
    <>
      <StyledAnimationTitle>{title}</StyledAnimationTitle>
      <br />
    </>
  );
};

const StyledAnimationTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

export default AnimationTitle;
