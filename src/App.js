import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Componenets/login/Login';
import Home from './Componenets/home/Home';
import Inbox from './Componenets/inbox/Inbox';
import Signup from './Componenets/Signup';
import Navbar from './Componenets/Navbar';
import Form from './Componenets/Form';
import Empsep from './Componenets/Empsep';

import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      {/* <Login /> */}
      {/* <Signup /> */}
      <Router >
        <Navbar />
        <Routes>
        <Route exact path='/form' element={<Form />} />
        <Route exact path='/empsep' element={<Empsep />} />
 
          {/* <Route exact path='/' element={<Login />} /> */}
          {/* <Route exact path='/home' element={<Home />} />
          <Route exact path='/inbox' element={<Inbox />} />
          <Route exact path='/signup' element={<Signup />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
