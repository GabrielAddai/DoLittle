import React, { useState } from 'react';
import App from './app';
import axios from "axios";
import Layout from "/components/Layout";
import SearchPage from "/components/SearchPage";
import RegistrationForm from '../../components/RegistrationForm';
import LoginForm from '../../components/LoginForm';


// export default function Home() {

//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");
//   // const [confirmPassword, setConfirmPassword] = useState("");
//   // const [query, setQuery] = useState("");
//   // const [resuLt, setResult] = useState({});

//   // const handleSearch = async (e) => {
//   //   e.preventDefault();

//   //   try{
//   //     const response = await axios.get("https://api.github.com/users/" + query);
//   //     console.log(response);
//   //     setResult(response.data);
//   //   }
//   // }


//   return (
    
//     <div>
//       <App />
//     </div>
//   );
// }

const Home = () => {
  return (
    
    <div>
      <App />
    </div>
  );
};

export default Home;


