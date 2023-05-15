import React from 'react';
import Login from '/components/LoginForm';
import Registration from '/components/RegistrationForm';
import Homepage from '/components/HomePageForm';
import {  createBrowserRouter, RouterProvider, BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import About from './about';


const router = createBrowserRouter([{
  path: "/",
  element: <Homepage />,
}]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

function App() {
  return (
    <Router>
    <div className='App'>
      <Switch>
        <Route path='/' component = {Homepage}/>
          <Route path="/sign-in" exact component={<Login />} />
          <Route path="/sign-up" element={<Registration />} />
          <Route path="/about" element={<About />} />
      </Switch>
    </div>
    </Router>
  );
}
export default App;
