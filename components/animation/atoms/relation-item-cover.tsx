import styled from '@emotion/styled';

interface Props {
  cover: string;
}

const RelationItemCover = ({ cover }: Props) => {
  return <StyledRelationItemCover src={cover} />;
};

const StyledRelationItemCover = styled.img`
  width: 100%;
  height: 100%;
`;

export default RelationItemCover;
