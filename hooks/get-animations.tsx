import { useQuery } from '@apollo/client';
import { GET_ANI_LIST, DataType, VariablesType } from '../components/mainpage/templates/main-query';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const useGetAnimationsHook = () => {
  const router = useRouter();
  const query = router.query;
  const [searchText, setSearchText] = useState<string | string[] | undefined>('');
  const [airing, setAiring] = useState<string | string[] | undefined>('');

  useEffect(() => {
    if (!router.isReady) return;

    setSearchText(query.search);
    if (query.airingstatus === 'any') {
      setAiring(undefined);
    } else {
      console.log(query);
      setAiring(query.airingstatus);
    }
  }, [query, router.isReady]);

  const { data, loading, error } = useQuery<DataType, VariablesType>(GET_ANI_LIST, {
    variables: { page: 1, perPage: 20, sort: 'FAVOURITES_DESC', search: searchText, isAdult: false, status: airing },
  });

  return { data, loading, error };
};
