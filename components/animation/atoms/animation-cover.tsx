import styled from '@emotion/styled';

interface Props {
  cover: string;
}

const AnimationCover = ({ cover }: Props) => {
  return <StyledanimationCover src={cover} />;
};

const StyledanimationCover = styled.img`
  width: 100%;
`;

export default AnimationCover;
