import { useQuery } from '@apollo/client';
import { GET_ANI_LIST, DataType, VariablesType } from '../components/mainpage/templates/main-query';
import { useRouter } from 'next/router';

export const useGetAnimations = (page: number) => {
  const router = useRouter();
  const query = router.query;
  const sort = query.sort === 'Trending' ? 'TRENDING_DESC' : 'FAVOURITES_DESC';

  const { data, loading, error } = useQuery<DataType, VariablesType>(GET_ANI_LIST, {
    variables: {
      page: page,
      perPage: 25,
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
