import { useQuery } from '@apollo/client';
import { GET_ANI_LIST, DataType, VariablesType, perPage } from './main-query';
import { useRouter } from 'next/router';

export const useGetAnimations = (page: number) => {
  const router = useRouter();
  const query = router.query;
  const sort = query.sort === 'Trending' ? 'TRENDING_DESC' : 'FAVOURITES_DESC';

  const { data, loading, error } = useQuery<DataType, VariablesType>(GET_ANI_LIST, {
    variables: {
      page: page,
      perPage: perPage,
      sort: sort,
      search: query.search,
      isAdult: false,
      status: query.airingstatus,
      genre: query.genre,
      licensedBy: query.streamingon,
      type: 'ANIME',
    },
  });

  return { data, loading, error };
};
