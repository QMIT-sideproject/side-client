import styled from '@emotion/styled';
import PopupRating from './popup-rating';
import PopupTitle from './popup-title';
import PopupGenreList from './popup-genre-list';

interface Props {
  position: string;
  title: {
    english: string;
    native: string;
  };
  score: number;
  genreList: string[];
}

const AnimationPopup = ({ position, ...props }: Props) => {
  const { title, score, genreList } = props;
  const animationTitle = title.english || title.native;

  return (
    <PopupContainer position={position} className="popup">
      <PopupTitle>{animationTitle}</PopupTitle>
      <PopupRating>{`${score}%`}</PopupRating>
      <PopupGenreList genreList={genreList} />
    </PopupContainer>
  );
};

const PopupContainer = styled.div<Pick<Props, 'position'>>`
  position: absolute;
  top: 0;
  left: ${({ position }) => position && `${position}px`};
  z-index: 100;
  opacity: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  pointer-events: none;
  transition: 0.15s ease-in-out;
  width: 220px;
`;

export default AnimationPopup;
