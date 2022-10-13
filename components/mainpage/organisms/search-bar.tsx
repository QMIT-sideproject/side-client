import styled from '@emotion/styled';
import Filter from '../molecules/filter';
import Input from '../atoms/input';
import { useGetGenre } from '../../../hooks/get-animation-genre';
import { airingTypes, streamingSites } from '../templates/main-query';

const filterNames = ['genre', 'streamingon', 'airingstatus'];

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
        <Filter name={name} key={name} option={filterOptions[index]} />
      ))}
    </FiltersContainer>
  );
};

const FiltersContainer = styled.div`
  width: 70%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

export default Filters;
