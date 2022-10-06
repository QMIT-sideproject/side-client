import styled from '@emotion/styled';
import Image from '../atoms/image';
import { AnimationDetailType } from '../templates/detail-query';

const RelationItem = ({ relations }: Pick<AnimationDetailType, 'relations'>) => {
  return (
    <>
      {relations.edges.map((edge) => (
        <RelationItemContainer key={edge.node.id}>
          <Image imgUrl={edge.node.coverImage.large} alt="커버 이미지" />
          <RelationType>{edge.relationType}</RelationType>
        </RelationItemContainer>
      ))}
    </>
  );
};

const RelationItemContainer = styled.div`
  position: relative;
  width: 90px;
  height: 115px;
  max-height: 115px;
  cursor: pointer;
`;

const RelationType = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 10px 0;
  text-align: center;
  font-size: 12px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
`;

export default RelationItem;
