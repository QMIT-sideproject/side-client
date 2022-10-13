import Img from '../atoms/image';
import Name from '../atoms/name';
import { AnimationListItemContainer } from './styles';

interface Props {
  name: string;
  img: string;
  id: number;
}

const AnimationListItem = ({ name, img, id }: Props) => {
  return (
    <AnimationListItemContainer href={{ pathname: '/detail/[id]', query: { id: id } }}>
      <a>
        <Img img={img} width={'185px'} height={'265px'} />
        <Name name={name} />
      </a>
    </AnimationListItemContainer>
  );
};

export default AnimationListItem;
