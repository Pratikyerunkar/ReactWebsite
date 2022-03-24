import './about.css';
import React from 'react';
import {Navigation} from '../pages/navigation.js';

export const About = () => {

  return (
    <div className="main-container">
    <Navigation />
    <div className="about-container">
      <div className="about"><h1 className="about-headers">About</h1></div>
      <div className="image">
        <div className="img">
          <img className="title-image" src={process.env.PUBLIC_URL+"images/world.jpg"} alt="world-image" />
        </div>
        <div className="about-heading">
          <h3 className="heading">7AjuBass</h3>
          <p className="about-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
             specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. </p>
        </div>

      </div>

    </div>
    </div>
  )
}
