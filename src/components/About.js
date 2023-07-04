import React from "react";
import "./About.css";
import img from "./assets/project img1.jpg";
import image2 from "./assets/hands.jpg";
import image3 from "./assets/image3.jpg";
import image4 from "./assets/image4.jpg";
import image5 from "./assets/binod.jpg"
import image6 from "./assets/chandrakant.jpg"
import image7 from "./assets/hari.jpg"
import image8 from "./assets/john.jpg"
import image9 from "./assets/aditya.jpg"
import image10 from "./assets/farhat.jpg"
import image11 from "./assets/atul.jpg"
import image12 from "./assets/deepak.jpg"
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <div className="heading">
        <h1>ABOUT US</h1>
        <div className="left">
        
        <p > 
            <HomeIcon className="icon"/> Home<ArrowForwardIcon fontSize="10px" className="icon"/>  About Us</p>

        </div>
      </div>
        <div className="wrapper">
          <div className="group1">
            <div className="text">
              <h2>Our Mission and Our Work</h2>
              <p>
                Democratize the social and economic benefits and make the
                underprivileged & under resourced people work wonders for
                themselves and the community.
              </p>
              <h2>Vision</h2>
              <p>
                Our vision is to cause and enable sustainable social change by
                reducing poverty, inequality and encouraging social justice by
                educating the children, enabling youth through employment
                generation, empowering women and supporting the farmers. We want
                to be a platform and actor that enables, encourages and inspires
                sustainable, harmonious and inclusive changes in society and the
                environment.
              </p>
            </div>
            <img className="images" src={img} alt="A man speaking" />
        </div>
      </div>

      <div className="wrapper2">
        <div className="group2">
          <div className="text2">
          <h2>Our Methodology</h2>
            <ul>
              <li>Technology-driven and supported by partnerships</li>
              <li>Focus on outcome effectiveness and scaling</li>
              <li>Quality framework & Best Practices approach complied to</li>
              <li>
                Driven by making ecologically sustainable and commercially
                viable models.
              </li>
              <li>Technology-driven and supported by partnerships</li>
              SSF targets to generate significant internal funding to support
              development programs.
            </ul>
          </div>
          <img className="images2" src={image2} />
        </div>
      </div>

      <div className="wrapper3">
        <div className="group3">
        <h1>Our Governance</h1>
          <div className="text3">
            <h2>Advisory Committe</h2>
            <ul>
              <li>
                Representatives from diverse countries, origins, professional
                backgrounds along with local community representation.
              </li>
              <li>
                Management Team - Qualified management experts, consulting and
                academic professionals. Working based on periodic task
                checklists.
              </li>
            </ul>
          </div>
          <img className="images3" src={image3} />
        </div>
      </div>

      <div className="wrapper4">
        <div className="group4">
        <div className="text4">
      <h2>Audit</h2>
      <ul>
        <li>External Audit and Internal Audit with separate reporting lines.</li>
        <li>
          External audit by donors audit (At Donor's discretion) & Quality
          Auditors.
        </li>
        <li>
          Quality Audit - Best Practices approaches and quality framework
          complied to.
        </li>
      </ul>
      </div>
      <img className="images4" src={image4} />
    </div>
    </div>

    <div className="wrapper5"> 
        <h1>Our Mentors</h1>
        <p>Learn more about our team members</p>
        <div className="grid">
   
            <img src={image5}/>
            <img src={image6}/>
            <img src={image7}/>
            <img src={image8}/>
        </div>
    </div>

    <div className="wrapper6"> 
        <h1>Our Advisors</h1>
        <p>Learn more about our team members</p>
        <div className="grid">
   
            <img src={image9}/>
            <img src={image10}/>
            <img src={image11}/>
            <img src={image12}/>
        </div>
    </div>
    </div>
  );
}

export default About;
