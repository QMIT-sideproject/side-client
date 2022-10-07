/** @jsxImportSource @emotion/react */

import { useRouter } from 'next/router';
import { useState } from 'react';
import { FilterDefaultStyle, SearchInputStyle } from './styles';

interface Props {
  type?: string;
}

const Input = ({ type = 'text' }: Props) => {
  const [inputText, setInputText] = useState('');
  const router = useRouter();

  const onChangeInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);

    if(!e.target.value){
      router.push(``);
    }else{
      router.push(`?search=${e.target.value}`);
    }
  };

  return <input type={type} value={inputText} onChange={onChangeInputText} css={[FilterDefaultStyle, SearchInputStyle]} />;
};

export default Input;