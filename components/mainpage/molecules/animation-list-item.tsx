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
    <AnimationListItemContainer onClick={() => console.log(id)}>
      <Img img={img} width={'185px'} height={'265px'} />
      <Name name={name} />
    </AnimationListItemContainer>
  );
};

export default AnimationListItem;
