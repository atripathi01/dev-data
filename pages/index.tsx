import CustomNavbar from '@/components/pagecomponents/navbar';
import CardComponent from '@/components/ui/card';
import { Grid } from '@mui/material';

export default function Home() {
  return (
    <div className='w-full'>
      <CustomNavbar title='Dashboard' />
      <div>
      <CardComponent>
        <h1>Hello, World!</h1>
        <p>This is a dashboard page.</p>
      </CardComponent>
      </div>
  
    </div>
  );
}
