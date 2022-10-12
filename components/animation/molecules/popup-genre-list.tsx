import styled from '@emotion/styled';
import Text from '../atoms/text';

interface Props {
  genreList: string[];
}

const PopupGenreList = ({ genreList }: Props) => {
  return (
    <GenreList>
      {genreList.slice(0, 2).map((genre) => {
        return <Genre key={genre}>{genre}</Genre>;
      })}
    </GenreList>
  );
};

const GenreList = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const Genre = styled(Text)`
  color: #fff;
  padding: 3px 12px;
  background-color: rgba(54, 162, 235);
  border-radius: 20px;
  font-size: 14px;
`;

export default PopupGenreList;
