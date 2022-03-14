import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
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
    const [reqdate, setReqdate] = useState('2021-05-24');
    const [hod, setHod] = useState('');
    const [hodemail, setHodEmail] = useState('');
    const [itheademail, setItheadEmail] = useState('');
    const [item, setItem] = useState('');
    const [propmailid, setPropMailId] = useState('');
    const [mailaccess, setMailAccess] = useState('');
    const [mobaccess, setMobAccess] = useState('');
    const [id, setId] = useState('');
    const [location, setLocation] = useState('');
    const [jdate, setJdate] = useState('2021-05-24');
    const [ename, setEname] = useState('');
    const [empmob, setEmpMob] = useState('');
    const [empid, setEmpId] = useState('');
    const [empdesg, setEmpDesg] = useState('');
    const [dept, setDept] = useState('');
    const [costcenter, setCostCenter] = useState('');
    const [resemail, setResEmail] = useState('');
    const [comm, setComm] = useState('');

    return (
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
                
                {/* <FormControl >
                    <p className='appearance' id="demo-radio-buttons-group-label" required>Email Id Of IT Head</p>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="subrata.roy@skipperlimited.com"
                            name="radio-buttons-group"
                            required
                            >
                    <FormControlLabel className='appear' value="subrata.roy@skipperlimited.com" control={<Radio />} label="subrata.roy@skipperlimited.com" />
                        </RadioGroup>
                    </FormControl> */}
                

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
                    // defaultValue="2017-05-24"
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
                    <Button variant="contained" size="small" > Submit </Button>
                 </div>

            </div>
        </Box>
    );
}