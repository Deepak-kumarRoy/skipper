import React,{useState} from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import "./login.css";
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import API from '../../Utilities/Api';

export default function Login() {
    const theme = useTheme();

    const [email_id, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [client_id, setClient_Id] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const emailRegex = /\S+@\S+\.\S+/;

    const submit = (e) => {
        e.preventDefault();
        if (!emailRegex.test(email_id)) {
            setIsValid(false);
            setMessage('Please enter a valid email!');
        
          } else{
        
        if(!client_id || !email_id || !password )
        {
            alert("Fields Cannot be empty");
        }else{
        fetch(API.login,
            {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({"client_id":client_id, "email_id":email_id, "password":password}),
            }
          )
            .then((response) => response.json())
            .then((response) => {
                // console.log(response)
                if (response.Message === "invalid credentials" || response.Message === "password is wrong")
                {
                    alert(response.Message);
                }else{
                    window.localStorage.setItem("response", JSON.stringify(response));
                    navigate('/dashboard');
                    setEmailId("");
                    setPassword("");
                    setClient_Id("");   
                }
            })
            .catch((error) => { 
              console.error(error);
            });    
        }
          }
    
    }

    return (
        <Container >
           <div className='top'>
            <Card >
            <div className='main'>
                <div className='image' >
                <CardMedia
                    
                    component="img"
                    // sx={{ width: 450, height:450, marginLeft:10 }}
                    img src={require('../../images/sample1.png')}
                /></div>
                <div className='loginform'>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 2, width: '35ch' }, 
                    }}
                    Validate
                    autoComplete="off"
                >
                    {/* <Typography component="div" variant="h4" >
                        User Login
                    </Typography> */}
                    <h2>User Login</h2>
                    <hr />
                    <div>
                        <TextField
                            label="Client-Id"
                            id="outlined-size-small"
                            size="small"
                            value={client_id}
                            onChange={(e) => { setClient_Id(e.target.value) }}
                        />
                    </div>
                    <div>
                        <TextField
                            label="email_id"
                            id="outlined-size-small"
                            size="small"
                            type="email"
                            value={email_id}
                            onChange={(e) => { setEmailId(e.target.value) }}
                        />

                    </div>
                    <div className={`message ${isValid ? 'success' : 'error'}`}>
                     {message}
                    </div>
                    <div>
                        <TextField
                            label="Password"
                            id="outlined-size-small"
                            size="small"
                            type="password"
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
                            Not Registered yet? <a href='/signup'>Signup</a>
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