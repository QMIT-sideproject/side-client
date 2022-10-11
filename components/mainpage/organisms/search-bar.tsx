import styled from '@emotion/styled';
import Filter from '../molecules/filter';
import Input from '../atoms/input';
import { useGetGenreHook } from '../../../hooks/get-animation-genre';
import { airingTypes } from '../templates/main-query';

const filterNames = ['genre', 'streamingon', 'airingstatus'];

const deepCopy = (data: string[]) => {
  const newObj = Object.assign([], data);
  newObj.unshift('any');

  return newObj;
};

const Filters = () => {
  const { data, loading, error } = useGetGenreHook();
  if (loading) {
    return <div>로딩중...</div>;
  } else if (!data || error) {
    return <div>오류가 발생하였습니다.</div>;
  }
  const arr = [deepCopy(data.GenreCollection), ['any'], airingTypes];
  return (
    <FiltersContainer>
      <Input />
      {filterNames.map((name, index) => (
        <Filter name={name} key={name} option={arr[index]} />
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
