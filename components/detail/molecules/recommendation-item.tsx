import styled from '@emotion/styled';
import Link from '../atoms/link';
import Image from '../atoms/image';
import AnimationPopup from '../../common/animation-popup';

interface Props {
  recommendation: {
    id: number;
    mediaRecommendation?: {
      id: number;
      title: {
        english: string;
        native: string;
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
  const { mediaRecommendation } = recommendation;

  if (!mediaRecommendation) return null;

  const animationTitle = mediaRecommendation.title.english || mediaRecommendation.title.native;

  return (
    <RecommendationContainer>
      <Link href={`/detail/${mediaRecommendation.id}`}>
        <RecommendationCoverWrapper>
          <Image imgUrl={mediaRecommendation.coverImage.large} alt="recommendation-cover" />
        </RecommendationCoverWrapper>
        <RecommendationTitle>{animationTitle}</RecommendationTitle>
      </Link>
      <AnimationPopup position="160" title={mediaRecommendation.title} score={mediaRecommendation.averageScore} genreList={mediaRecommendation.genres} />
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
