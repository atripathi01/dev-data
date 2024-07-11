import CustomNavbar from '@/components/pagecomponents/navbar';
import TotalActivityTable from '@/components/pagecomponents/TotalActivityTable';
import CardComponent from '@/components/ui/card';
import { Grid } from '@mui/material';
import React from 'react';
import sampleData from '../../data/sampleData.json';
import { ChevronRight } from '@mui/icons-material';

const TotalActivity = () => {
  const data = sampleData?.data;
  //   console.log(data);
  return (
    <div className='w-full text-sm h-screen overflow-x-hidden overflow-y-scroll'>
      <CustomNavbar title='Total Activity Table' />
      <div className='p-2'>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <a href='/dashboard'>
              {' '}
              <p className='text-gray-100 cursor-pointer rounded-md flex justify-center items-center hover:bg-[#5570F1] py-1 px-3 bg-black w-fit'>
                <span>
                  {' '}
                  <ChevronRight className='rotate-180' />
                </span>
                Back to Dashbaord
              </p>
            </a>
          </Grid>
          <Grid item xs={12}>
            <CardComponent>
              <div className='py-4 '>
                <TotalActivityTable data={data} />
              </div>
            </CardComponent>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default TotalActivity;
