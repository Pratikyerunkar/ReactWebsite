import React from 'react';
import ReactDOM from 'react-dom';
import './bottomGrid.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const BottomGrid = ()=>{
  return (
    <div className="grid-down">

      <div className="grid-item">
        <div className="card" id="down-card">
          <img className="card-img" src="images/taj.jpg" alt="taj image" />
            <div className="card-content">
              <h1 className="card-header">Taj Mahal</h1>
              <p>The Taj Mahal was commissioned by Shah Jahan in 1631, to be built in the memory of his wife... </p>
              <button className="card-btn">Visit<span>&rarr;</span></button>
            </div>
        </div>
      </div>

      <div className="grid-item">
        <div className="card">
          <img className="card-img" src="images/Great-Wall-of-China-Beijing.jpg" alt="Chinam wall image" />
            <div className="card-content">
              <h1 className="card-header">Great Wall of China</h1>
              <p>The collection of fortifications known as the Great Wall of China has historically had a...</p>
              <button className="card-btn">Visit<span>&rarr;</span></button>
            </div>
        </div>
      </div>

      <div className="grid-item">
        <div className="card">
          <img className="card-img" src="images/christ-rio-de-janeiro.jpg" alt="brazil image" />
            <div className="card-content">
              <h1 className="card-header">Christ Redeemer	</h1>
              <p>Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil...</p>
              <button className="card-btn">Visit<span>&rarr;</span></button>
            </div>
        </div>
      </div>
    </div>
  )
}
