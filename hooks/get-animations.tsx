import { useQuery } from '@apollo/client';
import { GET_TRENDING_ANI_LIST, DataType, VariablesType } from '../components/mainpage/templates/main-query';

const GetAnimationsHook = () => {
  const { loading, data } = useQuery<DataType, VariablesType>(GET_TRENDING_ANI_LIST, {
    variables: { page: 1, perPage: 20, sort: 'FAVOURITES_DESC' },
  });

  return { data, loading };
};

export default GetAnimationsHook;
