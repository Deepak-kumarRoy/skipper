import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './createreq.css';
import Navbar from "../Navbar";

export default function Createreq() {

  let navigate = useNavigate();

  var Obj = window.localStorage.getItem("response");
  let menu = JSON.parse(Obj).submenu;

  return (
    <>
      <Navbar />

      <div className="submenu">
        {menu.map((item, index) => {
          return (
            <div className="listItem" key={index} onClick={() => { navigate(item.d_logical_path) }}>
              <div className="list">
                <h5><b>{item.d_display_text}</b></h5>
              </div>
            </div>
          )
        })}

      </div>
    </>
  );
}