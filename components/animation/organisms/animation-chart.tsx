import styled from '@emotion/styled';
import BarChart from '../molecules/bar-chart';
import { AnimationDetailType } from '../templates/detail-query';

interface Props {
  data: Pick<AnimationDetailType, 'stats'>;
}

const AnimationChart = ({ data }: Props) => {
  return (
    <AnimationChartContainer>
      <ChartWrapper>
        <BarChart chartData={data.stats.scoreDistribution} />
      </ChartWrapper>
    </AnimationChartContainer>
  );
};

const AnimationChartContainer = styled.section`
  display: flex;
  gap: 50px;
  padding-bottom: 30px;
`;

const ChartWrapper = styled.div`
  flex: 1 1 0%;
`;

export default AnimationChart;
