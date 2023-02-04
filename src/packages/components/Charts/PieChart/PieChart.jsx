import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['女性', '男性'],
  datasets: [
    {
      label: '# of Votes',
      data: [65, 35],
      backgroundColor: ['#a6cee3', '#4C93C3'],
      borderWidth: 1,
    },
  ],
};

const options = {
  aspectRatio: 2.2,
  plugins: {
    legend: {
      display: true,
      position: 'right',
      labels: {
        boxWidth: 16,
        boxHeight: 16,
      },
    },
  },
};

const PieChart = () => <Pie data={data} options={options} />;

export default PieChart;
