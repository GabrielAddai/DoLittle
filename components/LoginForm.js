import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';


const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event){
    event.preventDefault();


  }
    return (
        
    <div className="w-screen h-screen flex justify-center items-center
        bg-gradient-to-br from-purple-700 to-amber-700">

    <form className="p-10 bg-black rounded-xl drop-shadow-lg space-y-5" action="">
      <h1 className="text-center text-3xl">DoLittle, Inc.</h1>
      <div className="flex flex-col space-y-2">

        <label className="text-sm font-light" htmlFor="email"> Email:</label>

        <input
          className="w-96 px-3 py-2 rounded-md border border-slate-400"
          type="email" placeholder="Your Email" name="email" id="email"
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
          name="password"
          id="password"
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

      <p className="text-left">
        <div className="text-blue-600 text-sm font-light hover:underline">
          {/* should redirect to registration.js page */}
          <Link href = "../registration"> <a>Create an Account </a></Link> 
            {/* Create an Account */}
        </div>
    </p>

      <p className="text-right">
        <a className="text-blue-600 text-sm font-light hover:underline" href="..." >
          Forget Password?
        </a>
      </p>

    </form>

  </div>
  
  );
}
export default Login;