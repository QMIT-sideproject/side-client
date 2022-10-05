import AniList from '../organisms/animation-list';
import SearchNavBar from '../organisms/search-bar';
import SkeletonAniList from '../organisms/skeleton-list';
import GetAnimationsHook from '../../../hooks/get-animations';

const MainLayout = () => {
  const { data, loading } = GetAnimationsHook();

  return (
    <>
      <SearchNavBar />
      {loading ? <SkeletonAniList /> : !data ? <div>error</div> : <AniList animations={data?.Page?.media} />}
    </>
  );
};

export default MainLayout;
