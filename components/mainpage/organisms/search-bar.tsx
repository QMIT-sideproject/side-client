import styled from '@emotion/styled';
import Filter from '../molecules/filter';
import Input from '../atoms/input';

const filterNames = ['genre', 'streamingon', 'airingstatus'];

const Filters = () => {
  return (
    <FiltersContainer>
      <Input />
      {filterNames.map((name) => (
        <Filter name={name} key={name} />
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
