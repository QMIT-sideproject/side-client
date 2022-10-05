import styled from '@emotion/styled';
import parse from 'html-react-parser';

interface Props {
  description: string;
}

const AnimationDescription = ({ description }: Props) => {
  return <StyledAnimationDescription>{parse(description)}</StyledAnimationDescription>;
};

const StyledAnimationDescription = styled.div`
  font-size: 18px;
  color: #777;
`;

export default AnimationDescription;
