//import Link from 'next/link'
import React, { useState } from 'react';
import axios from "axios";
import { useRouter } from 'next/router';


export default function RegistrationForm() {

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [error, setError] = useState("");
  // const router = useRouter();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (password !== confirmPassword) {
  //     setError("Passwords do not match");
  //     return;
  //   }

  //   try {
  //     const response = await axios.post("/api/signup", {
  //       email,
  //       password,
  //     });

  //     if (response.status === 201) {
  //       router.push("/");
  //     }
  //   } catch (error) {
  //     setError(error.response.data.message);
  //   }
  // };

    return (
        <div className="container mx-auto py-8">
  <h1 className="text-2xl font-bold mb-6 text-center">Registration Form</h1>
  <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="name"
      >
        Name
      </label>
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        type="text"
        id="name"
        name="name"
        placeholder="John Doe"
      />
    </div>
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="email"
      >
        Email
      </label>
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        type="email"
        id="email"
        name="email"
        placeholder="john@example.com"
      />
    </div>
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="password"
      >
        Password
      </label>
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        type="password"
        id="password"
        name="password"
        placeholder="********"
      />
    </div>
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="confirm-password"
      >
        Confirm Password
      </label>
      
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        type="password"
        id="confirm-password"
        name="confirm-password"
        placeholder="********"
      />
    </div>
    <button
      className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
      type="submit">Register</button>

  </form>
</div>
    );
}
