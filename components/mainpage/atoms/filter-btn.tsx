import React from 'react';
import styled from '@emotion/styled';

const Btn = styled.input`
  width: 160px;
  height: 40px;
  background-color: #e9e9e9;
  border: none;
  margin-top: 5px;
`;

const FilterBtn = () => {
  return <Btn type="select"></Btn>;
};

export default FilterBtn;
