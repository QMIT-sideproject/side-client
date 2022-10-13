/** @jsxImportSource @emotion/react */

import { FilterDefaultStyle } from './styles';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface Props {
  options: string[];
  filterName: string;
}

const Select = ({ options, filterName }: Props) => {
  const router = useRouter();
  const [filterValue, setFilterValue] = useState<string | string[] | undefined>('');

  useEffect(() => {
    if (filterName !== router.query[filterName]) {
      setFilterValue(router.query[filterName]);
    }
  }, [router.query, filterName]);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterValue(e.target.value);

    if (e.target.value === 'any') {
      router.query[filterName] = [];
    } else {
      router.query[filterName] = e.target.value;
    }
    router.push({ pathname: '/', query: { ...router.query } });
  };

  return (
    <select css={FilterDefaultStyle} onChange={onChange} value={filterValue}>
      {options.map((optionItem) => (
        <option key={optionItem}>{optionItem}</option>
      ))}
    </select>
  );
};

export default Select;
