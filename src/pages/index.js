import React, { useState } from 'react';
import App from './app';
import Homepage from './homepage';
import axios from "axios";


export default function Home() {

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [query, setQuery] = useState("");
  // const [resuLt, setResult] = useState({});

  // const handleSearch = async (e) => {
  //   e.preventDefault();

  //   try{
  //     const response = await axios.get("https://api.github.com/users/" + query);
  //     console.log(response);
  //     setResult(response.data);
  //   }
  // }

  return (
    <App />
  );
}


