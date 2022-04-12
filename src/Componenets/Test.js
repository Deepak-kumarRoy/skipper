import React,{useEffect} from 'react';

export default function Test(){

    var Obj = window.localStorage.getItem("response");
    var Token = JSON.parse(Obj).accessToken;
  
  
  useEffect(()=>{
  
    fetch(
      'http://localhost:5000/authentication/dec',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authentication: Token,
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({user}),
      }
    )
      .then((response) => response.json())
      .then((response) => {
        // setValue(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  
  },[])
  


    return(
        <>
        <h1>Hello world</h1>
        </>
    )
}