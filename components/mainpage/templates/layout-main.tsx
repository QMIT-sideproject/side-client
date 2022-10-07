import AniList from '../organisms/animation-list';
import SearchNavBar from '../organisms/search-bar';
import SkeletonAniList from '../organisms/skeleton-list';
import { DataType } from './main-query';

interface Props {
  data?: DataType | undefined;
  loading?: boolean;
}

const MainLayout = ({data, loading} : Props) => {
  return (
    <>
      <SearchNavBar />
      {loading ? <SkeletonAniList /> : !data ? <div>error</div> : <AniList animations={data?.Page?.media} />}
    </>
  );
};

export default MainLayout;