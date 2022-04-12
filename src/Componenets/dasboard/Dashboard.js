import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import './dasboard.css';

export default function Dashboard(){

    let navigate = useNavigate();

    var Obj = window.localStorage.getItem("response");
    let menu = JSON.parse(Obj).data;
    var path; 
    var main;
  
    menu.map((item,index)=>{
        main = item.m_display_text;
        path = item.m_logical_path;
    })

    const navigateTo = (index) => {
    //  console.log(path[index])
    navigate(path[index])
    }

    return(
        <>
        <Navbar />


<div className="allCard">
{main.map((item,index)=>{return(
<div className="card" key={index} onClick={()=>{navigateTo(index)}}>
  <div className="container">
    <h5><b>{item}</b></h5>  
  </div>
</div>
)})}
<div className="card" onClick={()=>{navigate('/notification')}}>
  <div className="container">
    <h4><b>Notification</b></h4>
  </div>
</div>
<div className="card" >
  <div className="container">
    <h4><b>John Doe</b></h4>
  </div>
</div>

</div>


        </>
    );
}