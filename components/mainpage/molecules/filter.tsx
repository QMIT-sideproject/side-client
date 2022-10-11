import styled from '@emotion/styled';
import Name from '../atoms/name';
import Select from '../atoms/select';

interface Props {
  name: string;
  option: string[];
}

const Filter = ({ name, option }: Props) => {
  return (
    <FilterContainer>
      <Name name={name} />
      <Select options={option} filterName={name} />
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Filter;
