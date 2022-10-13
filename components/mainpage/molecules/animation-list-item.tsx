import AnimationPopup from 'components/common/animation-popup';
import Img from '../atoms/image';
import Name from '../atoms/name';
import { AnimationDetailLink, AnimationListItemContainer } from './styles';

interface Props {
  name: {
    english: string;
    native: string;
  };
  img: string;
  id: number;
  score: number;
  genre: string[];
}

const AnimationListItem = ({ name, img, id, score, genre }: Props) => {
  return (
    <AnimationListItemContainer>
      <AnimationDetailLink href={{ pathname: '/detail/[id]', query: { id: id } }}>
        <a>
          <Img img={img} width={'185px'} height={'265px'} />
          <Name name={name.english || name.native} />
        </a>
      </AnimationDetailLink>
      <AnimationPopup position="200" title={name} score={score} genreList={genre}></AnimationPopup>
    </AnimationListItemContainer>
  );
};

export default AnimationListItem;
