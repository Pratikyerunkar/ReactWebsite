import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Headers} from './components/pages/heading.js';
import {About} from './components/about/about.js';
import {Contact} from './components/contact/contact.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path='/' element={<Headers />} />
        <Route path='/about' element={<About />} />
        <Route exact path='contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App;
