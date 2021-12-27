import { useState } from 'react';

import {  BrowserRouter as Router,
  Switch,
  Route,
  Link } from "react-router-dom";
// import logo from '../logo.png';
import logo from '../hcm-logo.webp';

const Header = () => {
    return (
      
        <header className="header">
          <Link className="sm-font medium" to="/"> <img src={logo} className="logo" alt="logo" /></Link>
        <ul className="nav-list">

        <li>   <Link className="sm-font medium" to="/">Home</Link></li> 
           <li>   <Link className="sm-font medium" to="/about">about</Link></li>
           <li>    <Link className="sm-font medium" to="/research">research</Link></li>
           <li>    <Link className="sm-font medium" to="/publications">publications</Link></li>
           <li>   <Link className="sm-font medium" to="/People">People</Link></li>
        </ul>
      </header>
    )
}

export default Header