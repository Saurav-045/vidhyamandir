import React from "react";
import cssstyle from './index.css';
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Key_program from "./Key_program";
import Impact from "./Impact";
import Volunteer from "./Volunteer";
import Stakeholders from "./Stakeholders";
import Footer from "./Footer";
import { BrowserRouter as Router,Route,Routes, Switch,BrowserRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSharp, faSolid, faLaptop } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
  return (
    <>
    <Navbar />
    <Carousel />
    <Key_program />
    <Impact />
    <Stakeholders />
    <Volunteer />
    <Footer />
    </>
  );
}


export default Home;