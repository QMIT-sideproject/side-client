import styled from '@emotion/styled';
import AniListItem from '../molecules/ani-list-item';

interface AniList {
  ani: AniType[];
}

interface AniType {
  title: {
    english: string;
  };
  coverImage: {
    large: string;
  };
  id: number;
}

const AniList = (ani: AniList) => {
  return (
    <AniListContainer>
      {ani.ani.map((info, index) => (
        <AniListItem key={index} name={info.title.english} img={info.coverImage.large} id={info.id} />
      ))}
    </AniListContainer>
  );
};

const AniListContainer = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: auto;
  place-items: center;
`;

export default AniList;
