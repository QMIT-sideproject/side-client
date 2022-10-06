import styled from '@emotion/styled';
import SubTitle from '../atoms/subtitle';
import RelationItem from '../molecules/relation-item';
import { AnimationDetailType } from '../templates/detail-query';

const RelationList = ({ relations }: Pick<AnimationDetailType, 'relations'>) => {
  return (
    <RelationListConatiner>
      <RelationTitle>Relations</RelationTitle>
      <RelationItemWrapper>
        <RelationItem relations={relations} />
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
  gap: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 90px);
  place-content: start;
`;

export default RelationList;
