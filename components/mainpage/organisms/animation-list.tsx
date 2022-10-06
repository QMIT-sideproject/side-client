import AniListItem from '../molecules/animation-list-item';
import { AniType } from '../templates/main-query';
import { MainPageItemListContainer } from './styles';

interface Props {
  animations: AniType[];
}

const AnimationList = ({ animations }: Props) => {
  return (
    <MainPageItemListContainer>
      {animations.map((info) => (
        <AniListItem key={info.id} name={info.title.english} img={info.coverImage.large} id={info.id} />
      ))}
    </MainPageItemListContainer>
  );
};

export default AnimationList;
