import styled from '@emotion/styled';

interface Name {
  name: string;
}

const FilterName = ({ name }: Name) => {
  return <FilterNameSpan>{name}</FilterNameSpan>;
};

const FilterNameSpan = styled.span`
  color: #686767;
  font-size: 15px;
  display: block;
`;

export default FilterName;
