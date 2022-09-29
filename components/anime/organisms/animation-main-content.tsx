import styled from '@emotion/styled';
import AnimationCover from '../atoms/animation-cover';
import AnimationContent from '../molecules/animation-content';

const AnimationMainContent = () => {
  return (
    <MainContentLayout>
      <AnimationCover cover="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-C6FPmWm59CyP.jpg" />
      <AnimationContent />
    </MainContentLayout>
  );
};

const MainContentLayout = styled.section`
  display: flex;
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  padding: 30px 0;
`;

export default AnimationMainContent;
