import AniListItem from '../molecules/animation-list-item';
import { AniType } from '../../../hooks/main-query';
import { MainPageItemListContainer } from './styles';

interface Props {
  animations: AniType[];
}

const AnimationList = ({ animations }: Props) => {
  return (
    <MainPageItemListContainer>
      {animations.map((info) => (
        <AniListItem key={info.id} name={info.title} img={info.coverImage.large} id={info.id} score={info.averageScore} genre={info.genres} />
      ))}
    </MainPageItemListContainer>
  );
};

export default AnimationList;
