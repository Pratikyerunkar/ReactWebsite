
import React from 'react';
import './navigation.css';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './heading.js';

export const Navigation = () => {
  return (
    <div className="bar">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="title-heading" href="#"><span className="seven-number">7</span>AjuBass</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav flex-wrap ms-md-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link" >Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" >About</Link>
              </li>
              <li className="nav-item">
                <Link to='/contact' className="nav-link" aria-current="page" >Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
