import React from 'react';
import Login from '/components/LoginForm';
import Registration from '/components/RegistrationForm';
import Homepage from '/components/HomePageForm';
import {  createBrowserRouter, RouterProvider, BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import About from '/components/about';
import RegistrationForm from '../../components/RegistrationForm';


// const router = createBrowserRouter([{
//   path: "/",
//   element: <Homepage />,
// }]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

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