import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div data-aos="flip-left"
    data-aos-duration ="1000">
    <nav className="navbar navbar-expand-md navbar-light bg-white  
    ">
      <div className="container-fluid px-5">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite Logo" className="ms-5" style={{ height: '40px' }} />
          <span className="navbar-brand-text ms-5">Flowbite</span>
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleMenu} 
          aria-expanded={isOpen} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/create-food" className="nav-link">Create food</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;




