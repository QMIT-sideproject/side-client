import styled from '@emotion/styled';
import Filter from '../molecules/filter';
import Input from '../atoms/input';
import { useGetGenre } from '../../../hooks/get-animation-genre';
import { airingTypes, streamingSites } from '../../../hooks/main-query';

const filterNames = ['genre', 'streamingon', 'airingstatus', 'sort'];
const koreanNames = ['장르', '스트리밍 사이트', '방영 상태', '정렬 상태'];
const sort = ['Favorite', 'Trending'];

const deepCopy = (data?: string[]) => {
  if (!data) return ['any'];

  const copyItem = Object.assign([], data);
  copyItem.unshift('any');

  return copyItem;
};

const Filters = () => {
  const { data } = useGetGenre();
  const filterOptions = [deepCopy(data?.GenreCollection), streamingSites, airingTypes, sort];

  return (
    <FiltersContainer>
      <Input />
      {filterNames.map((name, index) => (
        <Filter name={name} key={name} option={filterOptions[index]} korean={koreanNames[index]} />
      ))}
    </FiltersContainer>
  );
};

const FiltersContainer = styled.div`
  width: 70%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  margin: 150px auto 10px auto;
`;

export default Filters;
