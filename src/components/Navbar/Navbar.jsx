import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
  return (
    <>
     <nav className="navbar navbar-expand-lg fixed-top  ">
  <div className="container">
    <Link
 className="navbar-brand text-uppercase text-white  " to="/">Start framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
      <ul className="navbar-nav w-100 d-flex justify-content-end ">
        <li className="nav-item">
          <NavLink
 className="nav-link text-white " aria-current="page" to="about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink
 className="nav-link text-white " to="portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink
 className="nav-link text-white " to="contact">Contact</NavLink>
        </li>
       
        
      </ul>
    
    </div>
  </div>
</nav>
    
    </>
  )
}
