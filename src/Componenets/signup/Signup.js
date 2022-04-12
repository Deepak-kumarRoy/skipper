import React, { useState } from "react";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import './signup.css';

export default function Signup() {
    const [client_id, setClientId] = useState("");
    const [status, setStatus] = useState("")
    const [user_id, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email_id, setEmailId] = useState("");
    const [contact_no, setContactNo] = useState("");
    const [langu, setLangu] = useState("");
    const [country, setCountry] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState('');


    const emailRegex = /\S+@\S+\.\S+/;

    const submit = (e) => {
        e.preventDefault();

        const details = {
            client_id, user_id, password, firstname, lastname, country, langu, email_id, contact_no, status
        }

        if (!emailRegex.test(email_id)) {
            setIsValid(false);
            setMessage('Please enter a valid email!');
          }else{

        if(!client_id, !user_id, !password, !firstname, !lastname, !country, !langu, !email_id, !contact_no, !status)
        {
            alert("fields cannot be empty");
        }else{
            fetch(
                'http://localhost:5000/authentication/signup',
                {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(details),
                }
              )
                .then((response) => response.json())
                .then((response) => {
                    if (response.Message === "user already exist")
                {
                    alert(response.Message);
                    setEmailId("");
                    setPassword("");
                    setClientId("");
                    setFirstName("");
                    setLastName("");
                    setLangu("");
                    setContactNo("");
                    setCountry("");
                    setStatus("");
                    setUserId("") 
                }else{
                    alert(response.Message);  
                }
                })
                .catch((error) => { 
                  console.error(error);
                });    
            }
        console.log(user_id, password);
        setEmailId("");
        setPassword("");
        setClientId("");
        setFirstName("");
        setLastName("");
        setLangu("");
        setContactNo("");
        setCountry("");
        setStatus("");
        setUserId("") 
          }
    }

    return (
        <Container>
            <div className="cards">
            <Card >
                <div className="wrap">
                <div className="images">
                <CardMedia
                    component="img"
                    img src={require('../../images/signup.jpg')}
                /></div>
                <div className="signupform">
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '18ch' }, 
                    }}
                    Validate
                    autoComplete="off"
                > <div className="head">
                    <Typography component="div" variant="h5" >
                        User Registration Form
                    </Typography></div>
                    <hr />
                    <div>
                        <TextField
                            label="client_id"
                            id="outlined-size-small"
                            size="small"
                            value={client_id}
                            onChange={(e) => { setClientId(e.target.value) }}
                        />
                        <TextField
                            label="First Name"
                            id="outlined-size-small"
                            size="small"
                            required
                            value={firstname}
                            onChange={(e) => { setFirstName(e.target.value) }}
                        />
                    </div>
                    <div>
                        <TextField
                            label="Last Name"
                            id="outlined-size-small"
                            size="small"
                            required
                            value={lastname}
                            onChange={(e) => { setLastName(e.target.value) }}
                        />
                        <TextField
                            label="Email"
                            id="outlined-size-small"
                            size="small"
                            required
                            value={email_id}
                            onChange={(e) => { setEmailId(e.target.value) }}
                        />
                     <div className={`message ${isValid ? 'success' : 'error'}`}>
                     {message}
                    </div>
                    </div>
                    <div>
                        <TextField
                            label="userid"
                            id="outlined-size-small"
                            size="small"
                            required
                            value={user_id}
                            onChange={(e) => { setUserId(e.target.value) }}
                        />
                        <TextField
                            label="Contact No"
                            id="outlined-size-small"
                            size="small"
                            type="number"
                            required
                            value={contact_no}
                            onChange={(e) => { setContactNo(e.target.value) }}
                        />
                    </div>
                    <div>
                        <TextField
                            label="Password"
                            id="outlined-size-small"
                            size="small"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                        <TextField
                            label="Country"
                            id="outlined-size-small"
                            size="small"
                            error ={country.length === 2 ? false : true }
                            value={country}
                            onChange={(e) => { setCountry(e.target.value) }}
                        />
                    </div>
                    <div>
                        <TextField
                            label="Language"
                            id="outlined-size-small"
                            size="small"
                            error ={langu.length === 2 ? false : true }
                            value={langu}
                            onChange={(e) => { setLangu(e.target.value) }}
                        />
                        <TextField
                            label="status"
                            id="outlined-size-small"
                            size="small"
                            value={status}
                            onChange={(e) => { setStatus(e.target.value) }}
                        />
                    </div>
                    <div  className="but">
                        <Button variant="contained" onClick={submit} size="small" > Sign Up </Button>
                    </div>
                    <div className="para">
                        <Typography component="p" variant="small" sx={{ marginLeft: 8 }}>
                            If you already have an account <a href='/'>Login</a>
                        </Typography>
                    </div>
                </Box>
                </div>
                </div>
            </Card>
            </div>


           
        </Container>
    );
}