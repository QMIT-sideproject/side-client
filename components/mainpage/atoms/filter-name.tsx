import React from 'react';
import styled from '@emotion/styled';

const FilterNameSpan = styled.span`
  color: #464646;
  font-size: 15px;
  display: block;
`;

interface Name {
  name: string;
}

const FilterName = (name: Name) => {
  return <FilterNameSpan>{name.name}</FilterNameSpan>;
};

export default FilterName;
