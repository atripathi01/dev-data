import React, { useState } from 'react';

type Props = {
  status: string;
};
const CustomBadges = ({ status }: Props) => {
  function capitalize(word: string) {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
  }
  const lowerCaseStatus = status.toLowerCase();
  return (
    <>
      {lowerCaseStatus === 'pending' ? (
        <div className='flex justify-center items-center gap-1 my-1 text-xs text-red-500 bg-red-100 p-1 rounded-2xl'>
          <p>Pending</p>
        </div>
      ) : lowerCaseStatus === 'completed' ? (
        <div className='flex justify-center items-center gap-1 my-1 text-xs text-green-500 bg-green-100 p-1 rounded-2xl'>
          <p>Completed</p>
        </div>
      ) : lowerCaseStatus === '' ? (
        <></>
      ) : (
        <div className='flex justify-center items-center gap-1 my-1 text-xs text-gray-500 bg-gray-100 p-1 rounded-2xl'>
          <p>{capitalize(status)}</p>
        </div>
      )}
    </>
  );
};

export default CustomBadges;
