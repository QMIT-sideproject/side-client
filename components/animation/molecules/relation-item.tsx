import styled from '@emotion/styled';
import RelationItemCover from '../atoms/relation-item-cover';
import RelationItemType from '../atoms/relation-item-type';
import { AnimationDetailType } from '../templates/detail-query';

const RelationItem = ({ relations }: Pick<AnimationDetailType, 'relations'>) => {
  return (
    <>
      {relations.edges.map((edge) => (
        <RelationItemWrapper key={edge.node.id}>
          <RelationItemCover cover={edge.node.coverImage.large} />
          <RelationItemType>{edge.relationType}</RelationItemType>
        </RelationItemWrapper>
      ))}
    </>
  );
};

const RelationItemWrapper = styled.div`
  position: relative;
  width: 90px;
  max-height: 115px;
  cursor: pointer;
`;

export default RelationItem;
