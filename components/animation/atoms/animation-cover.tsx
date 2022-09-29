import styled from '@emotion/styled';

interface AnimationCoverProps {
  cover: string;
}

const AnimationCover = ({ cover }: AnimationCoverProps) => {
  return <StyledanimationCover src={cover} />;
};

const StyledanimationCover = styled.img`
  width: 100%;
`;

export default AnimationCover;
