import { useQuery } from '@apollo/client';
import { GET_ANI_GENRE, GenreType } from '../components/mainpage/templates/main-query';

export const useGetGenre = () => {
  const { data, loading, error } = useQuery<GenreType>(GET_ANI_GENRE);

  return { data, loading, error };
};
