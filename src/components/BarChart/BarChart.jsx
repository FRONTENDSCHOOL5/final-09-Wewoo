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
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const data = {
    labels: [
      `${currentMonth - 4 <= 0 ? currentMonth - 4 + 12 : currentMonth - 4}월`,
      `${currentMonth - 3 <= 0 ? currentMonth - 3 + 12 : currentMonth - 3}월`,
      `${currentMonth - 2 <= 0 ? currentMonth - 2 + 12 : currentMonth - 2}월`,
      `${currentMonth - 1 <= 0 ? currentMonth - 1 + 12 : currentMonth - 1}월`,
      `${currentMonth}월`,
    ],
    datasets: [
      {
        label: '누적후원금',
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
    // eslint-disable-next-line
  }, []);

  const options = {
    plugins: {
      roundedBars: {
        borderRadius: 10,
      },
      datalabels: {
        anchor: 'end',
        align: 'top',
        color: 'black',
        font: {
          weight: 'bold',
        },
        formatter: function (value) {
          return value;
        },
      },
    },
    scales: {
      y: {
        display: false,
        beginAtZero: true,
      },
      x: {
        grid: {
          display: false,
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
