import styled from '@emotion/styled';
import Filter from '../molecules/filter';
import Input from '../atoms/input';
import { useGetGenre } from '../../../hooks/get-animation-genre';
import { airingTypes, streamingSites } from '../templates/main-query';

const filterNames = ['genre', 'streamingon', 'airingstatus'];
const koreanNames = ['장르', '스트리밍 사이트', '방영 상태'];

const deepCopy = (data?: string[]) => {
  if (!data) return ['any'];

  const copyItem = Object.assign([], data);
  copyItem.unshift('any');

  return copyItem;
};

const Filters = () => {
  const { data } = useGetGenre();
  const filterOptions = [deepCopy(data?.GenreCollection), streamingSites, airingTypes];

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
  margin: 30px auto;
`;

export default Filters;
