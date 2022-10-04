import React from 'react';
import styled from '@emotion/styled';

const SearchInput = () => {
  return <Input />;
};

const Input = styled.input`
  width: 240px;
  height: 40px;
  background-color: rgb(251, 251, 251);
  border: none;
  margin-top: 25px;
  box-shadow: 0 14px 30px rgba(103, 132, 187, 0.1), 0 4px 4px rgba(103, 132, 187, 0.04);
  padding: 0 20px;
  box-sizing: border-box;
`;

export default SearchInput;
