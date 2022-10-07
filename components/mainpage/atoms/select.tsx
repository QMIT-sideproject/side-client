/** @jsxImportSource @emotion/react */

import { FilterDefaultStyle } from './styles';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

interface Props {
  options: string[];
  filterName: string;
}

const Select = ({ options, filterName }: Props) => {
  const router = useRouter();
  const [filterValue, setFilterValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterValue(e.target.value);

    if (e.target.value === 'any') {
      router.query[filterName] = [];
    } else {
      router.query[filterName] = e.target.value;
    }

    router.push(router);
  };

  return (
    <select css={FilterDefaultStyle} onChange={onChange} value={filterValue}>
      {options.map((airingType) => (
        <option key={airingType}>{airingType}</option>
      ))}
    </select>
  );
};

export default Select;
