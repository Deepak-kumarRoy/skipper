import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const asset = [
    {
      value: 'Laptop',
      label: 'Laptop',
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


export default function Itform() {

    const [Status, setStatus] = useState('');
    const [pname, setPname] = useState('');
    const [emailid, setEmailId] = useState('');
    const [padate, setPadate] = useState('2021-05-24');
    const [adate, setAdate] = useState('2021-05-24');
    const [poso, setPoso] = useState('');
    const [location, setLocation] = useState('');
    const [psnum, setPsnum] = useState('');
    const [vname, setVname] = useState('');
    const [vsdate, setVsdate] = useState('2021-05-24');
    const [handover, setHandover] = useState('');
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
            <Card sx={{ maxWidth: 1200, alignItems: 'center', borderRadius: 1, backgroundColor: 'rgb(56, 134, 252)' }}>
                <Typography component="div" variant="h6" sx={{ marginLeft: 2, marginY: 1, color:'white' }}>
                Return Of It Asset Details
                </Typography>
            </Card>
            <div>
                <TextField
                    id="outlined-size-small"
                    select
                    size="small"
                    label="Status"
                    required
                    value={Status}
                    onChange={(e)=>{setStatus(e.target.value)}}
                    required
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

                <TextField
                    id="date"
                    label="Price Approval Date"
                    type="date"
                    value={padate}
                    onChange={(e)=>{setPadate(e.target.value)}}
                    required
                    defaultValue="2017-05-24"
                    size="small"
                />

                <TextField
                    id="date"
                    label="Approved Date"
                    type="date"
                    value={adate}
                    onChange={(e)=>{setAdate(e.target.value)}}
                    required
                    defaultValue="2017-05-24"
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
                    required
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
                    defaultValue="2017-05-24"
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
                    required
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

                <div >
                    <Button variant="contained"  size="small" sx={{ marginLeft: 65, marginY: 1 }}> Submit </Button><hr />
                </div>

            </div>
        </Box>
    );
}