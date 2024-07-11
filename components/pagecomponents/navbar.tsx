import { ChevronRight } from '@mui/icons-material';
import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';

type NavbarProps = {
  title?: string;
};
const CustomNavbar = ({ title }: NavbarProps) => {
  return (
    <div className='bg-gray-100  border-b-[1px] border-solid border-gray-300 text-gray-700 py-3 px-5  flex justify-between items-center'>
      <div>{title && <p className='text-lg font-semibold'>{title}</p>}</div>
      <div className='cursor-pointer flex justify-center items-center gap-3'>
        <p className='text-sm py-1 px-2 rounded-md bg-[#ffcc9178] text-black'>
          Nannys <ChevronRight className='rotate-90' />
        </p>
        <NotificationsIcon className='text-[#5570F1]' />
      </div>
    </div>
  );
};

export default CustomNavbar;
