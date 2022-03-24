
import React from 'react';
import './topGrid.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export const TopGrid = ()=>{
  return (
    <div className="grid">

      <div className="grid-item">
        <div className="card">
          <img className="card-img" src="images/El-Castillo-pyramid-plaza-Toltec-state-Yucatan.jpg" alt="castiloo image" />
            <div className="card-content">
              <h1 className="card-header">Chichén Itzá</h1>
              <p>Chichen Itza was one of the largest Maya cities and it was likely to have been one of the mythical great cities... </p>
              <button className="card-btn">Visit<span>&rarr;</span></button>
            </div>
        </div>
      </div>

      <div className="grid-item">
        <div className="card">
          <img className="card-img" src="images/Cover1.jpg" alt="Chinam wall image" />
            <div className="card-content">
              <h1 className="card-header">Colosseum</h1>
              <p>It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world...</p>
              <button className="card-btn">Visit<span>&rarr;</span></button>
            </div>
        </div>
      </div>

      <div className="grid-item">
        <div className="card" id="down-card1">
          <img className="card-img" src="images/Machu_Picchu-1070x602.jpg" alt="Chinam wall image" />
            <div className="card-content">
              <h1 className="card-header">Machu Picchu</h1>
              <p>Machu Picchu was built in the classical Inca style, with polished dry-stone walls. Its three primary structures...</p>
              <button className="card-btn">Visit<span>&rarr;</span></button>
            </div>
        </div>
      </div>

      <div className="grid-item">
        <div className="card" id="down-card">
          <img className="card-img" src="images/Pyramid-of-Giza.jpg" alt="pyramid image" />
            <div className="card-content">
              <h1 className="card-header">Giza Pyramids</h1>
              <p>The Great Pyramid and the Pyramid of Khafre are the largest pyramids built in ancient Egypt...</p>
              <button className="card-btn">Visit<span>&rarr;</span></button>
            </div>
        </div>
      </div>
    </div>
  )
}
