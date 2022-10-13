import SkeletonImg from '../atoms/skeleton-image';
import SkeletonName from '../atoms/skeleton-name';
import { SkeletonListItemContainer } from './styles';

const SkeletonListItem = () => {
  return (
    <SkeletonListItemContainer>
      <SkeletonImg />
      <SkeletonName />
    </SkeletonListItemContainer>
  );
};

export default SkeletonListItem;
