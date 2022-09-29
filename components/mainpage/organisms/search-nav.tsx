import React from 'react';
import styled from '@emotion/styled';
import Filter from '../molecules/filter';
import SearchInput from '../atoms/search-input';

const SearchNav = styled.div`
  width: 80%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

const SearchNavBar = () => {
  return (
    <SearchNav>
      <SearchInput />
      <Filter name={'장르'} />
      <Filter name={'스트리밍 사이트'} />
      <Filter name={'방영 상태'} />
    </SearchNav>
  );
};

export default SearchNavBar;
