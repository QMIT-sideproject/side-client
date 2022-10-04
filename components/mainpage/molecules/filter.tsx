import FilterName from '../atoms/filter-name';
import FilterBtn from '../atoms/filter-btn';
import styled from '@emotion/styled';

interface FilterInfo {
  name: string;
}

const FilterBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Filter = ({ name }: FilterInfo) => {
  return (
    <FilterBox>
      <FilterName name={name} />
      <FilterBtn />
    </FilterBox>
  );
};

export default Filter;
