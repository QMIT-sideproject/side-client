import AniList from '../organisms/animation-list';
import SearchNavBar from '../organisms/search-bar';
import { AniType } from '../../../hooks/main-query';

interface Props {
  data: AniType[];
}

const MainLayout = ({ data }: Props) => {
  return (
    <>
      <SearchNavBar />
      <AniList animations={data} />
    </>
  );
};

export default MainLayout;
