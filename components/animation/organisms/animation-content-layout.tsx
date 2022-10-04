import styled from '@emotion/styled';
import AnimationCover from '../atoms/animation-cover';
import AnimationContent from '../molecules/animation-content';

interface AnimationContentLayoutProps {
  cover: string;
  title: string;
  description: string;
}

const AnimationContentLayout = ({ cover, title, description }: AnimationContentLayoutProps) => {
  return (
    <StyledContentLayout>
      <AnimationCover cover={cover} />
      <AnimationContent title={title} description={description} />
    </StyledContentLayout>
  );
};

const StyledContentLayout = styled.section`
  display: flex;
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  padding: 30px 0;
`;

export default AnimationContentLayout;
