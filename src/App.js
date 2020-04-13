import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Route} from "react-router-dom";
import Home from './pages/home/HomeContainer'
export default function App(){
  return(
    <BrowserRouter>
    <Route path="/" exact component={Home}/>
    </BrowserRouter>
  );
}
