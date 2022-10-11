import { useQuery } from '@apollo/client';
import { AnimationDetailData, AnimationDetailVars, GET_ANIMATION_DETAIL } from '@components/animation/templates/detail-query';

const useAnimationDetail = (id: string | string[] | undefined, version: number, page: number = 1, perPage: number = 6) => {
  const { data, loading } = useQuery<AnimationDetailData, AnimationDetailVars>(GET_ANIMATION_DETAIL, {
    variables: {
      mediaId: Number(id),
      version: version,
      page,
      perPage,
    },
  });

  return { data: data?.Media, loading };
};

export default useAnimationDetail;
