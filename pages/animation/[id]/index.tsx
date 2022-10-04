import AnimationDetail from '@components/anime/templates/animation-detail';
import AnimationBanner from 'components/animation/atoms/animation-banner';

const AnimationDetailPage = () => {
  return (
    <>
      <AnimationBanner banner="https://s4.anilist.co/file/anilistcdn/media/anime/banner/16498-8jpFCOcDmneX.jpg" />
      <AnimationDetail />
    </>
  );
};

export default AnimationDetailPage;
