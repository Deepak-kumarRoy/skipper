import React,{useState,useEffect} from 'react';
import "./notification.css";
import Navbar from '../Navbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { keyboard } from '@testing-library/user-event/dist/keyboard';


const columns = [
  
  { field: 'id', headerName: 'ID', width: 50},
  { field: 'user', headerName: 'Requester', width: 100 },
  { field: 'request', headerName: 'Request Name', width: 155 },
  { field: 'descr', headerName: 'Description', width: 355 },
  { field: 'approver', headerName: 'Approver', width: 100 },
  { field: 'comment', headerName: 'Comment', width: 440 },
  { field: 'status', headerName: 'Status', width: 85 },
  { field: 'date', headerName: 'Date', width: 83 },
];


export default function Notification() {

  const [value,setValue] = useState([]);


  var Obj = window.localStorage.getItem("response");
  var user = JSON.parse(Obj).userLogin;
  var Token = JSON.parse(Obj).accessToken;

  let navigate = useNavigate();


useEffect(()=>{

  fetch(
    'http://localhost:5000/authentication/status',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authentication: Token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user}),
    }
  )
    .then((response) => response.json())
    .then((response) => {
      setValue(response.data)
      console.log(response)
    })
    .catch((error) => {
      console.error(error);
    });

},[])



  const rowdata = value.map((list,index) => {
    
    return{
     
      id: list.wt_id,
      user: list.u_firstname,
      status: list.wt_task_status,
      comment: list.wt_comment,
      date:list.wi_dode,
      request:list.wf_wf_name,
      descr:list.wf_descr,
      approver:list.us_firstname,
    }
  })

  function handleData(e){
    
    navigate('/editrequest/'+e.id) ;
      console.log(e)
    
  }

  return (
    <>
      <Navbar />
      <div className='alignment'>
      <Typography component="div" variant="h5" >
          NOTIFICATION INBOX
        </Typography>
        </div> 
    <div className='back'  style={{ height: 570, width: '95%', }}>
      
      <DataGrid
        // key={}
        onRowClick={(e)=>{handleData(e)}}
        rows={rowdata}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    </>
  );
}

