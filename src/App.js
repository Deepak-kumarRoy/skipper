import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Componenets/login/Login';
import Home from './Componenets/home/Home';
import Display from './Componenets/approve/Display';
import Approvereq from './Componenets/approve/Approvereq';
import Notification from './Componenets/notification/Notification'
import Dashboard from './Componenets/dasboard/Dashboard';
import Signup from './Componenets/signup/Signup';
import Form from './Componenets/asset requisition/Form';
import Empsep from './Componenets/employee seperation/Empsep';
import Subform from './Componenets/employee seperation/Subform';
import MaterialPurchased from './Componenets/material/MaterialPurchased';
import Editrequest from './Componenets/edit/Editrequest';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import './App.css';
import Createreq from './Componenets/create/Createreq';

function App() {

  let Obj = window.localStorage.getItem("response");
 

  return (
    <div>
      <Router > 
        <Routes>
        <Route exact path='/' element={<Login />} ></Route>
        <Route exact path='/signup' element={<Signup />} ></Route>
        <Route exact path='/approvereq' element={<Approvereq />} ></Route>
        <Route exact path='/form' element={<Form />} > </Route>
        <Route exact path='/empsep' element={<Empsep />} ></Route>
        <Route exact path='/subform' element={<Subform />} ></Route>
        <Route exact path='/dashboard' element={<Dashboard />}></Route>
        <Route exact path='/home' element={<Home />} ></Route>
        <Route exact path='/display/:id' element={<Display />} ></Route>
        <Route exact path='/editrequest/:id' element={<Editrequest />} ></Route>
        <Route exact path='/createreq' element={<Createreq />} ></Route>
        <Route exact path='/materialpurchased' element={<MaterialPurchased />} ></Route>
        <Route exact path='/notification' element={<Notification />} ></Route>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
