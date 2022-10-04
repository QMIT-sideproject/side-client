import React from 'react';
import styled from '@emotion/styled';
import Filter from '../molecules/filter';
import SearchInput from '../atoms/search-input';

const filterNameArray = ['Genre', 'Streaming On', 'Airing Stauts'];

const SearchNavBar = () => {
  return (
    <SearchNav>
      <SearchInput />
      {filterNameArray.map((name, key) => (
        <Filter name={name} key={key} />
      ))}
    </SearchNav>
  );
};

const SearchNav = styled.div`
  width: 70%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

export default SearchNavBar;
