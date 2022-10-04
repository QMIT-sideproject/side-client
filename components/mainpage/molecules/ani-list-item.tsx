import styled from '@emotion/styled';

import AniImg from '../atoms/ani-image';
import AniName from '../atoms/ani-name';

const AniBox = styled.div`
  cursor: pointer;
  width: 170px;
`;

interface AniInfo {
  name: string;
  img: string;
  id: number;
}

const AniListItem = (info: AniInfo) => {
  return (
    <AniBox onClick={() => console.log(info.id)}>
      <AniImg img={info.img} />
      <AniName name={info.name} />
    </AniBox>
  );
};

export default AniListItem;
