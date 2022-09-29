import React from 'react';
import FilterName from '../atoms/filter-name';
import FilterBtn from '../atoms/filter-btn';
import styled from '@emotion/styled';

interface FilterInfo {
  name: string;
}

const FilterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Filter = (filterInfo: FilterInfo) => {
  return (
    <FilterBox>
      <FilterName name={filterInfo.name} />
      <FilterBtn />
    </FilterBox>
  );
};

export default Filter;
