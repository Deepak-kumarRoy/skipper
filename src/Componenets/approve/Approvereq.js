import React,{useState,useEffect} from 'react';
import "./approvereq.css";
import Navbar from '../Navbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import API from "../../Utilities/Api";

const columns = [
  { field: 'id', headerName: 'Req ID', width: 100},
  { field: 'requester', headerName: 'Requester', width: 100},
  { field: 'description', headerName: 'Description', width: 440 },
  { field: 'wf_name', headerName:'Workflow',width: 150},
  { field: 'dode', headerName: 'DODE', width: 210},
  { field: 'status', headerName: 'Status', width: 70},
  { field: 'pause', headerName: 'Pause', width: 70},
  { field: 'parent', headerName: 'Parent', width: 70},
  
];


export default function Approvereq() {

  const [value,setValue] = useState([]);

  let navigate = useNavigate();

  var Obj = window.localStorage.getItem("response");
  var user = JSON.parse(Obj).userLogin;
  var Token = JSON.parse(Obj).accessToken;

  function handleData(e){
    navigate('/display/'+e.id) ;
  }

useEffect(()=>{

  fetch(API.workflow ,
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
      setValue(response.result)
      console.log(response)
    })
    .catch((error) => {
      console.error(error);
    });

},[])



  const rowdata = value?.map(list => {
    return{
      id: list?.wi_id,
      requester:list?.u_firstname,
      description:list?.wf_descr,
      wf_name:list?.wf_wf_name,
      dode:list?.wi_dode,
      status:list?.wi_wf_status,
      parent:list?.parent,
      Pause:list?.pause
    }
  })


  return (
    <>
      <Navbar />
      <div className='alignment'>
      <Typography component="div" variant="h5" >
           PENDING REQUESTS
        </Typography>
        </div> 
    <div className='back'  style={{ height: 370, width: '95%', }}>
      
      <DataGrid
        // key={}
        onRowClick={(e)=>{handleData(e)}}
        rows={rowdata}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    </>
  );
}

