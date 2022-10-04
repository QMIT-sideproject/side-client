import styled from '@emotion/styled';

interface Props {
  description: string;
}

const AnimationDescription = ({ description }: Props) => {
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
  font-size: 18px;
  color: #777;
`;

export default AnimationDescription;
