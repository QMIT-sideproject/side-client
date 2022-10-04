import styled from '@emotion/styled';

interface AniName {
  name: string;
}

const AniName = ({ name }: AniName) => {
  return <AniNameSpan>{name}</AniNameSpan>;
};

const AniNameSpan = styled.span`
  color: gray;
  font-size: 16px;
`;

export default AniName;
