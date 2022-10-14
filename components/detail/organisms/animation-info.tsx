import styled from '@emotion/styled';
import { stringToDateFormat } from 'utils/date';
import Link from '../atoms/link';
import Text from '../atoms/text';
import AdditionalInfo from '../molecules/additional-info';
import { AnimationDetailType } from '../templates/detail-query';

interface Props {
  data: AnimationDetailType;
}

const AnimationInfo = ({ data }: Props) => {
  const startDate = stringToDateFormat(data.startDate.year, data.startDate.month, data.startDate.day);

  const endDate = stringToDateFormat(data.endDate.year, data.endDate.month, data.endDate.day);

  return (
    <AnimationInfoContainer>
      <AdditionalInfo label="Status" value={data.status} />
      {data.episodes && <AdditionalInfo label="Episodes" value={data.episodes.toString()} />}
      {startDate && <AdditionalInfo label="Start Date" value={startDate} />}
      {endDate && <AdditionalInfo label="End Date" value={endDate} />}
      <AdditionalInfo label="Average Score" value={`${data.averageScore}%`} />
      <AnimationGenreContainer>
        <GenreLabel>Genres</GenreLabel>
        <AnimationGenreValueWrapper>
          {data.genres.map((genre) => (
            <GenreLink key={genre} href={`/?genre=${genre}`}>
              {genre}
            </GenreLink>
          ))}
        </AnimationGenreValueWrapper>
      </AnimationGenreContainer>
    </AnimationInfoContainer>
  );
};

const AnimationInfoContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  gap: 50px;
  padding: 30px 50px;
  background-color: #f7f7f7;
  border-radius: 5px;
`;

const AnimationGenreContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AnimationGenreValueWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

const GenreLabel = styled(Text)`
  font-weight: bold;
  color: #000;
`;

const GenreLink = styled(Link)`
  color: #777;
  transition: 0.2s;
  &:hover {
    color: #000;
    transform: scale(1.05);
  }
`;

export default AnimationInfo;
