import styled from '@emotion/styled';

import Name from '../atoms/name';
import Select from '../atoms/select';

interface Props {
  name: string;
}

const Filter = ({ name }: Props) => {
  return (
    <FilterContainer>
      <Name name={name} />
      <Select />
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Filter;
