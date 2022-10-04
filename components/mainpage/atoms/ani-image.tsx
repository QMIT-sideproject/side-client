import styled from '@emotion/styled';

interface AniImg {
  img: string;
}

const AniImg = ({ img }: AniImg) => {
  return <AniImgWrap src={img} />;
};

const AniImgWrap = styled.img`
  width: 185px;
  height: 265px;
  display: block;
  border-radius: 4px;
  margin: 10px 0 5px 0;
`;

export default AniImg;
