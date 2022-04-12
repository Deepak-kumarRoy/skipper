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
    const [reqname, setReqname] = useState('')


    return (   
        <>
        <Navbar/>
        <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 3, width: '25ch' }, marginTop:10
                }}
                noValidate
                autoComplete="off"
            >
               
                <div className='heading'>
                    <Typography  component="div" variant="h5" >
                        NEW MATERIAL PROCUREMENT
                    </Typography>
                </div><hr />
                <div>
                    <TextField
                        id="outlined-size-small"
                        size="small"
                        label="Requistioner Name"
                        multiline
                        // value={requistioner_name}
                        // onChange={(e)=>{setRequistioner_Name(e.target.value)}}
                        required
                    >
                    </TextField>
                    <TextField
                        id="date"
                        label="DATE OF REQUISITION"
                        type="date"
                        // value={date_of_requisition}
                        // onChange={(e)=>{setDate_Of_Requisition(e.target.value)}}
                        required
                        InputLabelProps={{
                            shrink: true,
                          }}
                        size="small"
                    />
    
                    <TextField
                        label="Location"
                        id="outlined-size-small"
                        size="small"
                        // value={location}
                        // onChange={(e)=>{setLocation(e.target.value)}}
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
                        // value={item_description}
                        // onChange={(e)=>{setItem_Description_type(e.target.value)}}
                        required
                    />
    
                    <TextField
                        id="date"
                        label="Date OF REQUIREMENT"
                        type="date"
                        // value={date_of_requirement}
                        // onChange={(e)=>{setDate_of_Requirement(e.target.value)}}
                        InputLabelProps={{
                            shrink: true,
                          }}
                        required
                        size="small"
                    />
    
                    <TextField
                        id="outlined-size-small"
                        select
                        size="small"
                        label="ITEM TYPE"
                        // value={item_type}
                        // onChange={(e)=>{setItem_type(e.target.value)}}
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
                        // value={item_code}
                        // onChange={(e)=>{setItem_Code(e.target.value)}}
                        required
                    />
    
                    <TextField
                        id="outlined-size-small"
                        label="PURPOSE OF USE"
                        placeholder="PURPOSE OF USE"
                        size="small"
                        // value={purpose_of_use}
                        // onChange={(e)=>{setPurpose_of_Use(e.target.value)}}
                        required
                    />
    
                    <TextField
                        id="outlined-size-small"
                        select
                        size="small"
                        label="MAKE"
                        // value={make}
                        // onChange={(e)=>{setMake(e.target.value)}}
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
                        // value={required_quantity}
                        // onChange={(e)=>{setRequired_Quantity(e.target.value)}}
                        size="small"
                    />
    
                    <TextField
                        id="outlined-size-small"
                        size="small"
                        label="ESTIMATED VALUE(WITHOUT TAX)INR"
                        // value={estimated_value}
                        // onChange={(e)=>{setEstimated_Value(e.target.value)}}
                        multiline
                        required
                    >
                    </TextField>
                    <TextField
                        id="outlined-size-small"
                        size="small"
                        label="INDENTOR NAME"
                        placeholder="INDENTOR NAME"
                        // value={indentor_name}
                        // onChange={(e)=>{setIndentor_name(e.target.value)}}
                        multiline
                        required
                    >
                    </TextField>
    
                    <TextField
                        id="date"
                        label="OFFER RECEIVED DATE"
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                          }}
                        required
                        // value={offer_received_date}
                        // onChange={(e)=>{setOffer_Received_Date(e.target.value)}}
                        size="small"
                    />
                     <TextField
                        label="HSN / SAC CODE"
                        placeholder="HSN / SAC CODE"
                        multiline
                        // value={hsn_code}
                        // onChange={(e)=>{setHSN_Code(e.target.value)}}
                        id="outlined-size-small"
                        size="small"
                        required
                    />
                    <TextField
                        id="date"
                        label="DATE OF REQUEST/ APPROVED"
                        type="date"
                        // value={date_of_request}
                        // onChange={(e)=>{setDate_of_Request(e.target.value)}}
                        InputLabelProps={{
                            shrink: true,
                          }}
                        required
                        size="small"
                    />
                    <TextField
                        label="Base unit of Measure"
                        multiline
                        id="outlined-size-small"
                        size="small"
                        // value={base_unit_of_measure}
                        // onChange={(e)=>{setBase_unit_of_Measure(e.target.value)}}
                        required
                   />
                    <TextField
                        size='small'
                        id="outlined-textarea"
                        label="Vendor Name"
                        // value={vendor_name}
                        // onChange={(e)=>{setVendor_Name(e.target.value)}}
                        multiline
                    />
                    <TextField
                        size='small'
                        id="outlined-textarea"
                        label="Vendor Code"
                        // value={vendor_code}
                        // onChange={(e)=>{setVendor_Code(e.target.value)}}
                        multiline
    
                    />
                    <TextField
                        size='small'
                        id="outlined-textarea"
                        label="Vendor Provisional GST"
                        // value={Vendor_provisional_gst}
                        // onChange={(e)=>{setVendor_provisitional_Gst(e.target.value)}}
                        multiline
                        variant='outlined'
                    />
                    <TextField
                        size='small'
                        id="outlined-textarea"
                        label="Rate Without Tax (Rs.)"
                        placeholder="Rate Without Tax (Rs.)"
                        // value={rate_without_tax}
                        // onChange={(e)=>{setRate_Without_Tax(e.target.value)}}
                        multiline
                        variant='outlined'
                    />
                    <TextField
                        id="outlined-size-small"
                        select
                        size="small"
                        label="GST %"
                        // value={gst%}
                        // onChange={(e)=>{setGst%(e.target.value)}}
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
                        // value={payment_terms}
                        // onChange={(e)=>{setPayment_Terms(e.target.value)}}
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
                        // value={delivert_terms}
                        // onChange={(e)=>{setDelivery_Terms(e.target.value)}}
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
                        // value={warrenty/AMC}
                        // onChange={(e)=>{setWarrenty/AMC(e.target.value)}}
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
                        label="Request for PR and Material Code"
                        // value={request_for_pr/material_code}
                        // onChange={(e)=>{setRequest_for_Pr/Material_code(e.target.value)}}
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
                        // value={request_for_purchase}
                        // onChange={(e)=>{setRequest_for_Purchase(e.target.value)}}
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
                            defaultvalue="itd@skipperlimited.com"
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
        </Box>          
        </>
          
        // <Box
        //     component="form"
        //     sx={{
        //         '& .MuiTextField-root': { m: 3, width: '25ch' }, marginTop:10
        //     }}
        //     noValidate
        //     autoComplete="off"
        // ><Navbar />   
        //     <div className='heading'>
        //         <Typography  component="div" variant="h5" >
        //             NEW MATERIAL PROCUREMENT FOR IT
        //         </Typography>
        //     </div><hr />
        //     <div>
        //         <TextField
        //             id="outlined-size-small"
        //             size="small"
        //             label="Status"
        //             placeholder="REQUISITIONER NAME"
        //             multiline
        //             required
        //         >
        //         </TextField>
        //         <TextField
        //             id="date"
        //             label="DATE OF REQUISITION"
        //             type="date"
        //             required
        //             // defaultValue="2017-05-24"
        //             size="small"
        //         />

        //         <TextField
        //             label="Location"
        //             id="outlined-size-small"
        //             size="small"
        //             select
        //             required
        //         >
        //             {input.map((option) => (
        //                 <MenuItem key={option.value} value={option.value}>
        //                     {option.label}
        //                 </MenuItem>
        //             ))}

        //         </TextField>

        //         <TextField
        //             label="ITEM DESCRIPTION & SPECIFICATION"
        //             placeholder="ITEM DESCRIPTION & SPECIFICATION"
        //             id="outlined-size-small"
        //             size="small"
        //             required
        //         />

        //         <TextField
        //             id="date"
        //             label="Date OF REQUIREMENT"
        //             type="date"
        //             // defaultValue="2017-05-24"
        //             required
        //             size="small"
        //         />

        //         <TextField
        //             id="outlined-size-small"
        //             select
        //             size="small"
        //             label="ITEM TYPE"
        //             required
        //         >
        //             {input.map((option) => (
        //                 <MenuItem key={option.value} value={option.value}>
        //                     {option.label}
        //                 </MenuItem>
        //             ))}
        //         </TextField>

        //         <TextField
        //             label="ITEM CODE"
        //             placeholder="ITEM CODE"
        //             multiline
        //             id="outlined-size-small"
        //             size="small"
        //             required
        //         />

        //         <TextField
        //             id="outlined-size-small"
        //             label="PURPOSE OF USE"
        //             placeholder="PURPOSE OF USE"
        //             size="small"
        //             required
        //         />

        //         <TextField
        //             id="outlined-size-small"
        //             select
        //             size="small"
        //             label="MAKE"
        //             required
        //         >
        //             {input.map((option) => (
        //                 <MenuItem key={option.value} value={option.value}>
        //                     {option.label}
        //                 </MenuItem>
        //             ))}
        //         </TextField>

        //         <TextField
        //             label="REQUIRED QUANTITY"
        //             placeholder="REQUIRED QUANTITY"
        //             multiline
        //             required
        //             // defaultValue="2017-05-24"
        //             size="small"
        //         />

        //         <TextField
        //             id="outlined-size-small"
        //             size="small"
        //             label="ESTIMATED VALUE(WITHOUT TAX)INR"
        //             // placeholder="ESTIMATED VALUE(WITHOUT TAX)INR"
        //             multiline
        //             required
        //         >
        //         </TextField>
        //         <TextField
        //             id="outlined-size-small"
        //             size="small"
        //             label="INDENTOR NAME"
        //             placeholder="INDENTOR NAME"
        //             multiline
        //             required
        //         >
        //         </TextField>

        //         <TextField
        //             id="date"
        //             label="OFFER RECEIVED DATE"
        //             type="date"
        //             // defaultValue="2017-05-24"
        //             required
        //             size="small"
        //         />
        //         <TextField
        //             label="HSN / SAC CODE"
        //             placeholder="HSN / SAC CODE"
        //             multiline
        //             id="outlined-size-small"
        //             size="small"
        //             required
        //         />
        //         <TextField
        //             id="date"
        //             label="DATE OF REQUEST/ APPROVED"
        //             type="date"
        //             // defaultValue="2017-05-24"
        //             required
        //             size="small"
        //         />
        //         <TextField
        //             label="Base unit of Measure"
        //             placeholder="Base unit of Measure"
        //             multiline
        //             id="outlined-size-small"
        //             size="small"
        //             required
        //         />
        //         <TextField
        //             size='small'
        //             id="outlined-textarea"
        //             label="Vendor Name"
        //             placeholder="Vendor Name"
        //             multiline
        //         />
        //         <TextField
        //             size='small'
        //             id="outlined-textarea"
        //             label="Vendor Code"
        //             placeholder="Vendor Code"
        //             multiline

        //         />
        //         <TextField
        //             size='small'
        //             id="outlined-textarea"
        //             label="Vendor Provisional GST"
        //             placeholder="Vendor Provisional GST"
        //             multiline
        //             variant='outlined'
        //         />
        //         <TextField
        //             size='small'
        //             id="outlined-textarea"
        //             label="Rate Without Tax (Rs.)"
        //             placeholder="Rate Without Tax (Rs.)"
        //             multiline
        //             variant='outlined'
        //         />
        //         <TextField
        //             id="outlined-size-small"
        //             select
        //             size="small"
        //             label="GST %"
        //             required
        //         >
        //             {input.map((option) => (
        //                 <MenuItem key={option.value} value={option.value}>
        //                     {option.label}
        //                 </MenuItem>
        //             ))}
        //         </TextField>
        //         <TextField
        //             id="outlined-size-small"
        //             select
        //             size="small"
        //             label="Payment Terms"
        //             required
        //         >
        //             {input.map((option) => (
        //                 <MenuItem key={option.value} value={option.value}>
        //                     {option.label}
        //                 </MenuItem>
        //             ))}
        //         </TextField>
        //         <TextField
        //             id="outlined-size-small"
        //             select
        //             size="small"
        //             label="Delivery Terms"
        //             required
        //         >
        //             {input.map((option) => (
        //                 <MenuItem key={option.value} value={option.value}>
        //                     {option.label}
        //                 </MenuItem>
        //             ))}
        //         </TextField>
        //         <TextField
        //             id="outlined-size-small"
        //             select
        //             size="small"
        //             label="Warranty/AMC(Start Date- End Date)"
        //             required
        //         >
        //             {input.map((option) => (
        //                 <MenuItem key={option.value} value={option.value}>
        //                     {option.label}
        //                 </MenuItem>
        //             ))}
        //         </TextField>
        //         <TextField
        //             id="outlined-size-small"
        //             select
        //             size="small"
        //             label="To Be Filled By Accounts Team REQUIRED DETAILS: Account Assignment Category/GL Account/Cost Center/Internal Order/Plan (To be provide by concern accounts person)"
        //             required
        //         >
        //             {input.map((option) => (
        //                 <MenuItem key={option.value} value={option.value}>
        //                     {option.label}
        //                 </MenuItem>
        //             ))}
        //         </TextField>
        //         <FormControl >
        //             <label htmlFor="contained-button-file">
        //                 <div className='upload'>
        //                 <FormLabel  id="demo-radio-buttons-group-label" required>Attachment of Approval & CS Documents</FormLabel>
        //                 <Input accept="image/*" id="contained-button-file" multiple type="file" /> &nbsp;
        //                 <Button variant="contained" component="span">
        //                     <FileUploadIcon />
        //                 </Button>
        //                 </div>
        //             </label>
        //         </FormControl>
        //         <TextField
        //             id="outlined-size-small"
        //             select
        //             size="small"
        //             label="Request for PR and Material Code"
        //             required
        //         >
        //             {input.map((option) => (
        //                 <MenuItem key={option.value} value={option.value}>
        //                     {option.label}
        //                 </MenuItem>
        //             ))}
        //         </TextField>
        //         <TextField
        //             id="outlined-size-small"
        //             select
        //             size="small"
        //             label="Request for Purchase / Service order"
        //             required
        //         >
        //             {input.map((option) => (
        //                 <MenuItem key={option.value} value={option.value}>
        //                     {option.label}
        //                 </MenuItem>
        //             ))}
        //         </TextField>
        //         <FormControl >
        //             <FormLabel id="demo-radio-buttons-group-label" required>Responsible Person</FormLabel>
        //             <RadioGroup
        //                 aria-labelledby="demo-radio-buttons-group-label"
        //                 defaultValue="itd@skipperlimited.com"
        //                 name="radio-buttons-group"
        //                 required
        //             >
        //                 <FormControlLabel value="itd@skipperlimited.com" control={<Radio />} label="itd@skipperlimited.com" />
        //             </RadioGroup>
        //         </FormControl>
        //         <div className='heading'>
        //             <Button variant="contained" > Submit </Button><hr />
        //         </div>
        //     </div>
        // </Box >
    );
}