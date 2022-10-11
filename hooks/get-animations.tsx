import { useQuery } from '@apollo/client';
import { GET_ANI_LIST, DataType, VariablesType } from '../components/mainpage/templates/main-query';
import { useRouter } from 'next/router';

export const useGetAnimations = () => {
  const router = useRouter();
  const query = router.query;

  const { data, loading, error } = useQuery<DataType, VariablesType>(GET_ANI_LIST, {
    variables: { page: 1, perPage: 20, sort: 'FAVOURITES_DESC', search: query.search, isAdult: false, status: query.airing, genre: query.genre },
  });

  return { data, loading, error };
};
