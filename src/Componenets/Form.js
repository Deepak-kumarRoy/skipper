import {useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Hrform from './Hrform';

const input = [
    {
      value: 'IF You are HR Person',
      label: 'IF You are HR Person',
    },
    {
      value: 'IF You are IT Person',
      label: 'IF You are IT Person',
    },
    {
      value: 'Option 3',
      label: 'Option 3',
    },
  ];

export default function Form() {

    const [person, setPerson] = useState('');
    const [email, setEmail] = useState('');


  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 3, width: '25ch' }, marginTop:10, marginLeft:30
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <Typography component="div" variant="h5" sx={{ marginLeft: 44 }}>
           IT ASSET REQUISITION FORM
        </Typography><hr />
      </div>
      <div>
        <TextField
          label="Email"
          id="outlined-size-small"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          required
          size="small"
        />

        <TextField
          id="outlined-size-small"
          select
          size="small"
          label="Please Define"
          value={person}
          onChange={(e)=>{setPerson(e.target.value)}}
          required
        >
          {input.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Button variant="contained" size="small" sx={{ marginLeft: 4, marginY: 3.5 }}> Next </Button><hr />
        
      </div>
           
            <Hrform />

    </Box>
  );
}