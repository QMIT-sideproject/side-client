import styled from '@emotion/styled';
import Link from 'next/link';
import Image from '../atoms/image';

interface Props {
  recommendation: {
    id: number;
    mediaRecommendation: {
      id: number;
      title: {
        english: string;
      };
      coverImage: {
        large: string;
      };
    };
  };
}

const RecommendationItem = ({ recommendation }: Props) => {
  return (
    <RecommendationContainer href={`/animation/${recommendation.mediaRecommendation.id}`}>
      <a>
        <RecommendationCoverWrapper>
          <Image imgUrl={recommendation.mediaRecommendation.coverImage.large} alt="recommendation-cover" />
        </RecommendationCoverWrapper>
        <RecommendationTitle>{recommendation.mediaRecommendation.title.english}</RecommendationTitle>
      </a>
    </RecommendationContainer>
  );
};

const RecommendationContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const RecommendationTitle = styled.h3`
  font-size: 16px;
  color: #777;
  margin-top: 5px;
`;

const RecommendationCoverWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`;

export default RecommendationItem;
