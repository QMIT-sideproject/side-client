import SkeletonAniListItem from '../molecules/skeleton-list-item';
import { MainPageItemListContainer } from './styles';
import { perPage } from 'hooks/main-query';

const SkeletonList = () => {
  return (
    <MainPageItemListContainer>
      {new Array(perPage).fill(0).map((_value, index) => (
        <SkeletonAniListItem key={index} />
      ))}
    </MainPageItemListContainer>
  );
};

export default SkeletonList;
