import React, { useState } from 'react';
import App from './app';
// import Link from 'next/link';

export default function Home() {
  return (
    
    <div>
      <App />
    </div>
  );
}


// ReactDOM.render(
// <React.StrictMode>
//      <App />
// </React.StrictMode>,
// document.getElementById('root')
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( <App />);


// function LoginPage() {
//   const [email, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (event) => {
//     event.preventDefault();

//     // Authenticate the user with the backend
//     // and redirect them to the dashboard if successful
//     console.log(`Logging in with ${email} and ${password}`);
//   };
