import styled from '@emotion/styled';

interface AnimationTitleProps {
  title: string;
}

const AnimationTitle = ({ title }: AnimationTitleProps) => {
  return (
    <>
      <StyledAnimationTitle>{title}</StyledAnimationTitle>
      <br />
    </>
  );
};

const StyledAnimationTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

export default AnimationTitle;
