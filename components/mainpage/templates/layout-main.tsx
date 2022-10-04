import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';

import AniList from '../organisms/ani-list';
import SearchNavBar from '../organisms/search-nav';
import SkeletonAniList from '../organisms/skeleton-ani-list';

const GET_TRENDING_ANI_LIST = gql`
  query ($page: Int, $perPage: Int, $sort: [MediaSort]) {
    Page(page: $page, perPage: $perPage) {
      media(sort: $sort) {
        title {
          english
        }
        coverImage {
          large
        }
        id
      }
    }
  }
`;

interface AniType {
  title: {
    english: string;
  };
  coverImage: {
    large: string;
  };
  id: number;
}

interface DataType {
  Page: {
    media: AniType[];
  };
}
interface VariablesType {
  page: number;
  perPage: number;
  sort: string;
}

const MainLayout = () => {
  const { loading, data } = useQuery<DataType, VariablesType>(GET_TRENDING_ANI_LIST, {
    variables: { page: 1, perPage: 20, sort: 'FAVOURITES_DESC' },
  });
  if (loading) {
    return (
      <>
        <SearchNavBar />
        <SkeletonAniList />
      </>
    );
  }

  if (data) {
    return (
      <>
        <SearchNavBar />
        <AniList ani={data?.Page?.media} />
      </>
    );
  }
};

export default MainLayout;
