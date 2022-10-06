import SkeletonImg from '../atoms/skeleton-image';
import SkeletonName from '../atoms/skeleton-name';
import { AnimationListItemContainer } from './styles';

const SkeletonListItem = () => {
  return (
    <AnimationListItemContainer skeleton>
      <SkeletonImg />
      <SkeletonName />
    </AnimationListItemContainer>
  );
};

export default SkeletonListItem;
