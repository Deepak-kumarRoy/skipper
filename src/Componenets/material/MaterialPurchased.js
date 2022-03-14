import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem';
import Navbar from '../Navbar';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import './material.css';


const Input = styled('input')({
    display: 'none',
});

const input = [
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


export default function MaterialPurchased() {


    return (   
          
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 3, width: '25ch' }, marginTop:10
            }}
            noValidate
            autoComplete="off"
        ><Navbar />   
            <div className='heading'>
                <Typography  component="div" variant="h5" >
                    NEW MATERIAL PROCUREMENT FOR IT
                </Typography>
            </div><hr />
            <div>
                <TextField
                    id="outlined-size-small"
                    size="small"
                    label="Status"
                    placeholder="REQUISITIONER NAME"
                    multiline
                    required
                >
                </TextField>
                <TextField
                    id="date"
                    label="DATE OF REQUISITION"
                    type="date"
                    required
                    // defaultValue="2017-05-24"
                    size="small"
                />

                <TextField
                    label="Location"
                    id="outlined-size-small"
                    size="small"
                    select
                    required
                >
                    {input.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}

                </TextField>

                <TextField
                    label="ITEM DESCRIPTION & SPECIFICATION"
                    placeholder="ITEM DESCRIPTION & SPECIFICATION"
                    id="outlined-size-small"
                    size="small"
                    required
                />

                <TextField
                    id="date"
                    label="Date OF REQUIREMENT"
                    type="date"
                    // defaultValue="2017-05-24"
                    required
                    size="small"
                />

                <TextField
                    id="outlined-size-small"
                    select
                    size="small"
                    label="ITEM TYPE"
                    required
                >
                    {input.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    label="ITEM CODE"
                    placeholder="ITEM CODE"
                    multiline
                    id="outlined-size-small"
                    size="small"
                    required
                />

                <TextField
                    id="outlined-size-small"
                    label="PURPOSE OF USE"
                    placeholder="PURPOSE OF USE"
                    size="small"
                    required
                />

                <TextField
                    id="outlined-size-small"
                    select
                    size="small"
                    label="MAKE"
                    required
                >
                    {input.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    label="REQUIRED QUANTITY"
                    placeholder="REQUIRED QUANTITY"
                    multiline
                    required
                    // defaultValue="2017-05-24"
                    size="small"
                />

                <TextField
                    id="outlined-size-small"
                    size="small"
                    label="ESTIMATED VALUE(WITHOUT TAX)INR"
                    // placeholder="ESTIMATED VALUE(WITHOUT TAX)INR"
                    multiline
                    required
                >
                </TextField>
                <TextField
                    id="outlined-size-small"
                    size="small"
                    label="INDENTOR NAME"
                    placeholder="INDENTOR NAME"
                    multiline
                    required
                >
                </TextField>

                <TextField
                    id="date"
                    label="OFFER RECEIVED DATE"
                    type="date"
                    // defaultValue="2017-05-24"
                    required
                    size="small"
                />
                <TextField
                    label="HSN / SAC CODE"
                    placeholder="HSN / SAC CODE"
                    multiline
                    id="outlined-size-small"
                    size="small"
                    required
                />
                <TextField
                    id="date"
                    label="DATE OF REQUEST/ APPROVED"
                    type="date"
                    // defaultValue="2017-05-24"
                    required
                    size="small"
                />
                <TextField
                    label="Base unit of Measure"
                    placeholder="Base unit of Measure"
                    multiline
                    id="outlined-size-small"
                    size="small"
                    required
                />
                <TextField
                    size='small'
                    id="outlined-textarea"
                    label="Vendor Name"
                    placeholder="Vendor Name"
                    multiline
                />
                <TextField
                    size='small'
                    id="outlined-textarea"
                    label="Vendor Code"
                    placeholder="Vendor Code"
                    multiline

                />
                <TextField
                    size='small'
                    id="outlined-textarea"
                    label="Vendor Provisional GST"
                    placeholder="Vendor Provisional GST"
                    multiline
                    variant='outlined'
                />
                <TextField
                    size='small'
                    id="outlined-textarea"
                    label="Rate Without Tax (Rs.)"
                    placeholder="Rate Without Tax (Rs.)"
                    multiline
                    variant='outlined'
                />
                <TextField
                    id="outlined-size-small"
                    select
                    size="small"
                    label="GST %"
                    required
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
                    label="Payment Terms"
                    required
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
                    label="Delivery Terms"
                    required
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
                    label="Warranty/AMC(Start Date- End Date)"
                    required
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
                    label="To Be Filled By Accounts Team REQUIRED DETAILS: Account Assignment Category/GL Account/Cost Center/Internal Order/Plan (To be provide by concern accounts person)"
                    required
                >
                    {input.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <FormControl >
                    <label htmlFor="contained-button-file">
                        <div className='upload'>
                        <FormLabel  id="demo-radio-buttons-group-label" required>Attachment of Approval & CS Documents</FormLabel>
                        <Input accept="image/*" id="contained-button-file" multiple type="file" /> &nbsp;
                        <Button variant="contained" component="span">
                            <FileUploadIcon />
                        </Button>
                        </div>
                    </label>
                </FormControl>
                <TextField
                    id="outlined-size-small"
                    select
                    size="small"
                    label="Request for PR and Material Code"
                    required
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
                    label="Request for Purchase / Service order"
                    required
                >
                    {input.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <FormControl >
                    <FormLabel id="demo-radio-buttons-group-label" required>Responsible Person</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="itd@skipperlimited.com"
                        name="radio-buttons-group"
                        required
                    >
                        <FormControlLabel value="itd@skipperlimited.com" control={<Radio />} label="itd@skipperlimited.com" />
                    </RadioGroup>
                </FormControl>
                <div className='heading'>
                    <Button variant="contained" > Submit </Button><hr />
                </div>
            </div>
        </Box >
    );
}