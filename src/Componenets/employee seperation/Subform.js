import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import './empsep.css';

const asset = [
    {
      value: 'Laptop',
      label: 'Laptop',
    },
    {
      value: 'Desktop',
      label: 'Desktop',
    },
    {
      value: 'Printer',
      label: 'printer',
    },
    {
        value: 'Data Card',
        label: 'Data Card',
    },
    {
        value: 'Tab',
        label: 'Tab',
    },
    {
        value: 'Wireless Mouse',
        label: 'Wireless Mouse',
    },
    {
        value: 'Other',
        label: 'Other',
    },
  ];

const damage = [
    {
      value: 'yes',
      label: 'yes',
    },
    {
      value: 'No',
      label: 'No',
    },
  ];

const user = [
    {
      value: 'Autodesk',
      label: 'Autodesk',
    },
    {
      value: 'Relyon',
      label: 'Relyon',
    },
    {
      value: 'Tally',
      label: 'Taly',
    },
    {
        value: 'SAP',
        label: 'SAP',
    },
    {
        value: 'Lighthouse',
        label: 'Lighthouse',
    },
    {
        value: 'Adobe Photoshop CC',
        label: 'Adobe Photoshop CC',
    },
    {
        value: 'Adobe Illustrator CC',
        label: 'Adobe Illustrator CC',
    },
    {
        value: 'E-Copy PDF Pro',
        label: 'E-Copy PDF Pro',
    },
    {
        value: 'PLS-Pole',
        label: 'PLS-Pole',
    },
    {
        value: 'Nitro-PDF',
        label: 'Nitro-PDF',
    },
    {
        value: 'CAISSON',
        label: 'CAISSON',
    },
    {
        value: 'STAAD Pro Connection Edition',
        label: 'STAAD Pro Connection Edition',
    },
    {
        value: 'Arokia',
        label: 'Arokia',
    },
    {
        value: 'Kloudq',
        label: 'Kloudq',
    },
    {
        value: 'Solidworks',
        label: 'Solidworks',
    },
  ];

  const email = [
    {
      value: 'ratan.keshri@skipperlimited.com',
      label: 'ratan.keshri@skipperlimited.com',
    },
    {
      value: 'soumen.samanta@skipperlimited.com',
      label: 'soumen.samanta@skipperlimited.com',
    },
    {
      value: 'it.ulb1@skipperlimited.com',
      label: 'it.ulb1@skipperlimited.com',
    },
  ];

  const data = [
      {
          value: 'Departmental Head',
          label: 'Departmental Head'
      },
      {
        value: 'Departmental Users',
        label: 'Departmental Users'
      },
      {
        value: 'Not Verified',
        label: 'Not Verified'         
      },
      {
        value: 'Other',
        label: 'Other',
      },
  ]

  const hr = [
    {
        value: 'chiranjib.bera@skipperlimited.com',
        label: 'chiranjib.bera@skipperlimited.com',
    },
    {
        value: 'biswajit.bhattacharya@skipperlimited.com',
        label: 'biswajit.bhattacharya@skipperlimited.com',
    },
    {
        value: 'hr.unit1@skipperlimited.com',
        label: 'hr.unit1@skipperlimited.com',
    },
    {
        value: 'mahendra.mukhi@skipperlimited.com',
        label: 'mahendra.mukhi@skipperlimited.com',
    },
    {
        value: 'pintu.das@skipperlimited.com',
        label: 'pintu.das@skipperlimited.com',
    },    {
        value: 'sadhana.keshri@skipperlimited.com',
        label: 'sadhana.keshri@skipperlimited.com',
    },
    {
        value: 'Other',
        label: 'Other',
    },
  ]

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
                '& .MuiTextField-root': { m: 3, width: '25ch' }, marginTop:8.5
            }}
            noValidate
            autoComplete="off"
        >
            <div className='display'>
            <Card >
            <div className='title'>
                <Typography component="div" variant="h6" >
                Return Of It Asset Details
                </Typography>
            </div>
            </Card>
            </div>
            <div>
                <TextField
                    id="outlined-size-small"
                    select
                    size="small"
                    label="IT Assets Type"
                    required
                    // value={type}
                    // onChange={(e)=>{setType(e.target.value)}}
                >
                    {asset.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>


                <TextField
                    id="outlined-size-small"
                    select
                    size="small"
                    label="IT Asset Physically Damage"
                    required
                    // value={Status}
                    // onChange={(e)=>{setStatus(e.target.value)}}
                
                >
                    {damage.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    label="Damage Asset (Remarks)"
                    id="outlined-size-small"
                    size="small"
                    // value={dasset}
                    // onChange={(e)=>{setDasset(e.target.value)}}
                    required
                />

                <TextField
                    id="outlined-size-small"
                    select
                    size="small"
                    label="Licensed software used by user"
                    required
                    // value={poso}
                    // onChange={(e)=>{setPoso(e.target.value)}}
                    
                >
                    {user.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    id="outlined-size-small"
                    select
                    size="small"
                    label="Password Detection"
                    required
                    // value={handover}
                    // onChange={(e)=>{setHandover(e.target.value)}}
                    
                >
                    {email.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    id="outlined-size-small"
                    select
                    size="small"
                    label="Mail access in Mobile"
                    required
                    // value={mailaccess}
                    // onChange={(e)=>{setMailaccess(e.target.value)}}
                >
                    {damage.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    id="outlined-size-small"
                    select
                    size="small"
                    label="User data Verified by"
                    required
                    // value={userdata}
                    // onChange={(e)=>{setUserData(e.target.value)}}
                >
                    {data.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    id="outlined-size-small"
                    select
                    size="small"
                    label="Official data/email received HOD"
                    required
                    // value={received}
                    // onChange={(e)=>{setReceived(e.target.value)}}
                >
                    {damage.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    label="HOD Acceptance"
                    id="outlined-size-small"
                    size="small"
                    // value={accept}
                    // onChange={(e)=>{setAccess(e.target.value)}}
                    required
                />

                <TextField
                    label="Checked By It Person"
                    id="outlined-size-small"
                    size="small"
                    // value={comm}
                    // onChange={(e)=>{setComm(e.target.value)}}
                    required
                />

                <TextField
                    label="Remarks"
                    id="outlined-size-small"
                    size="small"
                    // value={comm}
                    // onChange={(e)=>{setComm(e.target.value)}}
                    required
                />

                <TextField
                    label="Respondent's It Person Email Address"
                    id="outlined-size-small"
                    size="small"
                    // value={comm}
                    // onChange={(e)=>{setComm(e.target.value)}}
                    required
                />

                <TextField
                    id="outlined-size-small"
                    select
                    size="small"
                    label="Official data/email received HOD"
                    required
                    // value={handover}
                    // onChange={(e)=>{setHandover(e.target.value)}}
                >
                    {hr.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    label="Approved By IT Head"
                    id="outlined-size-small"
                    size="small"
                    // value={comm}
                    // onChange={(e)=>{setComm(e.target.value)}}
                    required
                />

                <TextField
                    label="Notification Alert"
                    id="outlined-size-small"
                    size="small"
                    // value={comm}
                    // onChange={(e)=>{setComm(e.target.value)}}
                    required
                />

                <div className='heading'>
                    <Button variant="contained"  size="small" > Submit </Button><hr />
                </div>

            </div>
        </Box>
    );
}