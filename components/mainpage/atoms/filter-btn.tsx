import React from 'react';
import styled from '@emotion/styled';

const FilterBtn = () => {
  return <Btn />;
};

const Btn = styled.select`
  width: 160px;
  height: 40px;
  background-color: rgb(251, 251, 251);
  border: none;
  margin-top: 5px;
  box-shadow: 0 14px 30px rgba(103, 132, 187, 0.1), 0 4px 4px rgba(103, 132, 187, 0.04);
`;

export default FilterBtn;
