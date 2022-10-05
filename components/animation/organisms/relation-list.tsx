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
  gap: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 90px);
  place-content: center;
`;

export default RelationList;
