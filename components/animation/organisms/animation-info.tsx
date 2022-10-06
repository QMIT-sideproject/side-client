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
  const startDate = data.startDate.year ? stringToDateFormat(data.startDate.year, data.startDate.month, data.startDate.day) : null;

  const endDate = data.endDate.year ? stringToDateFormat(data.endDate.year, data.endDate.month, data.endDate.day) : null;

  return (
    <AnimationInfoContainer>
      <AdditionalInfo label="Status" value={data.status} />
      {data.episodes && <AdditionalInfo label="Episodes" value={data.episodes.toString()} />}
      {startDate && <AdditionalInfo label="Start Date" value={startDate} />}
      {endDate && <AdditionalInfo label="End Date" value={endDate} />}
      <AnimationGenreContainer>
        <GenreLabel>Genres</GenreLabel>
        <AnimationGenreValueWrapper>
          {data.genres.map((genre) => (
            <GenreLink key={genre} href={`/search/${genre}`}>
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
  gap: 10px;
`;

const GenreLabel = styled(Text)`
  font-weight: bold;
  color: #000;
`;

const GenreLink = styled(Link)`
  color: #777;
`;

export default AnimationInfo;
