import React from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import './dasboard.css';

export default function Dashboard() {

  let navigate = useNavigate();

  var Obj = window.localStorage.getItem("response");
  let menu = JSON.parse(Obj).data;

  return (
    <>
      <Navbar />
      <div className="allCard">
        {menu.map((item, index) => {
          return (
            <div className="card" key={index} onClick={() => { navigate(item.a_logical_path) }}>
              <div className="container">
                <h5><b>{item.a_display_text}</b></h5>
              </div>
            </div>
          )
        })}

      </div>
    </>
  );
}