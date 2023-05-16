import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import RegistrationForm from './RegistrationForm';


export default function LoginForm() {
  const router = useRouter();


  const handleClick = () => {
    router.push('/RegistrationForm');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleLogin = async (event) => {
    event.preventDefault()
  
    try{
      const response = await fetch('./pages/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        },
      body: JSON.stringify({ username: email, password })
    })
    const data = await response.json()
      localStorage.setItem('token', data.token);
    }catch(error){
      console.error(error);
      setErrorMessage('An error occurred while logging in. Please try again.')
    }

  }

    return (
      <>
      <div className="w-screen h-screen flex justify-center items-center
          bg-gradient-to-br from-purple-700 to-amber-700">
        <form  className="p-10 bg-black rounded-xl drop-shadow-lg space-y-5" action="">
          <h1 className="text-center text-3xl">DoLittle, Inc.</h1>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-light" htmlFor="email"> 
            Email:
          </label>
          <input
            className="w-96 px-3 py-2 rounded-md border border-slate-400"
            type="email" 
            placeholder="Your Email" 
            name="email" id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-light" htmlFor="password">
            Password
          </label>
          <input
            className="w-96 px-3 py-2 rounded-md border border-slate-400"
            type="password" 
            placeholder="Your Password" 
            name="password" id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <input type="checkbox" name="remember" id="remember" />
          <label className="text-sm font-light" htmlFor="remember">
            Remember me
          </label>
        </div>

        <button className="w-full px-10 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 hover:drop-shadow-md duration-300 ease-in"
          type="submit">
            Sign In
        </button>

        <div className="text-left">
          <span className="text-blue-600 text-sm font-light hover:underline">
            {/* should redirect to registration.js page */}
             <button onClick = {handleClick}>Create an Account</button>
              {/* Create an Account */}
          </span>
      </div>

        <p className="text-right">
          <a className="text-blue-600 text-sm font-light hover:underline" href="..." >
            Forget Password?
          </a>
        </p>

      </form>

    </div>
    </>
    );
  }