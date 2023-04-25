import React from 'react';
import Login from '../components/LoginForm';
import Registration from '../components/RegistrationForm';
import Homepage from '../components/HomePageForm';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <div className="Login">
    <Login/>


    {/* <Homepage /> */}
    

    {/* <div className="Registration">
    <Registration />
     
    </div> */}

    </div>
  );
}
export default App;