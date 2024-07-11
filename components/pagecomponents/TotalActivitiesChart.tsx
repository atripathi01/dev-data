import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Data } from '../types';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface TotalActivityChartProps {
    data: Data;
  }
  interface TotalActivityMap {
    [key: string]: number;
  }
  
const  TotalActivityChart: React.FC<TotalActivityChartProps>= ({ data }) =>{
  const activityData = data.AuthorWorklog.rows.map((user) => {
    const total:TotalActivityMap = {};
    user.totalActivity.forEach((activity) => {
      total[activity.name] = parseInt(activity.value, 10);
    });
    return { name: user.name, ...total };
  });

  const labels = activityData.map(item => item.name);

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide the x-axis grid lines
        },
      },
      y: {
        grid: {
          display: false, // Hide the y-axis grid lines
        },
      },
    },
    layout: {
      padding: {
        // left: 20,
        // right: 20,
        // top: 20,
        // bottom: 20
      },
    },
    categorySpacing: 10, // Set category spacing to 0 to tightly pack bars
    barThickness: 20,
    elements: {
      bar: {
        backgroundColor: '#F5F5F5',
        borderWidth: 1,
        borderColor: '#f5f5f5',
        borderRadius: 10, // Set borderRadius for the bars
      },
    },
  };

  const chartData = {
    labels,
    datasets: data.AuthorWorklog.activityMeta.map((meta, index) => ({
      label: meta.label,
      backgroundColor: meta.fillColor,
      //@ts-ignore
      data: activityData.map(item => item[meta.label]),
    })),
  };

  return  <div className=' h-[500px]'><Bar data={chartData}  options={options}  /></div>;
}

export default TotalActivityChart;
