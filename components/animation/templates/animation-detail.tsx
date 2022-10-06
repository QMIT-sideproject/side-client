import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import useAnimationDetail from 'hooks/use-animation-detail';
import RelationList from '../organisms/relation-list';
import AnimationContent from '../organisms/animation-overview';
import AnimationInformation from '../organisms/animation-info';

const AnimationDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, loading } = useAnimationDetail(id, 2);

  if (loading) return <div>Loading...</div>;

  if (!data) return <div>Invalid Animation</div>;

  return (
    <>
      <AnimationBanner banner={data.bannerImage} />
      <AnimationDetailContainer>
        <AnimationContent cover={data.coverImage.large} title={data.title.english} description={data.description} />
        <AnimationInformation data={data} />
        <RelationList relations={data.relations} />
      </AnimationDetailContainer>
    </>
  );
};

const AnimationBanner = styled.div<{ banner: string }>(({ banner }) => ({
  width: '100%',
  height: '400px',
  backgroundImage: `url(${banner})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50% 50%',
}));

const AnimationDetailContainer = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export default AnimationDetail;
