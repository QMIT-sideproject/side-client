import styled from '@emotion/styled';
import Name from '../atoms/name';
import Select from '../atoms/select';

interface Props {
  name: string;
  option: string[];
  korean: string;
}

const Filter = ({ name, option, korean }: Props) => {
  return (
    <FilterContainer>
      <Name name={korean} />
      <Select options={option} filterName={name} />
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Filter;
