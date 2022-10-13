import styled from '@emotion/styled';
import Image from '../atoms/image';
import AnimationContent from '../molecules/animation-content';

interface Props {
  cover: string;
  title: {
    english: string;
    native: string;
  };
  description: string;
}

const AnimationOverview = ({ cover, title, description }: Props) => {
  return (
    <AnimationOverviewContainer>
      <AnimationCoverWrapper>
        <Image imgUrl={cover} alt="커버 이미지" />
      </AnimationCoverWrapper>
      <AnimationContent title={title} description={description} />
    </AnimationOverviewContainer>
  );
};

const AnimationOverviewContainer = styled.section`
  display: flex;
  gap: 30px;
  padding: 30px 0;
`;

const AnimationCoverWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
`;

export default AnimationOverview;
