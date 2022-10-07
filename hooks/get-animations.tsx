import { useQuery } from '@apollo/client';
import { GET_TRENDING_ANI_LIST, DataType, VariablesType } from '../components/mainpage/templates/main-query';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
export const GetAnimationsHook = () => {
  const router = useRouter();
  const query = router.query;
  const [searchText, setSearchText] = useState<string | string[] | undefined>('');

  useEffect(()=>{
    if(!router.isReady) return;

    setSearchText(query.search);
  }, [query, router.isReady])

  const { data, loading, error } = useQuery<DataType, VariablesType>(GET_TRENDING_ANI_LIST, {
    variables: { page: 1, perPage: 20, sort: 'FAVOURITES_DESC', search: searchText, isAdult: false},
  });

  return { data, loading, error };
};