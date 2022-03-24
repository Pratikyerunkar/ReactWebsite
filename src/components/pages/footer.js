import React from 'react';
import ReactDOM from 'react-dom';
import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {FontAwesomeIcon} from  '@fortawesome/react-fontawesome'
import {faTwitter, faYoutube, faInstagram, faWikipediaW} from '@fortawesome/free-brands-svg-icons'

export const Footer = ()=>{
  return (
    <footer className="white-section" id="footer">
      <a className="footer-icon" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
      <a className="footer-icon" href="#"><FontAwesomeIcon icon={faYoutube} /></a>
      <a className="footer-icon" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
      <a className="footer-icon" href="#"><FontAwesomeIcon icon={faWikipediaW} /></a>
      <p className="copy-footer">© Copyright AjuBass</p>
    </footer>
  )
}
