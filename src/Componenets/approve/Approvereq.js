import * as React from 'react';
import "./approvereq.css";
import Navbar from '../Navbar';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70},
  { field: 'client_id', headerName: 'Client ID', width: 85},
  { field: 'description', headerName: 'Description', width: 640 },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  { field: 'dode', headerName: 'DODE', width: 110},
  { field: 'status', headerName: 'Status', width: 70},
  { field: 'pause', headerName: 'Pause', width: 70},
  { field: 'parent', headerName: 'Parent', width: 70},
  
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function Approvereq() {
  return (
    <>
      <Navbar />
      <div className='alignment'>
      <Typography component="div" variant="h5" >
           PENDING REQUESTS
        </Typography>
        </div> 
    <div className='back'  style={{ height: 370, width: '95%', }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    </>
  );
}