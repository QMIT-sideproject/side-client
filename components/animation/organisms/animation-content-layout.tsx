import styled from '@emotion/styled';
import AnimationCover from '../atoms/animation-cover';
import AnimationContent from '../molecules/animation-content';
import AnimationStatusLayout from './animation-status-layout';

const AnimationContentLayout = () => {
  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <StyledContentLayout>
        <AnimationCover cover="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-C6FPmWm59CyP.jpg" />
        <AnimationContent />
      </StyledContentLayout>
      <AnimationStatusLayout />
    </div>
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
