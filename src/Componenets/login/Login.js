// import React, { useState } from "react";
// import "./login.css";

// export default function Login() {

//     const [username, setUsertName] = useState("");
//     const [password, setPassword] = useState("");

//     const submit = (e) => {
//         e.preventDefault();
//         console.log(username, password);
//         setUsertName("");
//         setPassword("");
//     }

//     return (
//         <div className="container maincontainer card col-md-8 my-5">
//         <div className="row">
//             <div className="col-md-6">
//                 <img src={require('../../login.jpg')} className="img-fluid rounded-start" alt="..." />
//             </div>
//             <div className="container col-md-4 mt-5">
//                 <div className="text-center mt-4"><h3> User Login </h3></div><hr />
//                 <form onSubmit={submit}>
//                     <div className="mb-3">
//                         <label className="form-label">Username </label>
//                         <input type="email" className="form-control inp" placeholder="username" value={username}  onChange={(e)=>{setUsertName(e.target.value)}}/>
//                     </div>
//                     <div className="mb-3">
//                         <label className="form-label">Password</label>
//                         <input type="password" className="form-control inp" placeholder="password" value={password}  onChange={(e)=>{setPassword(e.target.value)}}/>
//                     </div>
//                     <div className="mb-3 form-check">
//                         <input type="checkbox" className="form-check-input" />
//                         <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
//                     </div>
//                     <center><button type="submit" className="btn btn-success container mb-3 inp">Login</button>
//                         <p><small>Not Registered yet? <a href="">Signup</a></small></p></center>
//                 </form>
//             </div>
//         </div>
//         </div>
//     );
// }



import React,{useState} from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import "./login.css";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Login() {
    const theme = useTheme();

    const [username, setUsertName] = useState("");
    const [password, setPassword] = useState("");

    const submit = (e) => {
        e.preventDefault();
        console.log(username, password);
        setUsertName("");
        setPassword("");
    }

    

    return (
        <Container >
            <Card sx={{ display: 'flex', maxWidth: 1200, marginTop: 10, alignItems: 'center', borderRadius: 5 }}>
                <CardMedia
                    component="img"
                    sx={{ width: 450, height:450, marginLeft:10 }}
                    img src={require('../../images/sample1.png')}
                />
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 2, width: '35ch' }, marginLeft: 20
                    }}
                    Validate
                    autoComplete="off"
                >
                    <Typography component="div" variant="h4" sx={{ marginLeft: 8 }}>
                        User Login
                    </Typography>
                    <hr />
                    <div>
                        <TextField
                            label="Username"
                            id="outlined-size-small"
                            size="small"
                            value={username}
                            onChange={(e) => { setUsertName(e.target.value) }}
                        />

                    </div>
                    <div>
                        <TextField
                            label="Password"
                            id="outlined-size-small"
                            size="small"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                    </div>
                    <div>
                        <FormGroup sx={{ marginLeft: 2 }}>
                            <FormControlLabel control={<Checkbox />} label="Remember me" />
                        </FormGroup>
                    </div>
                    <div >
                        <Button variant="contained" onClick={submit} size="small" sx={{ marginLeft: 17, marginY: 1 }}> Login </Button>
                    </div>
                    <div>
                        <Typography component="p" variant="small" sx={{ marginLeft: 8 }}>
                            Not Registered yet? <a href=''>Signup</a>
                        </Typography>
                    </div>
                </Box>
            </Card>
        </Container>
    );
}