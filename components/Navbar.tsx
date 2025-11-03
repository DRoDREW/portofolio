'use client';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <a className="navbar-brand text-light" href="#">Portfolio</a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-light" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;