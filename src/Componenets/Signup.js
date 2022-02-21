import React, { useState } from "react";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';

export default function Signup() {
    const [username, setUsertName] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [language, setLanguage] = useState("");
    const [country, setCountry] = useState("");

    const submit = (e) => {
        e.preventDefault();
        console.log(username, password);
        setUsertName("");
        setPassword("");
    }

    return (
        <Container>
            <Card sx={{ display: 'flex', maxWidth: 1200, marginTop: 10, alignItems: 'center', borderRadius: 5 }}>
                <CardMedia
                    component="img"
                    sx={{ width: 450, height: 450, marginLeft: 7 }}
                    img src={require('../../src/images/signup.jpg')}
                />
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 2, width: '30ch' }, marginLeft: 1
                    }}
                    Validate
                    autoComplete="off"
                >
                    <Typography component="div" variant="h4" sx={{ marginLeft: 14, marginY: 2 }}>
                        User Registration Form
                    </Typography>
                    <hr />
                    <div>
                        <TextField
                            label="First Name"
                            id="outlined-size-small"
                            size="small"
                            required
                            value={firstname}
                            onChange={(e) => { setFirstName(e.target.value) }}
                        />
                        <TextField
                            label="Last Name"
                            id="outlined-size-small"
                            size="small"
                            required
                            value={lastname}
                            onChange={(e) => { setLastName(e.target.value) }}
                        />
                    </div>
                    <div>
                        <TextField
                            label="Email"
                            id="outlined-size-small"
                            size="small"
                            required
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                        <TextField
                            label="Username"
                            id="outlined-size-small"
                            size="small"
                            required
                            value={username}
                            onChange={(e) => { setUsertName(e.target.value) }}
                        />
                    </div>
                    <div>
                        <TextField
                            label="Contact"
                            id="outlined-size-small"
                            size="small"
                            value={contact}
                            onChange={(e) => { setContact(e.target.value) }}
                        />
                        <TextField
                            label="Password"
                            id="outlined-size-small"
                            size="small"
                            required
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                    </div>
                    <div>
                        <TextField
                            label="Country"
                            id="outlined-size-small"
                            size="small"
                            value={country}
                            onChange={(e) => { setCountry(e.target.value) }}
                        />
                        <TextField
                            label="Language"
                            id="outlined-size-small"
                            size="small"
                            value={language}
                            onChange={(e) => { setLanguage(e.target.value) }}
                        />
                    </div>
                    <div >
                        <Button variant="contained" onClick={submit} size="small" sx={{ marginLeft: 32, marginY: 2 }}> Sign Up </Button>
                    </div>
                </Box>
            </Card>

        </Container>
    );
}