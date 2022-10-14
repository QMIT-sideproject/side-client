import SkeletonAniListItem from '../molecules/skeleton-list-item';
import { MainPageItemListContainer } from './styles';

const SkeletonList = () => {
  return (
    <MainPageItemListContainer>
      {new Array(25).fill(0).map((_value, index) => (
        <SkeletonAniListItem key={index} />
      ))}
    </MainPageItemListContainer>
  );
};

export default SkeletonList;
