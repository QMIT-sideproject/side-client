import styled from '@emotion/styled';

interface AnimationDescriptionProps {
  description: string;
}

const AnimationDescription = ({ description }: AnimationDescriptionProps) => {
  return (
    <>
      {description.split('<br>').map((text, index) => {
        return (
          <StyledAnimationDescription key={index}>
            {text}
            <br />
          </StyledAnimationDescription>
        );
      })}
    </>
  );
};

const StyledAnimationDescription = styled.p`
  font-size: 15px;
  color: #777;
`;

export default AnimationDescription;
