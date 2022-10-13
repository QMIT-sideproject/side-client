import { memo, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import ChartConstructor from 'chart.js/auto';
import Canvas from '../atoms/canvas';

interface Props {
  chartData: { score: number; amount: number }[];
}

const BarChart = ({ chartData }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');

    if (!ctx) return;

    let delayed: boolean;

    const chart = new ChartConstructor(ctx, {
      type: 'bar',
      data: {
        labels: chartData.map((data) => data.score.toString()),
        datasets: [
          {
            label: ' Votes ',
            data: chartData.map((data) => data.amount),
            backgroundColor: [
              'rgba(255, 99, 132)',
              'rgba(54, 162, 235)',
              'rgba(255, 206, 86)',
              'rgba(75, 192, 192)',
              'rgba(153, 102, 25)',
              'rgba(255, 159, 64)',
            ],
            minBarLength: 10, // 막대의 최소 길이
            barThickness: 15,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        maintainAspectRatio: false, // 크기 변경 시 원래 캔버스 종횡비 유지 X
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Score',
              font: {
                size: 16,
              },
              padding: {
                top: 10,
              },
            },
            ticks: {
              font: {
                size: 14,
              },
            },
            grid: {
              display: false,
            },
          },
          y: {
            title: {
              display: true,
              text: 'Votes',
              font: {
                size: 16,
              },
              padding: {
                bottom: 10,
              },
            },
            ticks: {
              font: {
                size: 14,
              },
            },
            beginAtZero: true,
            grid: {
              display: false,
            },
          },
        },
        plugins: {
          title: {
            display: true,
            text: 'Score Distribution',
            color: '#000',
            font: {
              size: 18,
            },
            padding: { bottom: 20 },
          },
          legend: {
            display: false,
          },
        },

        animation: {
          onComplete: () => {
            delayed = true;
          },
          delay: (context) => {
            let delay = 0;
            if (context.type === 'data' && context.mode === 'default' && !delayed) {
              delay = context.dataIndex * 100 + context.datasetIndex * 100;
            }
            return delay;
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

export default memo(BarChart);
