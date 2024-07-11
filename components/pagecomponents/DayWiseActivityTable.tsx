import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { Data, DayWiseActivity } from '../types';

interface DayWiseActivityTableProps {
  data: Data;
}
const DayWiseActivityTable: React.FC<DayWiseActivityTableProps> = ({
  data,
}) => {
  const dayWiseData = data.AuthorWorklog.rows.flatMap((user) =>
    user.dayWiseActivity.map((day: DayWiseActivity) => ({
      date: day.date,
      user: user.name,
      activities: day.items.children,
    }))
  );

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className='font-bold text-lg text-[#5570F1]'>Date</TableCell>
            <TableCell className='font-bold text-lg text-[#5570F1]'>User</TableCell>
            <TableCell className='font-bold text-lg text-[#5570F1]'>PR Open</TableCell>
            <TableCell className='font-bold text-lg text-[#5570F1]'>PR Merged</TableCell>
            <TableCell className='font-bold text-lg text-[#5570F1]'>Commits</TableCell>
            <TableCell className='font-bold text-lg text-[#5570F1]'>PR Reviewed</TableCell>
            <TableCell className='font-bold text-lg text-[#5570F1]'>PR Comments</TableCell>
            <TableCell className='font-bold text-lg text-[#5570F1]'>Incident Alerts</TableCell>
            <TableCell className='font-bold text-lg text-[#5570F1]'>Incidents Resolved</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dayWiseData.map((entry: any) => (
            <TableRow key={`${entry.date}-${entry.user}`}>
              <TableCell>{entry.date}</TableCell>
              <TableCell>{entry.user}</TableCell>
              {entry.activities.map((activity: any) => (
                <TableCell key={activity.label}>{activity.count}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DayWiseActivityTable;
