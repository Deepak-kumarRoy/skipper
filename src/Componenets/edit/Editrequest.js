import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import Button from '@mui/material/Button';
import API from '../../Utilities/Api';
import './editrequest.css';
import Box from '@mui/material/Box';

export default function Editrequest() {

  const [comm, setComm] = useState('')
  const [edit, setEdit] = useState('')
  const [msg, setMsg] = useState([]);
  const url = window.location.href.split('/');

  const [value, setValue] = useState([]);
  var id = (url[url.length - 1]);

  let navigate = useNavigate();

  var Obj = window.localStorage.getItem("response");
  var Token = JSON.parse(Obj).accessToken;

  useEffect(() => {
    fetch( API.wf_data ,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authentication: Token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'id': id }),
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setValue(response.result[0].wf_data)
        setMsg(response.comment)
        // console.log(response)
      })
      .catch((error) => {

        console.error(error);
      });
  }, []);

  var data = Object.keys(value);

  const submit = () => {

    fetch( API.resubmit ,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authentication: Token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({id, value}),
      }
    )
      .then((response) => response.json())
      .then((response) => {
        alert(response.message)
        navigate('/approvereq')
      })
      .catch((error) => { 

        console.error(error);
      });
    console.log(value);
  }

  const handleChange = (abc, key) => {
    value[key] = abc;
  }

  return (
    <>
      <Navbar />
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 3, width: '25ch' }, marginTop: 15
        }}
        noValidate
        autoComplete="off"
      >
        <div className='frm'>
          <div className='heading'>
            <Typography component="div" variant="h5" >
              WORKFLOW DETAILS
            </Typography>
          </div><hr />

          {data.map((item, index) => {
            return (
              <TextField
                label={item}
                id="outlined-size-small"
                size="small"
                defaultValue={value[item]}
                // value={}
                onChange={(e)=>handleChange(e.target.value, item)}
              // onChange={(e)=>{setEdit(e.target.name)}}
              />)
          })}
          <div>
            {/* {msg.map((item,index)=>{return(  
          <FormControl fullWidth sx={{ m: 3, width: '92%' }}>
          <InputLabel htmlFor="outlined-adornment-amount">{item.u_firstname}</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={item.wt_comment}
            disabled
            label="Comment"
          />
          </FormControl>)})} */}

            <Stepper activeStep={msg.length} alternativeLabel>
              {msg.map((label) => (
                <Step key={label}>
                  <StepLabel><b>{label.u_firstname}</b>:{label.wt_comment}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <FormControl fullWidth sx={{ m: 3, width: '92%' }}>
              <InputLabel htmlFor="outlined-adornment-amount">Comment</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={comm}
                onChange={(e) => { setComm(e.target.value) }}
                label="Comment"
              />
            </FormControl>
          </div>
          <div className='but'>
            <Button variant="contained" onClick={submit} color="success">Submit</Button> </div>
        </div>
      </Box>
    </>
  );
}