import {useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Navbar from '../Navbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './form.css';
import Hrform from './Hrform';
import Itform from './Itform';

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

    let navigate = useNavigate();

    useEffect(() => {
      {window.localStorage.getItem("response")? navigate('/form'):navigate('/')}
      var Obj = window.localStorage.getItem("response");
      setEmail(JSON.parse(Obj).userLogin.email_id)
    },[]);


  return (
    <>
    <Navbar />
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 3, width: '25ch' }, marginTop:10
      }}
      noValidate
      autoComplete="off"
    >
      <div className='heading'>
        <Typography component="div" variant="h5" >
           IT ASSET REQUISITION FORM
        </Typography>
      </div><hr />
      <div>
        <TextField
          label="Email"
          id="outlined-size-small"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          required
          disabled
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
        </TextField><hr />

        {/* <Button variant="contained" size="small" sx={{ marginLeft: 4, marginY: 3.5 }}> Next </Button> */}
        
      </div><>
           {person == "IF You are HR Person"? <Hrform />
            :
            <>
            { person == "IF You are IT Person"? <Itform />: " "}
            </>}
            </>  

    </Box>
    </>
  );
}