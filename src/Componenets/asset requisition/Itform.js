import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import "react-datepicker/dist/react-datepicker.css";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import API from '../../Utilities/Api';
import './form.css';

const input = [
    {
        value: 'Yes',
        label: 'Yes',
    },
    {
        value: 'No',
        label: 'No',
    },
];

const input1 = [
    {
        value: 'Active',
        label: 'Active',
    },
    {
        value: 'Closed',
        label: 'Closed',
    },
];


export default function Itform() {

    const [status, setStatus] = useState('');
    const [pname, setPname] = useState('');
    const [emailid, setEmailId] = useState('');
    const [padate, setPadate] = useState('');
    const [adate, setAdate] = useState('');
    const [poso, setPoso] = useState('');
    const [location, setLocation] = useState('');
    const [psnum, setPsnum] = useState('');
    const [vname, setVname] = useState('');
    const [vsdate, setVsdate] = useState('');
    const [handover, setHandover] = useState('');
    const [comm, setComm] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);

    // adate:new Date().toISOString.slice(0,10)
    let navigate = useNavigate();

    useEffect(() => {
        {window.localStorage.getItem("response")? navigate('/form'):navigate('/')}
        var Obj = window.localStorage.getItem("response");
        setEmailId(JSON.parse(Obj).userLogin.email_id)
        setPname(JSON.parse(Obj).userLogin.firstname)
      },[]);

    const move = () => {
        navigate('/dashboard')
      };
    
    //   const handleClose = () => {
    //     setOpen(false);
    //   };

    const emailRegex = /\S+@\S+\.\S+/;

    const submit = (e) => {
        e.preventDefault();

        var wf_name =  "Asset Requisition";
        var descr = "Asset Requisition request from IT person";

        const details={
            "Status":status, "Prepared By (Name)":pname,"Email Id":emailid,"Price Approval Date":padate,
            "Approved Date":adate, "Send For PO/So":poso,"PO/SO Location":location,"PO/SO Number":psnum,"Vendor Name":vname,
            "Vendor Supply Date":vsdate,"Assets Hand over":handover,"Comments":comm}
        if (!status||!pname||!emailid||!padate||!adate||!poso||!location||!psnum||!vname||!vsdate||!handover||!comm) {
            alert("please fill all the fields")
          }else{
        if(!emailRegex.test(emailid)){
            alert("email format is not correct")
        }else{
        var Obj = window.localStorage.getItem("response");
        var user = JSON.parse(Obj).userLogin;
        var Token = JSON.parse(Obj).accessToken;
        
        fetch( API.formdata ,
            {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                Authentication: Token,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({details,user,wf_name,descr})
              
            }
          )
            .then((response) => response.json())
            .then((response) => {
                setMessage(response.message);
                setOpen(true)
            })
            .catch((error) => { 
              console.error(error);
            });    
        }
        console.log(details,user)
        console.log(user.user_id)
          }
    }

    return (
        <>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 3, width: '25ch' }, marginTop:-2
            }}
            noValidate
            autoComplete="off"
        >
            <div className='display'>
            <Card >
            <div className='title'>
                <Typography component="div" variant="h6" >
                    Please Provide Details in the Following Format (To be Filled By IT)
                </Typography>
            </div>
            </Card>
            </div>
            <div>
                <TextField
                    id="outlined-size-small"
                    select
                    size="small"
                    label="Status"
                    required
                    value={status}
                    onChange={(e)=>{setStatus(e.target.value)}}
                >
                    {input1.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    label="Prepared By (Name)"
                    id="outlined-size-small"
                    size="small"
                    value={pname}
                    onChange={(e)=>{setPname(e.target.value)}}
                    required
                />

                <TextField
                    label="Email Id"
                    id="outlined-size-small"
                    size="small"
                    value={emailid}
                    onChange={(e)=>{setEmailId(e.target.value)}}
                    required
                />
                {/* <p className={`message ${isValid ? 'success' : 'error'}`}>
                 {message}
                </p> */}

                {/* <DatePicker selected={new Date()} 
                label="Price Approval Date"
                minDate={new Date()} 
                 value={padate}
                 onChange={(e)=>{setPadate(e.target.value)}} /> */}

                <TextField
                    id="date"
                    label="Price Approval Date"
                    type="date"
                    minDate={new Date()}
                    value={padate}
                    onChange={(e)=>{setPadate(e.target.value)}}
                    required
                    InputLabelProps={{
                        shrink: true,
                      }}
                    size="small"
                />

                <TextField
                    id="date"
                    label="Approved Date"
                    type="date"
                    value={adate}
                    onChange={(e)=>{setAdate(e.target.value)}}
                    required
                    InputLabelProps={{
                        shrink: true,
                      }}
                    size="small"
                />

                <TextField
                    id="outlined-size-small"
                    select
                    size="small"
                    label="Send For PO/So"
                    required
                    value={poso}
                    onChange={(e)=>{setPoso(e.target.value)}}
                
                >
                    {input.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    label="PO/SO Location"
                    id="outlined-size-small"
                    size="small"
                    value={location}
                    onChange={(e)=>{setLocation(e.target.value)}}
                    required
                />

                <TextField
                    label="PO/SO Number"
                    id="outlined-size-small"
                    size="small"
                    value={psnum}
                    onChange={(e)=>{setPsnum(e.target.value)}}
                    required
                />

                <TextField
                    label="Vendor Name"
                    id="outlined-size-small"
                    size="small"
                    value={vname}
                    onChange={(e)=>{setVname(e.target.value)}}
                    required
                />

                <TextField
                    id="date"
                    label="Vendor Supply Date"
                    type="date"
                    value={vsdate}
                    onChange={(e)=>{setVsdate(e.target.value)}}
                    required
                    InputLabelProps={{
                        shrink: true,
                      }}
                    size="small"
                />

                <TextField
                    id="outlined-size-small"
                    select
                    size="small"
                    label="Assets Hand over"
                    required
                    value={handover}
                    onChange={(e)=>{setHandover(e.target.value)}}
                    
                >
                    {input.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    label="Comments"
                    id="outlined-size-small"
                    size="small"
                    value={comm}
                    onChange={(e)=>{setComm(e.target.value)}}
                    required
                />

                <div className='heading'>
                    <Button variant="contained" onClick={submit} size="small" sx={{ marginTop:3.5,ml:8 }}> Submit </Button><hr />
                </div>

            </div>
        </Box>

        <Dialog
        open={open}
        // onClose={handleClose}
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