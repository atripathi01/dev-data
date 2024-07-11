import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Data } from '../types';

ChartJS.register(ArcElement, Tooltip, Legend);
interface ActiveDaysPieChartProps {
  data: Data;
}
const ActiveDaysPieChart: React.FC<ActiveDaysPieChartProps> = ({ data }) => {
  const activeDaysData = data.AuthorWorklog.rows.map((user) => ({
    name: user.name,
    value: user.activeDays.days,
  }));

//   console.log(activeDaysData);

  const chartData = {
    labels: activeDaysData.map((item) => item.name),
    datasets: [
      {
        data: activeDaysData.map((item) => item.value),
        backgroundColor: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'],
        borderWidth: 0,
        circumference: 360,
        cutout: '80%',
      },
      
    ],
  };
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
         labels: {
        // Adjust padding here to change the gap between legend and pie chart
        padding: 20, // Adjust this value as needed
      },
      },
      tooltip: {
        enabled: true,
      },
    },
    layout: {},
  };
  const backgroundCircle = {
    id: 'backgroundCircle',
    //@ts-ignore
    beforeDatasetsDraw(chart, upluginOptions, args) {
      const ctx = chart.ctx;
      ctx.save();
      const xCoo = chart.getDatasetMeta(0).data[0].x;
      const yCoo = chart.getDatasetMeta(0).data[0].y;
      const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius;
      const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius;
      const width = outerRadius - innerRadius + 20;
      const angle = Math.PI / 180;
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.arc(xCoo, yCoo, outerRadius - width / 2 + 10, 0, angle * 360, false);
      ctx.strokeStyle = '#f5f5f5';
      ctx.stroke();
    },
  };
  return  <div className=' h-[400px] mt-3'> <Pie data={chartData} options={options} plugins={[backgroundCircle]}/></div>;
};

export default ActiveDaysPieChart;
