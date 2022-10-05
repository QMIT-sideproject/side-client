import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import AnimationContentLayout from '../organisms/animation-content-layout';
import AnimationInfoLayout from '../organisms/animation-info-layout';
import AnimationBanner from '../atoms/animation-banner';
import useAnimationDetail from 'hooks/use-animation-detail';
import RelationList from '../organisms/relation-list';

const AnimationDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, loading } = useAnimationDetail(id, 2);

  if (loading) return <div>로딩중...</div>;

  if (!data) return null;

  return (
    <>
      <AnimationBanner banner={data.bannerImage} />
      <StyledDetailLayout>
        <AnimationContentLayout cover={data.coverImage.large} title={data.title.english} description={data.description} />
        <AnimationInfoLayout data={data} />
        <RelationList relations={data.relations} />
      </StyledDetailLayout>
    </>
  );
};

const StyledDetailLayout = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export default AnimationDetail;
