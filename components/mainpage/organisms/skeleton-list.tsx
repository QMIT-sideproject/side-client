import SkeletonAniListItem from '../molecules/skeleton-list-item';
import { MainPageItemListContainer } from './styles';

const SkeletonList = () => {
  return (
    <MainPageItemListContainer>
      {new Array(20).fill(0).map((_value, index) => (
        <SkeletonAniListItem key={index} />
      ))}
    </MainPageItemListContainer>
  );
};

export default SkeletonList;
