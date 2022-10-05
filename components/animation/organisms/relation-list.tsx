import styled from '@emotion/styled';
import RelationItem from '../molecules/relation-item';
import { AnimationDetailType } from '../templates/detail-query';

const RelationList = ({ relations }: Pick<AnimationDetailType, 'relations'>) => {
  return (
    <RelationLayout>
      <RelationItem relations={relations} />
    </RelationLayout>
  );
};

const RelationLayout = styled.section`
  padding: 30px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  /* grid-template-columns: repeat(12, 1fr); */
`;

export default RelationList;
