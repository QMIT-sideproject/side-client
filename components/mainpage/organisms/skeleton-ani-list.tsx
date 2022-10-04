import styled from '@emotion/styled';
import SkeletonAniListItem from '../molecules/skeleton-ani-list-item';

const firstSkeletonOutput = new Array(20).fill(0);

const SkeletonAniList = () => {
  return (
    <SkeletonListContainer>
      {firstSkeletonOutput.map((_value, index) => (
        <SkeletonAniListItem key={index} />
      ))}
    </SkeletonListContainer>
  );
};

const SkeletonListContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: auto;
  place-items: center;
`;

export default SkeletonAniList;
