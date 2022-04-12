import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import './form.css';
import FormLabel from '@mui/material/FormLabel';

const input = [
    {
        value: 'Internal',
        label: 'Internal',
    },
    {
        value: 'External',
        label: 'External',
    },
    {
        value: 'Both',
        label: 'Both',
    },
];

const input1 = [
    {
        value: 'Desktop',
        label: 'Desktop',
    },
    {
        value: 'Laptop',
        label: 'Laptop',
    },
    {
        value: 'New Email creation',
        label: 'New Email creation',
    },
    {
        value: 'Other',
        label: 'Other',
    },
];

const input2 = [
    {
        value: 'Yes',
        label: 'YES',
    },
    {
        value: 'No',
        label: 'No',
    }
];

const loc = [
    {
        value: 'Head Office',
        label: 'Head Office',
    },
    {
        value: 'Tirumala',
        label: 'Tirumala',
    },
    {
        value: 'Uluberia Unit',
        label: 'Uluberia Unit',
    },
    {
        value: 'Jabalpur Unit',
        label: 'Jabalpur Unit',
    },
    {
        value: 'Jabalpur BCT Unit',
        label: 'Jabalpur BCT Unit',
    },
    {
        value: 'Other',
        label: 'Other',
    },
];


export default function Hrform() {

    const [reqname, setReqname] = useState('');
    const [mob, setMob] = useState('');
    const [reqdate, setReqdate] = useState('');
    const [hod, setHod] = useState('');
    const [hodemail, setHodEmail] = useState('');
    const [itheademail, setItheadEmail] = useState('');
    const [item, setItem] = useState('');
    const [propmailid, setPropMailId] = useState('');
    const [mailaccess, setMailAccess] = useState('');
    const [mobaccess, setMobAccess] = useState('');
    const [id, setId] = useState('');
    const [location, setLocation] = useState('');
    const [jdate, setJdate] = useState('');
    const [ename, setEname] = useState('');
    const [empmob, setEmpMob] = useState('');
    const [empid, setEmpId] = useState('');
    const [empdesg, setEmpDesg] = useState('');
    const [dept, setDept] = useState('');
    const [costcenter, setCostCenter] = useState('');
    const [resemail, setResEmail] = useState('');
    const [comm, setComm] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);

    const emailRegex = /\S+@\S+\.\S+/;
    let navigate = useNavigate();

    const move = () => {
        navigate('/dashboard')
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    

    const submit = (e) => {                     
        e.preventDefault();
        var wf_name =  "Asset Requisition";
        var descr = "Asset Requisition request from Hr person";
        var details = ({"Name Of Requistioner":reqname,"Date Of Requisition":reqdate,"Mobile Number":mob,"Name Of HOD":hod,"Email Id Of HOD":hodemail,
        "Email Id Of IT Head":itheademail,"Proposed Item For Usage":item,"Proposed MailID":propmailid,"Mail Sending Access":mailaccess,"Id Created By Rajib":id,
        "Location":location,"Joining Date":jdate,"Employee Name":ename,"Employee Mobile Number":empmob,"Employee ID":empid,"Employee Designation":empdesg,
        "Cost Center":costcenter,"Respondent Email":resemail,"Comments By HR/Requistioner":comm,"Email Access On Mobile":mobaccess,"Department":dept})
 
            if (!reqname || !reqdate || !mob || !hod || !hodemail || !itheademail || !item || !propmailid || !mailaccess || !id || !location || 
                !jdate || !ename || !empmob|| !empid || !empdesg || !costcenter || !resemail || !comm || !dept || !mobaccess) {
                alert("please fill all the fields")
              }else{
            if(!emailRegex.test(hodemail) || !emailRegex.test(itheademail) || !emailRegex.test(propmailid) || !emailRegex.test(resemail) || !emailRegex.test(id)){
                alert("email format is not correct")
            }else{
            var Obj = window.localStorage.getItem("response");
            var user = JSON.parse(Obj).userLogin
            var Token = JSON.parse(Obj).accessToken;
            
            fetch(
                'http://localhost:5000/authentication/formdata',
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

              }
        ;
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
                    Please Provide Details in the Following Format All HR Person
                </Typography>
            </div>
            </Card>
            </div>
            <div>
                <TextField
                    label="Name Of Requistioner"
                    id="outlined-size-small"
                    size="small"
                    value={reqname}
                    onChange={(e)=>{setReqname(e.target.value)}}
                    required
                />

                <TextField
                    label="Mobile Number"
                    id="outlined-size-small"
                    size="small"
                    value={mob}
                    onChange={(e)=>{setMob(e.target.value)}}
                    required
                />

                <TextField
                    id="date"
                    label="Date Of Requisition"
                    type="date"
                    value={reqdate}
                    onChange={(e)=>{setReqdate(e.target.value)}}
                    required
                    InputLabelProps={{
                        shrink: true,
                      }}
                    size="small"
                />

                <TextField
                    label="Name Of HOD"
                    id="outlined-size-small"
                    size="small"
                    value={hod}
                    onChange={(e)=>{setHod(e.target.value)}}
                    required
                />

                <TextField
                    label="Email Id Of HOD"
                    id="outlined-size-small"
                    size="small"
                    value={hodemail}
                    onChange={(e)=>{setHodEmail(e.target.value)}}
                    required
                />
                              

                <TextField
                    label="Email Id Of IT Head"
                    id="outlined-size-small"
                    size="small"
                    value={itheademail}
                    onChange={(e)=>{setItheadEmail(e.target.value)}}
                    // defaultValue="subrata.roy@skipperlimited.com"
                    required
                />

                <TextField
                    id="outlined-size-small"
                    select
                    size="small"
                    label="Proposed Item For Usage"
                    required
                    value={item}
                    onChange={(e)=>{setItem(e.target.value)}}
                >
                    {input1.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    label="Proposed MailID"
                    id="outlined-size-small"
                    size="small"
                    value={propmailid}
                    onChange={(e)=>{setPropMailId(e.target.value)}}
                    required
                />

                <TextField
                    id="outlined-size-small"
                    select
                    size="small"
                    label="Mail Sending Access"
                    required
                    value={mailaccess}
                    onChange={(e)=>{setMailAccess(e.target.value)}}
                >
                    {input.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    id="outlined-size-small"
                    select
                    size="small"
                    label="Email Access On Mobile"
                    required
                    value={mobaccess}
                    onChange={(e)=>{setMobAccess(e.target.value)}}
                >
                    {input2.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    label="Id Created By Rajib"
                    id="outlined-size-small"
                    size="small"
                    value={id}
                    onChange={(e)=>{setId(e.target.value)}}
                    // defaultValue="it.ulb1@skipperlimited.com"
                    required
                />

                <TextField
                    id="outlined-size-small"
                    select
                    size="small"
                    label="Location"
                    required
                    value={location}
                    onChange={(e)=>{setLocation(e.target.value)}}
                >
                    {loc.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    id="date"
                    label="Joining Date"
                    type="date"
                    value={jdate}
                    onChange={(e)=>{setJdate(e.target.value)}}
                    required
                    InputLabelProps={{
                        shrink: true,
                      }}
                    size="small"
                />

                <TextField
                    label="Employee Name"
                    id="outlined-size-small"
                    size="small"
                    value={ename}
                    onChange={(e)=>{setEname(e.target.value)}}
                    required
                />

                <TextField
                    label="Employee Mobile Number"
                    id="outlined-size-small"
                    size="small"
                    value={empmob}
                    onChange={(e)=>{setEmpMob(e.target.value)}}
                    required
                />

                <TextField
                    label="Employee ID"
                    id="outlined-size-small"
                    size="small"
                    value={empid}
                    onChange={(e)=>{setEmpId(e.target.value)}}
                    required
                />

                <TextField
                    label="Employee Designation"
                    id="outlined-size-small"
                    size="small"
                    value={empdesg}
                    onChange={(e)=>{setEmpDesg(e.target.value)}}
                    required
                />

                <TextField
                    label="Department"
                    id="outlined-size-small"
                    size="small"
                    value={dept}
                    onChange={(e)=>{setDept(e.target.value)}}
                    required
                />

                <TextField
                    label="Cost Center"
                    id="outlined-size-small"
                    size="small"
                    value={costcenter}
                    onChange={(e)=>{setCostCenter(e.target.value)}}
                    required
                />

                <TextField
                    label="Respondent Email"
                    id="outlined-size-small"
                    size="small"
                    value={resemail}
                    onChange={(e)=>{setResEmail(e.target.value)}}
                    // defaultValue="itd@skipperlimited.com"
                    required
                />
                <div className='com'>
                <FormControl  >
                    <InputLabel htmlFor="outlined-adornment-amount">Comments By HR/Requistioner</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={comm}
                        onChange={(e)=>{setComm(e.target.value)}}
                        label="Comments By HR/Requistioner"
                    />
                </FormControl>
                </div>
                <div className='heading'>
                    <Button variant="contained" size="small" onClick={submit}> Submit </Button>
                 </div>

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