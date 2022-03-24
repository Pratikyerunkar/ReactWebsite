import './heading.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React, {Fragment, Component } from 'react';
import {Navigation} from './navigation.js';
import {TopGrid} from './topGrid.js';
import {BottomGrid} from './bottomGrid.js';
import {Explore} from './explore.js';
import {Footer} from './footer.js';

import {Contact} from '../contact/contact.jsx';



export const Headers = () =>{
  return (

    <>
      <div className="container-fluid">
        <Navigation />

        <div className="heading">
          <div className="row">
            <div className="title col-lg-6">
              <h1 className="big-heading">Seven AjuBass</h1>
              <p className="intro-para">Life is either a daring adventure or nothing. Let's go for the Adventures.</p>
              <a className="explore" role="button"><button type="button" className="btn btn-primary btn-lg" href="#">Explore</button></a>
            </div>
            <div className="col-lg-6">
              <img className="title-image" src={process.env.PUBLIC_URL+"images/globe-700.jpg"} alt="globe-image" />
            </div>
          </div>
        </div>
        <TopGrid />
        <BottomGrid / >
        <Explore />
        <Footer />

      </div>

    </>


  )
}
