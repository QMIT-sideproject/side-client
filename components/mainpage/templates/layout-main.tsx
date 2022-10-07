import { ApolloError } from '@apollo/client';
import AniList from '../organisms/animation-list';
import SearchNavBar from '../organisms/search-bar';
import SkeletonAniList from '../organisms/skeleton-list';
import { DataType } from './main-query';

interface Props {
  data?: DataType | undefined;
  loading?: boolean;
  error: ApolloError | undefined;
}

const MainLayout = ({data, loading, error} : Props) => {
  return (
    <>
      <SearchNavBar />
      {loading ? <SkeletonAniList /> : (error || !data) ? <div>error</div> : <AniList animations={data?.Page?.media} />}
    </>
  );
};

export default MainLayout;