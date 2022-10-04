import styled from '@emotion/styled';

interface Props {
  banner: string;
}

const AnimationBanner = ({ banner }: Props) => {
  return <StyledAnimationBanner banner={banner} />;
};

const StyledAnimationBanner = styled.div<Props>(({ banner }) => ({
  width: '100%',
  height: '400px',
  backgroundImage: `url(${banner})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50% 50%',
}));

export default AnimationBanner;
