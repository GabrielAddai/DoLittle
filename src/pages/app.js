import React from 'react';
import Login from '../components/LoginForm'
import About from './about';
import Homepage from './homepage';
import {  createBrowserRouter, RouterProvider, BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


export default function App() {
  return (
    <Homepage />
  );
}

