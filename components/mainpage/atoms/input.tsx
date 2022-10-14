/** @jsxImportSource @emotion/react */

import { useRouter } from 'next/router';
import { useState } from 'react';
import { FilterDefaultStyle, SearchInputStyle } from './styles';

interface Props {
  type?: string;
}

const Input = ({ type = 'text' }: Props) => {
  const router = useRouter();
  const [inputText, setInputText] = useState(router.query.search);

  const onChangeInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);

    if (!e.target.value) {
      router.query.search = [];
    } else {
      router.query.search = e.target.value;
    }

    router.push({ pathname: '/', query: { ...router.query } });
  };

  return <input type={type} value={inputText} onChange={onChangeInputText} css={[FilterDefaultStyle, SearchInputStyle]} />;
};

export default Input;
