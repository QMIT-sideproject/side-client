import { useQuery } from '@apollo/client';
import { AnimationDetailData, AnimationDetailVars, GET_ANIMATION_DETAIL } from '@components/animation/templates/detail-query';

const useAnimationDetail = (id: string | string[] | undefined, version: number) => {
  const { data, loading } = useQuery<AnimationDetailData, AnimationDetailVars>(GET_ANIMATION_DETAIL, {
    variables: {
      mediaId: Number(id),
      version: version,
    },
  });

  return { data: data?.Media, loading };
};

export default useAnimationDetail;
