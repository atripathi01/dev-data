import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import SettingsIcon from '@mui/icons-material/Settings';

export const Routes = [
  {
    //@ts-ignore
    icons: <GridViewRoundedIcon size={30} />,
    path: '/dashboard',
    label: 'Dashboard',
  },
  {
    //@ts-ignore
    icons: <SettingsIcon size={30} />,
    path: '/settings',
    label: 'Settings',
  },
];
