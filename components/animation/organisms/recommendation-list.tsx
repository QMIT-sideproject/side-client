import styled from '@emotion/styled';
import SubTitle from '../atoms/subtitle';
import RecommendationItem from '../molecules/recommendation-item';
import { AnimationDetailType } from '../templates/detail-query';

interface Props {
  recommendations: Pick<AnimationDetailType, 'recommendations'>;
}

const RecommendationList = ({ recommendations }: Props) => {
  console.log(recommendations.recommendations.nodes);

  return (
    <RecommendationListContainer>
      <RecommendationTitle>Recommendations</RecommendationTitle>
      <RecommendationItemContainer>
        {recommendations.recommendations.nodes.map((recommendation) => {
          return <RecommendationItem key={recommendation.id} recommendation={recommendation} />;
        })}
      </RecommendationItemContainer>
    </RecommendationListContainer>
  );
};

const RecommendationListContainer = styled.section`
  padding-bottom: 30px;
`;

const RecommendationTitle = styled(SubTitle)`
  font-size: 20px;
  margin-bottom: 20px;
`;

const RecommendationItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  gap: 15px;
  justify-content: space-between;
`;

export default RecommendationList;
