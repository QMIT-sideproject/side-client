import styled from '@emotion/styled';

import Name from '../atoms/name';
import Select from '../atoms/select';
import { airingTypes } from '../templates/main-query';

interface Props {
  name: string;
}

const Filter = ({ name }: Props) => {
  return (
    <FilterContainer>
      <Name name={name} />
      <Select options={airingTypes} filterName={name} />
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Filter;
