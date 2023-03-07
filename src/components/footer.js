import { useState } from 'react';

import asuLogo from '../asu-logo.png';
import logo from '../logo.png';
const Footer = () => {
    return (
      
        <footer className="footer">
          <div>
          <img src={asuLogo} className="asu-logo"  alt="ASU logo"/>
          <img src={logo} className="hcm-logo" alt="logo" />
          </div>
          <div>
          <span className="sm-font medium"> Address | </span>
          <a className="sm-font medium" href="mailto:mohammed.awad@eng.asu.edu.eg">mohammed.awad@eng.asu.edu.eg </a>
          </div>
          {/* <p className="sm-font light">Address: Address</p>
          <p className="sm-font light">email: hcm.lab.asu@gmail.com</p>
          <p className="sm-font light">number: 012X XXXX XXX</p> */}
          <p className="xs-font light">©2021 HUMAN CENTERED MECHATRONICS LAB</p>
      </footer>
    )
}

export default Footer