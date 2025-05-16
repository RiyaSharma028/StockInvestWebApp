import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
   <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top py-2" style={{fontSize : "10px"}}>
  <div className="container d-flex justify-content-between align-items-center">
    
    {/* Left: Logo */}
    <Link to="/"className="navbar-brand">
      <img src="/Media/logo.svg" alt="Logo" style={{ width: "200px" }} />
    </Link>

    {/* Right: Nav Links */}
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav me-3">
        <li className="nav-item  me-3 fs-4">
          <Link to="/signup" className="nav-link" >SignUp</Link>
        </li>
        <li className="nav-item me-3 fs-4">
          <Link to="/About" className="nav-link">About</Link>
        </li>
        <li className="nav-item me-3 fs-4">
          <Link to="/Product" className="nav-link">Products</Link>
        </li>
        <li className="nav-item me-3 fs-4">
          <Link to="/Pricing" className="nav-link">Pricing</Link>
        </li>
         <li className="nav-item me-3 fs-4">
          <Link to="/Support" className="nav-link">Support</Link>
        </li>
      </ul>
    </div>

  </div>
</nav>


  )
}

export default Navbar;
