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
import { Data } from '../types';
interface TotalActivityTableProps {
  data: Data;
}
const TotalActivityTable: React.FC<TotalActivityTableProps> = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
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
          {data.AuthorWorklog.rows.map((user) => (
            <TableRow key={user.name}>
              <TableCell>{user.name}</TableCell>
              {user.totalActivity.map((activity) => (
                <TableCell key={activity.name}>{activity.value}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TotalActivityTable;
