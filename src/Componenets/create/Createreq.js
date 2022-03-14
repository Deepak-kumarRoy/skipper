import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import './createreq.css';
import Navbar from "../Navbar";



export default function Createreq() {

    let navigate = useNavigate();

    var Obj = window.localStorage.getItem("response");
    let menu = JSON.parse(Obj).data;
    var path; 
    var main;
  
    menu.map((item,index)=>{
      main = item.sm_display_text;
      path = item.sm_logical_path;
    })

    const navigateTo = (index) => {
    //  console.log(path[index])
    navigate(path[index])
    }

  return (
      <>
      <Navbar />
      {/* <div className="menuhead">
      {main.map((item,index)=>{return(
     <Card key={index} onClick={()=>{navigateTo(index)}}>
       <div className="submenu">
      <CardContent>
        <Typography variant="h6" component="div">
            {item}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" >{item}</Button>
      </CardActions>
      </div>
    </Card>)})}
    </div> */}

<div className="submenu">
{main.map((item,index)=>{return(
<div className="listItem" key={index} onClick={()=>{navigateTo(index)}}>
  <div className="list">
    <h5><b>{item}</b></h5>  
  </div>
</div>
)})}
<div className="listItem">
  <div className="list">
    <h4><b>John Doe</b></h4>
  </div>
</div>
<div className="listItem">
  <div className="list">
    <h4><b>John Doe</b></h4>
  </div>
</div>
</div>
    </>
  );
}