import styled from '@emotion/styled';

interface AnimationBannerProps {
  banner: string;
}

const AnimationBanner = ({ banner }: AnimationBannerProps) => {
  return <StyledAnimationBanner banner={banner} />;
};

const StyledAnimationBanner = styled.div<AnimationBannerProps>(({ banner }) => ({
  width: '100%',
  height: '400px',
  backgroundImage: `url(${banner})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50% 50%',
}));

export default AnimationBanner;
