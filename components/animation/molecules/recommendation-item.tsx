import styled from '@emotion/styled';
import Link from 'next/link';
import Image from '../atoms/image';
import AnimationPopup from './animation-popup';

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
      averageScore: number;
      genres: string[];
    };
  };
}

const RecommendationItem = ({ recommendation }: Props) => {
  return (
    <RecommendationContainer>
      <Link href={`/animation/${recommendation.mediaRecommendation.id}`}>
        <a>
          <RecommendationCoverWrapper>
            <Image imgUrl={recommendation.mediaRecommendation.coverImage.large} alt="recommendation-cover" />
          </RecommendationCoverWrapper>
          <RecommendationTitle>{recommendation.mediaRecommendation.title.english}</RecommendationTitle>
        </a>
      </Link>
      <AnimationPopup
        position="160"
        title={recommendation.mediaRecommendation.title.english}
        score={recommendation.mediaRecommendation.averageScore}
        genreList={recommendation.mediaRecommendation.genres}
      />
    </RecommendationContainer>
  );
};

const RecommendationContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  position: relative;
  &:hover .popup {
    opacity: 1;
  }
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
