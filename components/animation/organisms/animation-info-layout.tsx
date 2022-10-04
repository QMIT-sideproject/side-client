import styled from '@emotion/styled';
import { stringToDateFormat } from 'utils/date';
import AnimationInfoLabel from '../atoms/animation-info-label';
import AnimationInfoValue from '../atoms/animation-info-value';
import AnimationInfo from '../molecules/animation-info';
import { AnimationDetailType } from '../templates/detail-query';

interface Props {
  data: AnimationDetailType;
}

const AnimationInfoLayout = ({ data }: Props) => {
  const startDate = stringToDateFormat(`${data.startDate.year}-${data.startDate.month}-${data?.startDate.day}`);
  const endDate = stringToDateFormat(`${data.endDate.year}-${data.endDate.month}-${data.endDate.day}`);

  return (
    <StyledInfoLayout>
      <AnimationInfo label="Status" value={data.status} />
      <AnimationInfo label="Episodes" value={data.episodes} />
      <AnimationInfo label="Start Date" value={startDate} />
      <AnimationInfo label="End Date" value={endDate} />
      <AnimationGenreLayout>
        <AnimationInfoLabel label="Genres" />
        <AnimationGenreValueLayout>
          {data.genres.map((genre, index) => (
            <AnimationInfoValue key={index} value={genre} />
          ))}
        </AnimationGenreValueLayout>
      </AnimationGenreLayout>
    </StyledInfoLayout>
  );
};

const StyledInfoLayout = styled.section`
  display: flex;
  justify-content: flex-start;
  gap: 50px;
  padding: 30px 50px;
  background-color: #f7f7f7;
  border-radius: 5px;
`;

const AnimationGenreLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AnimationGenreValueLayout = styled.div`
  display: flex;
  gap: 10px;
`;

export default AnimationInfoLayout;
