import styled from '@emotion/styled';
import SubTitle from '../atoms/subtitle';
import RecommendationItem from '../molecules/recommendation-item';
import { AnimationDetailType } from '../templates/detail-query';

interface Props {
  recommendations: Pick<AnimationDetailType, 'recommendations'>;
}

const RecommendationList = ({ recommendations }: Props) => {
  return (
    <RecommendationContainer>
      <RecommendationTitle>Recommendations</RecommendationTitle>
      <RecommendationItemWrapper>
        {recommendations.recommendations.nodes.map((recommendation) => {
          return <RecommendationItem key={recommendation.id} recommendation={recommendation} />;
        })}
      </RecommendationItemWrapper>
    </RecommendationContainer>
  );
};

const RecommendationContainer = styled.section`
  padding: 30px 0;
`;

const RecommendationTitle = styled(SubTitle)`
  font-size: 20px;
  margin-bottom: 20px;
`;

const RecommendationItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  gap: 15px;
  justify-content: space-between;
`;

export default RecommendationList;
