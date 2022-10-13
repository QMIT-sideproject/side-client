import Img from '../atoms/image';
import Name from '../atoms/name';
import { AnimationDetailLink } from './styles';

interface Props {
  name: string;
  img: string;
  id: number;
}

const AnimationListItem = ({ name, img, id }: Props) => {
  return (
    <AnimationDetailLink href={{ pathname: '/detail/[id]', query: { id: id } }}>
      <a>
        <Img img={img} width={'185px'} height={'265px'} />
        <Name name={name} />
      </a>
    </AnimationDetailLink>
  );
};

export default AnimationListItem;
