import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';
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
    }, {
        value: 'sadhana.keshri@skipperlimited.com',
        label: 'sadhana.keshri@skipperlimited.com',
    },
    {
        value: 'Other',
        label: 'Other',
    },
]

export default function Itform(props) {

    const [asset_type, setAsset_type] = useState('');
    const [asset_damage, setAsset_damage] = useState('');
    const [damage_remarks, setDamage_remarks] = useState('');
    const [user_software, setUser_software] = useState('');
    const [pass_detection, setPass_detection] = useState('');
    const [mob_mail_access, setMob_mail_access] = useState('');
    const [data_verifiedby, setData_verifiedby] = useState('');
    const [off_data_rec_hod, setOff_data_rec_hod] = useState('');
    const [hod_acceptance, setHod_acceptance] = useState('');
    const [checked_by, setChecked_by] = useState('');
    const [remarks, setRemarks] = useState('');
    const [res_it_person_mail, setRes_it_person_mail] = useState('');
    const [approved_by_hr, setApproved_By_Hr] = useState('');
    const [approved_by_it, setApproved_By_It] = useState('');
    const [notification, setNotification] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);

    const emailRegex = /\S+@\S+\.\S+/;
    let navigate = useNavigate();

    const move = () => {
        navigate('/dashboard')
    };


    const submit = (e) => {
        e.preventDefault();
        var wf_name = "Employee Seperation";
        var descr = "Resignation of Employee";
        var empname = props.data.empname;
        var empid = props.data.empid;
        var desg = props.data.desg;
        var location = props.data.location;
        var date = props.data.date;
        var details = ({
            "Employee Name": empname, "Emplpoyee Id": empid, "Designation": desg, "Date of exit": date, "Location": location, "IT Assets Type": asset_type,
            "IT Asset Physically Damage": asset_damage, "Damage Asset (Remarks)": damage_remarks, "Licensed software used by user": user_software, "Password Detection": pass_detection,
            "Mail access in Mobile": mob_mail_access, "User data Verified by": data_verifiedby, "Official data/email received HOD": off_data_rec_hod, "HOD Acceptance": hod_acceptance,
            "Checked By It Person": checked_by, "Remarks": remarks, "Respondent's It Person Email Address": res_it_person_mail, "Approved by Concerned HR person": approved_by_hr,
            "Approved By IT Head": approved_by_it, "Notification Alert": notification
        })

        if (!asset_type || !asset_damage || !damage_remarks || !user_software || !pass_detection || !mob_mail_access || !data_verifiedby,
            !off_data_rec_hod || !hod_acceptance || !checked_by || !remarks || !res_it_person_mail || !approved_by_hr || !approved_by_it || !notification) {
            alert("please fill all the fields")
        } else {
            if (!emailRegex.test(res_it_person_mail)) {
                alert("email format is not correct")
            } else {
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
                        body: JSON.stringify({ details, user, wf_name, descr })

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
    }

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 3, width: '25ch' }, marginTop: 8.5
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
                        value={asset_type}
                        onChange={(e) => { setAsset_type(e.target.value) }}
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
                        value={asset_damage}
                        onChange={(e) => { setAsset_damage(e.target.value) }}

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
                        value={damage_remarks}
                        onChange={(e) => { setDamage_remarks(e.target.value) }}
                        required
                    />

                    <TextField
                        id="outlined-size-small"
                        select
                        size="small"
                        label="Licensed software used by user"
                        required
                        value={user_software}
                        onChange={(e) => { setUser_software(e.target.value) }}

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
                        value={pass_detection}
                        onChange={(e) => { setPass_detection(e.target.value) }}

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
                        value={mob_mail_access}
                        onChange={(e) => { setMob_mail_access(e.target.value) }}
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
                        value={data_verifiedby}
                        onChange={(e) => { setData_verifiedby(e.target.value) }}
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
                        value={off_data_rec_hod}
                        onChange={(e) => { setOff_data_rec_hod(e.target.value) }}
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
                        value={hod_acceptance}
                        onChange={(e) => { setHod_acceptance(e.target.value) }}
                        required
                    />

                    <TextField
                        label="Checked By It Person"
                        id="outlined-size-small"
                        size="small"
                        value={checked_by}
                        onChange={(e) => { setChecked_by(e.target.value) }}
                        required
                    />

                    <TextField
                        label="Remarks"
                        id="outlined-size-small"
                        size="small"
                        value={remarks}
                        onChange={(e) => { setRemarks(e.target.value) }}
                        required
                    />

                    <TextField
                        label="Respondent's It Person Email Address"
                        id="outlined-size-small"
                        size="small"
                        value={res_it_person_mail}
                        onChange={(e) => { setRes_it_person_mail(e.target.value) }}
                        required
                    />

                    <TextField
                        id="outlined-size-small"
                        select
                        size="small"
                        label="Approved by Concerned HR person"
                        required
                        value={approved_by_hr}
                        onChange={(e) => { setApproved_By_Hr(e.target.value) }}
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
                        value={approved_by_it}
                        onChange={(e) => { setApproved_By_It(e.target.value) }}
                        required
                    />

                    <TextField
                        label="Notification Alert"
                        id="outlined-size-small"
                        size="small"
                        value={notification}
                        onChange={(e) => { setNotification(e.target.value) }}
                        required
                    />

                    <div className='heading'>
                        <Button variant="contained" size="small" onClick={submit}> Submit </Button><hr />
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