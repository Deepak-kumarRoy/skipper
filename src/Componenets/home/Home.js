import React from "react";
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';
import { blue } from "@mui/material/colors";
import "./home.css";

export default function Home() {
    return (
        <div className="container-fluid row my-5 ">
            <div className="maincontent card text-center col-md-3 shadow">
            <AssignmentOutlinedIcon style={{ fontSize: 60, color: blue[500], marginTop:10 }}/><hr />
            <h5 className="my-5">Create ETC/Order</h5>
            <p><small className="bottom"><a href="">Create ETC/Order</a></small></p>
            </div>
            <div className="sub card text-center col-md-3 shadow">
            <FormatListBulletedOutlinedIcon style={{ fontSize: 60, color: blue[500], marginTop:10 }}/><hr />
                <h5 className="my-5">My ETC/Order Inbox</h5>
                <p><small className="bottom"><a href="">Display Order List</a></small></p>
            </div>
        </div>
    )
}