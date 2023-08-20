import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light custom-navbar  sticky-top">
      <div className="navbar-brand logo">ValoPedia</div>
      <button className="navbar-toggler" type="button" onClick={toggleMenu}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={()=>setMenuOpen(!menuOpen)}>Home</Link>
          </li>
          <li className="nav-item dropdown">
            <div className="nav-link dropdown-toggle" >Explore</div>
            <div className="dropdown-menu">
              <div className="dropdown-item">
                <Link className='dropdownlink' onClick={()=>setMenuOpen(!menuOpen)} to="/agents">Agents</Link>
              </div>
              <div className="dropdown-divider"></div>
              <div className="dropdown-item">
                <Link className='dropdownlink' to="/weapon" onClick={()=>setMenuOpen(!menuOpen)}>Weapons</Link>
              </div>
              <div className="dropdown-divider"></div>
              <div className="dropdown-item">
                <Link className='dropdownlink' to="/skins" onClick={()=>setMenuOpen(!menuOpen)}>Skins</Link>
              </div>
              <div className="dropdown-divider"></div>
              <div className="dropdown-item">
                <Link className='dropdownlink' to="/maps" onClick={()=>setMenuOpen(!menuOpen)}>Maps</Link>
              </div>
              <div className="dropdown-divider"></div>
              <div className="dropdown-item">
                <Link className='dropdownlink' to="/bundles" onClick={()=>setMenuOpen(!menuOpen)}>Gun Bundles</Link>
              </div>
              <div className="dropdown-divider" ></div>
              <div className="dropdown-item">
                <Link className='dropdownlink' to="/sprays" onClick={()=>setMenuOpen(!menuOpen)}>Sprays</Link>
              </div>
              
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
