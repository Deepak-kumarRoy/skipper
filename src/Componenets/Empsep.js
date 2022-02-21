import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

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
    const [date, setDate] = useState('');

    var today = new Date();

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 3, width: '25ch' }, marginTop: 10, marginLeft: 30
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
                    onChange={(e) => { setEmail(e.target.value) }}
                    required
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
                />

                <Button variant="contained" size="small" sx={{ marginLeft: 4, marginY: 3.5 }}> Next </Button><hr />

                <Card sx={{ maxWidth: 1200, marginTop:-2, alignItems: 'center', borderRadius: 1, backgroundColor: 'rgb(56, 134, 252)' }}>
                <Typography component="div" variant="h6" sx={{ marginLeft: 2, marginY: 1, color:'white' }}>
                    Employee Details
                </Typography>
                </Card>

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
                    value={date}
                    onChange={(e) => { setDate(e.target.value) }}
                    required
                    placeholder={today}
                    size="small"
                />
            </div>

            <Card>
            <Typography component="div" variant="h6" sx={{ marginLeft: 2, marginY: 1, color:'white' }}>
                    Return Of It Asset Details
                </Typography>


            </Card>

        </Box>
    );
}