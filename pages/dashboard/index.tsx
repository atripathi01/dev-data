import CustomNavbar from '@/components/pagecomponents/navbar';
import CardComponent from '@/components/ui/card';
import { Grid } from '@mui/material';
import React from 'react';
import { ChevronRight } from '@mui/icons-material';
import TotalActivityChart from '@/components/pagecomponents/TotalActivitiesChart';
import sampleData from '../../data/sampleData.json';
import DayWiseActivityChart from '@/components/pagecomponents/DayWiseActivityChart';
import ActiveDaysPieChart from '@/components/pagecomponents/ActiveDaysPieChart';
import InsightsPieChart from '@/components/pagecomponents/InsightsPieChart';
import Link from 'next/link';

const Dashboard = () => {
  const data = sampleData?.data;
  //   console.log(data);
  return (
    <div className='w-full text-sm h-screen overflow-x-hidden overflow-y-scroll'>
      <CustomNavbar title='Dashboard' />
      <div className='p-2'>
        <Grid container spacing={1}>
          <Grid item xs={12} className='min-h-fit' lg={12}>
            <CardComponent>
              <div className='flex justify-between items-center'>
                <p className='text-lg text-gray-700'>Day Wise Activity Chart</p>
                <p className='text-gray-400'>
                  last 7 days{' '}
                  <span>
                    {' '}
                    <ChevronRight className='rotate-90' />
                  </span>
                </p>
              </div>
              <div className='py-4 '>
                <InsightsPieChart data={data} />
              </div>
            </CardComponent>
          </Grid>
          <Grid item xs={12} className='min-h-fit' lg={6}>
            <CardComponent>
              <div className='flex justify-between items-center'>
                <p className='text-lg text-gray-700'>Total Activity Chart</p>
                <Link href='/dashboard/totalActivity'>
                  <p className='text-gray-100 cursor-pointer rounded-md flex justify-center items-center hover:bg-[#5570F1] py-1 px-3 bg-black'>
                    View Detail Data
                    <span>
                      {' '}
                      <ChevronRight className='' />
                    </span>
                  </p>
                </Link>
              </div>
              <div className='py-4 '>
                <TotalActivityChart data={data} />
              </div>
            </CardComponent>
          </Grid>
          <Grid item xs={12} className='min-h-fit' lg={6}>
            <CardComponent>
              <div className='flex justify-between items-center'>
                <p className='text-lg text-gray-700'> Active Day Chart</p>
                <p className='text-gray-400'>
                  last 7 days{' '}
                  <span>
                    {' '}
                    <ChevronRight className='rotate-90' />
                  </span>
                </p>
              </div>
              <div className='py-4 '>
                <ActiveDaysPieChart data={data} />
              </div>
            </CardComponent>
          </Grid>
          <Grid item xs={12} className='min-h-fit' lg={12}>
            <CardComponent>
              <div className='flex justify-between items-center'>
                <p className='text-lg text-gray-700'>Day Wise Activity Chart</p>
                <Link href='/dashboard/dayWiseActivity'>
                  {' '}
                  <p className='text-gray-100 cursor-pointer rounded-md flex justify-center items-center hover:bg-[#5570F1] py-1 px-3 bg-black'>
                    View Detail Data
                    <span>
                      {' '}
                      <ChevronRight className='' />
                    </span>
                  </p>
                </Link>
              </div>
              <div className='py-4 '>
                <DayWiseActivityChart data={data} />
              </div>
            </CardComponent>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;
