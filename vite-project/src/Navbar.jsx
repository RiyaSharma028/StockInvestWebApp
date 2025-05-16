import React from "react";

function Navbar() {
  return (
   <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top py-2" style={{fontSize : "10px"}}>
  <div className="container d-flex justify-content-between align-items-center">
    
    {/* Left: Logo */}
    <a className="navbar-brand" href="#">
      <img src="/Media/logo.svg" alt="Logo" style={{ width: "200px" }} />
    </a>

    {/* Right: Nav Links */}
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav me-3">
        <li className="nav-item  me-3 fs-4">
          <a className="nav-link" href="#">SignUp</a>
        </li>
        <li className="nav-item me-3 fs-4">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item me-3 fs-4">
          <a className="nav-link" href="#">Products</a>
        </li>
        <li className="nav-item me-3 fs-4">
          <a className="nav-link" href="#">Pricing</a>
        </li>
         <li className="nav-item me-3 fs-4">
          <a className="nav-link" href="#">Support</a>
        </li>
      </ul>
    </div>

  </div>
</nav>


  )
}

export default Navbar;
