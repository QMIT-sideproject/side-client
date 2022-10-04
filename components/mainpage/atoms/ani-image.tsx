import styled from '@emotion/styled';

const AniImg = () => {
  return <AniImgWrap src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21-tXMN3Y20PIL9.jpg" />;
};

const AniImgWrap = styled.img`
  width: 185px;
  height: 265px;
  display: block;
  border-radius: 4px;
  margin: 10px 0 5px 0;
`;

export default AniImg;
