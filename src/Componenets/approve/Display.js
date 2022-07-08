import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Navbar from '../Navbar';
import Button from '@mui/material/Button';
import './approvereq.css';
import Box from '@mui/material/Box';
import API from "../../Utilities/Api";

export default function Display() {

  const [comm, setComm] = useState('')
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState([]);
  const url = window.location.href.split('/');

  const [value, setValue] = useState([]);
  var id = (url[url.length - 1]);

  let navigate = useNavigate();

  var Obj = window.localStorage.getItem("response");
  var Token = JSON.parse(Obj).accessToken;

  const move = () => {
    navigate('/approvereq')
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetch(API.wf_data,
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

  const reject = () => {

    fetch(API.reject,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          Authentication: Token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, comm }),
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setMessage(response.message)
        setOpen(true)
      })
      .catch((error) => {

        console.error(error);
      });

  }

  const approve = () => {
    fetch( API.approve,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          Authentication: Token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, comm }),
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setMessage(response.message)
        setOpen(true);
      })
      .catch((error) => {

        console.error(error);
      });
  }

  const reapply = () =>{
    fetch( API.reassign ,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          Authentication: Token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, comm }),
      }
    )
      .then((response) => response.json())
      .then((response) => {
        // setMessage(response.message)
        // setOpen(true);
      })
      .catch((error) => {

        console.error(error);
      });
  
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
                value={value[item]}
                
              />)
          })}
          <div>
          
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
          <div className='butt'>
            <Button variant="contained" onClick={reject} color="error">Reject</Button>&nbsp;
            <Button variant="contained" onClick={reapply} >Reassign</Button>&nbsp;
            <Button variant="contained" onClick={approve} color="success">Approve</Button> </div>
        </div>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {message}
        </DialogTitle>
        <DialogActions>
          <Button onClick={move}>OKK</Button>
        </DialogActions>
      </Dialog>

    </>
  );
}