import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Navbar';
import Home from './Home';
import Carousel from "./Carousel";
import Key_program from "./Key_program";
import Impact from "./Impact";
import Volunteer from "./Volunteer";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Corporate from './Corporate';
import Stakeholders from './Stakeholders';
import Getinvolved from './Getinvolved';
import Footer from './Footer';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path="/navbar" Component={Navbar} />
          <Route exact path="/carousel" Component={Carousel} />
          <Route exact path="/key_program" Component={Key_program} />
          <Route exact path="/impact" Component={Impact} />
          <Route exact path='/stakeholders' Component={Stakeholders} />
          <Route exact path="/volunteer" Component={Volunteer} />
          <Route exact path='/getinvolved' Component={Getinvolved} />
          <Route excat path='/getinvolved/corporate' Component={Corporate} />
          <Route exact path='/footer' Component={Footer} />
        </Routes>
      </Router>
    </>
  );
}

export default App;