import styled from '@emotion/styled';

interface Props {
  children: string;
}

const PopupTitle = ({ children }: Props) => {
  return <Title>{children}</Title>;
};

const Title = styled.h3`
  font-size: 16px;
`;

export default PopupTitle;
