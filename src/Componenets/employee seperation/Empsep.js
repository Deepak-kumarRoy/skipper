import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Subform from './Subform';
import './empsep.css';
import Navbar from '../Navbar';

const input = [
    {
        value: 'Head Office',
        label: 'Head Office',
    },
    {
        value: 'Tirumala',
        label: 'Tirumala',
    },
    {
        value: 'uluberia unit',
        label: 'uluberia unit',
    },
    {
        value: 'Jangalpur Unit 1',
        label: 'Jangalpur Unit 1',
    },
    {
        value: 'Guwahati Plan',
        label: 'Guwahati Plan',
    },
    {
        value: 'Goraghata',
        label: 'Goraghata',
    },
    {
        value: 'Jangalpur BCTL Unit',
        label: 'Jangalpur BCTL Unit',
    },
    {
        value: 'Other',
        label: 'Other',
    },
];



export default function Form() {
    
    const [location, setLocation] = useState('');
    const [email, setEmail] = useState('');
    const [other, setOther] = useState('');
    const [empname, setEmpname] = useState('');
    const [empid, setEmpId] = useState('');
    const [desg, setDesg] = useState('');
    const [date, setDate] = useState();
    const [subform, setSubform] = useState(false);
   ;

    let navigate = useNavigate();

    useEffect(() => {
      {window.localStorage.getItem("response")? navigate('/empsep'):navigate('/')}
      var Obj = window.localStorage.getItem("response");
      setEmail(JSON.parse(Obj).userLogin.email_id)
      setEmpname(JSON.parse(Obj).userLogin.firstname)
      setEmpId(JSON.parse(Obj).userLogin.user_id)

    //   const minsec = ms('14d')
    //   const min_date = new Date(+new Date(empsepForm) -minsec )
    //   setMindate(moment(min_date).format('YYYY-MM-DD'))
    },[]);

    const formdata = {empname,empid,desg,date,location}

    const next = () => {
        if(!empname||!empid||!desg||!date||!location){
            alert("Fill all the columns")
        }else{
        setSubform(true);
    }
    }
    
    return (
        <>
        <Navbar />
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 3, width: '25ch' }, marginTop: 10, 
            }}
            noValidate
            autoComplete="off"
        >
            <div className='heading'>
                <Typography component="div" variant="h5" >
                    IT Employee Seperation FORM
                </Typography>
            </div><hr />
            <div>
                <TextField
                    label="Email"
                    id="outlined-size-small"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                    required
                    disabled
                    size="small"
                />

                <TextField
                    id="outlined-size-small"
                    select
                    size="small"
                    label="Location"
                    value={location}
                    onChange={(e) => { setLocation(e.target.value) }}
                    required
                >
                    {input.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    label="Other"
                    id="outlined-size-small"
                    value={other}
                    onChange={(e) => { setOther(e.target.value) }}
                    size="small"
                /><hr/>

                {/* <div>
                <Button variant="contained" size="small" sx={{ marginLeft: 4, marginY: 3.5 }}> Next </Button>
                </div> */}
                <div className='display'>
                <Card >
                <div className='title'>
                <Typography component="div" variant="h6" >
                    Employee Details
                </Typography>
                </div>
                </Card>
                </div>
                <TextField
                    label="Employee Name"
                    id="outlined-size-small"
                    value={empname}
                    onChange={(e) => { setEmpname(e.target.value) }}
                    size="small"
                />

                <TextField
                    label="Emplpoyee Id"
                    id="outlined-size-small"
                    value={empid}
                    onChange={(e) => { setEmpId(e.target.value) }}
                    size="small"
                />

                <TextField
                    label="Designation"
                    id="outlined-size-small"
                    value={desg}
                    onChange={(e) => { setDesg(e.target.value) }}
                    size="small"
                />

                <TextField
                    id="date"
                    label="Date of exit"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                      }}
                    value={date}
                    onChange={(e) => { setDate(e.target.value) }}
                    required
                    size="small"
                />

                {/* <Button variant="contained" size="small"  sx={{marginTop:3.5}}> <ArrowForwardIosIcon /> <ArrowForwardIosIcon /></Button> */}
                {/* <ArrowForwardIosIcon className='next-btn'></ArrowForwardIosIcon> */}
                <Button variant="text"sx={{marginTop:3.5}} onClick={()=>{next()}}><ArrowForwardIosIcon /></Button>
            </div>
             {subform?<Subform data={formdata}/>:""}
            
            
           <hr />
        </Box>
        </>
    );
}