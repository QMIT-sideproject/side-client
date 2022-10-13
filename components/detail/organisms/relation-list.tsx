import styled from '@emotion/styled';
import SubTitle from '../atoms/subtitle';
import RelationItem from '../molecules/relation-item';
import { AnimationDetailType } from '../templates/detail-query';

const RelationList = ({ relations }: Pick<AnimationDetailType, 'relations'>) => {
  return (
    <RelationListConatiner>
      <RelationTitle>Relations</RelationTitle>
      <RelationItemWrapper>
        {relations.edges.map((edge) => {
          return <RelationItem key={edge.node.id} node={edge.node} relationType={edge.relationType} />;
        })}
      </RelationItemWrapper>
    </RelationListConatiner>
  );
};

const RelationListConatiner = styled.section`
  padding: 30px 0;
`;

const RelationTitle = styled(SubTitle)`
  font-size: 20px;
  margin-bottom: 20px;
`;

const RelationItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  gap: 15px;
  justify-content: space-between;
`;

export default RelationList;
