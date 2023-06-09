import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Tooltip,
  Title,
} from 'chart.js';
import styled from 'styled-components';

Chart.register(CategoryScale, LinearScale, BarController, BarElement, Tooltip, Title);

const BarChart = ({ color, setDonations }) => {
  const data = {
    labels: ['2월', '3월', '4월', '5월', '6월'],
    datasets: [
      {
        label: '누적후원금',
        //배열처리
        data: [80000, 80000, 100000, 42000, 90000],
        backgroundColor: `${color}`,
        borderColor: `${color}`,
        borderWidth: 0,
      },
    ],
  };

  useEffect(() => {
    if (setDonations) {
      setDonations(data.datasets[0].data.reduce((prev, curr) => prev + curr, 0));
    }
  }, []);

  const options = {
    plugins: {
      roundedBars: {
        borderRadius: 10, // 막대의 border-radius 값을 설정
      },
      datalabels: {
        anchor: 'end',
        align: 'top',
        color: 'black',
        font: {
          weight: 'bold',
        },
        formatter: function (value) {
          return value; // 데이터 값을 그대로 표시
        },
      },
    },
    scales: {
      y: {
        display: false, // y축 숨기기
        beginAtZero: true,
      },
      x: {
        grid: {
          display: false, // x축 그리드 배경 숨기기
        },
      },
    },
  };

  return (
    <BarContainer>
      <Bar data={data} options={options} />
    </BarContainer>
  );
};

export default BarChart;

const BarContainer = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  margin-top: 40px;
`;
