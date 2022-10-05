import styled from '@emotion/styled';
import AnimationCover from '../atoms/animation-cover';
import AnimationContent from '../molecules/animation-content';

interface Props {
  cover: string;
  title: string;
  description: string;
}

const AnimationContentLayout = ({ cover, title, description }: Props) => {
  return (
    <StyledContentLayout>
      <AnimationCoverWrapper>
        <AnimationCover cover={cover} />
      </AnimationCoverWrapper>
      <AnimationContent title={title} description={description} />
    </StyledContentLayout>
  );
};

const StyledContentLayout = styled.section`
  display: flex;
  gap: 30px;
  padding: 30px 0;
`;

const AnimationCoverWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
`;

export default AnimationContentLayout;
