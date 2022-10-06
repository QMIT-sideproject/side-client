/** @jsxImportSource @emotion/react */

import { FilterDefaultStyle, SearchInputStyle } from './styles';

interface Props {
  type?: string;
}

const Input = ({ type = 'text' }: Props) => {
  return <input type={type} css={[FilterDefaultStyle, SearchInputStyle]} />;
};

export default Input;
