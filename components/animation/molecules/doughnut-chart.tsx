import { memo, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import ChartConstructor from 'chart.js/auto';
import Canvas from '../atoms/canvas';

interface Props {
  chartData: {
    status: string;
    amount: number;
  }[];
}

const DoughnutChart = ({ chartData }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  chartData = chartData.sort((a, b) => b.amount - a.amount);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');

    if (!ctx) return;

    const chart = new ChartConstructor(ctx, {
      type: 'doughnut',
      data: {
        labels: chartData.map((data) => data.status),
        datasets: [
          {
            label: 'Dataset 1',
            data: chartData.map((data) => data.amount),
            backgroundColor: [
              'rgba(255, 99, 132)',
              'rgba(54, 162, 235)',
              'rgba(255, 206, 86)',
              'rgba(75, 192, 192)',
              'rgba(153, 102, 25)',
              'rgba(255, 159, 64)',
            ],
          },
        ],
      },
      options: {
        maintainAspectRatio: false, // 크기 변경 시 원래 캔버스 종횡비 유지 X
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: 'Status Distribution',
            color: '#000',
            padding: { bottom: 20 },
            font: {
              size: 18,
            },
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [chartData]);

  return (
    <CanvasWrapper>
      <Canvas ref={canvasRef} />
    </CanvasWrapper>
  );
};

const CanvasWrapper = styled.div`
  width: 100%;
  height: 400px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, 0.1);
`;

export default memo(DoughnutChart);
