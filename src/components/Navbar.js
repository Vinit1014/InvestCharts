import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id="navbarSticky" className="navbar">
      <div className="navbar-logo">
        <h3>InvestCharts</h3>
      </div>
      {/* <ul className="navbar-links">
        <li>
          Home
        </li>
        <li>
          About Us
        </li>
        <li>
            Contact Us
        </li>
      </ul> */}
    </nav>
  )
}

export default Navbar;