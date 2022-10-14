import styled from '@emotion/styled';

interface Props {
  name: string;
}

const Name = ({ name }: Props) => {
  return <SpanStyle>{name}</SpanStyle>;
};

const SpanStyle = styled.div`
  font-size: 15px;
`;

export default Name;
