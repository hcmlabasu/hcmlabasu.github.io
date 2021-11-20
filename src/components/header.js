import { useState } from 'react';

import {  BrowserRouter as Router,
  Switch,
  Route,
  Link } from "react-router-dom";
import logo from '../logo.png';
const Header = () => {
    return (
      
        <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <ul className="nav-list">

        <li>  <Link to="/">Home</Link></li> 
           <li>   <Link to="/about">about</Link></li>
           <li>   <Link to="/research">research</Link></li>
           <li>   <Link to="/publications">publications</Link></li>
           <li>  <Link to="/People">People</Link></li>
        </ul>
      </header>
    )
}

export default Header