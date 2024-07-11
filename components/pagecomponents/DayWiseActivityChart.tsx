import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Data } from '../types';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface DayWiseActivityCharttProps {
  data: Data;
}
interface Activities {
  [key: string]: number;
}

const DayWiseActivityChart: React.FC<DayWiseActivityCharttProps> = ({
  data,
}) => {
  const dayWiseData = data.AuthorWorklog.rows.flatMap((user) =>
    user.dayWiseActivity.map((day) => {
      const activities: Activities = {};
      day.items.children.forEach((activity) => {
        activities[activity.label] = parseInt(activity.count, 10);
      });
      return { date: day.date, user: user.name, ...activities };
    })
  );

  const labels = dayWiseData.map((item) => item.date);

  const chartData = {
    labels,
    datasets: data.AuthorWorklog.activityMeta.map((meta, index) => ({
      label: meta.label,
      backgroundColor: meta.fillColor,
      stack: 'a',
      //@ts-ignore
      data: dayWiseData.map((item) => item[meta.label]),
    })),
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
  return  <div className=' h-[500px]'><Bar data={chartData}  options={options} /></div>;
};

export default DayWiseActivityChart;
