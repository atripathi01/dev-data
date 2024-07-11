import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Data } from '../types';
import { Grid } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);
interface InsightsPieChartProps {
  data: Data;
}
const InsightsPieChart: React.FC<InsightsPieChartProps> = ({ data }) => {
  const insightsData = data.AuthorWorklog.rows.map((user) => ({
    name: user.name,
    activeDays: user.activeDays.days,
    isBurnOut: user.activeDays.isBurnOut,
  }));
  //  console.log(insightsData);
  const chartData = {
    labels: insightsData.map((item) => item.name),
    datasets: [
      {
        label: 'Active Days',
        data: insightsData.map((item) => item.activeDays),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#66BB6A',
          '#FF7043',
          '#9575CD',
          '#4DB6AC',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#66BB6A',
          '#FF7043',
          '#9575CD',
          '#4DB6AC',
        ],
      },
    ],
  };

  return (
    <div className=' flex justify-center items-center flex-wrap'>
      <Grid item xs={12} lg={7}>
        {/* <Pie data={chartData} />  */}
        <div className='w-full h-fit max-h-[30vh] overflow-y-scroll '>
          <div className=' bg-[#556ff1] h-full p-4 rounded-xl'>
            <p className='text-white text-lg font-semibold'>
              Active Days Based on User
            </p>
            {insightsData.map((item, index) => (
              <div
                key={index}
                className={`flex items-center py-1 px-1 my-2 justify-between  rounded-lg border-[1px] border-solid gap-2 ${
                  item.isBurnOut ? 'border-[#2af62a]' : 'border-[#FF7043]'
                } `}
              >
                <p className='text-white w-[70%] overflow-x-hidden'>
                  <span
                    className={`h-[5px] mr-2 w-[5px] ${
                      item.isBurnOut ? 'bg-[#2af62a]' : 'bg-[#FF7043]'
                    } rounded-full`}
                  >
                    &nbsp;
                  </span>
                  {item.name}
                </p>
                <p className='text-white'>{item.activeDays} days</p>
              </div>
            ))}
          </div>
        </div>
      </Grid>
      <Grid item xs={12} lg={5} className='flex justify-end items-start'>
        <div className='h-[300px]'>
          <Pie data={chartData} />
        </div>
      </Grid>
    </div>
  );
};

export default InsightsPieChart;
