import React from 'react';
import { Link } from 'react-router-dom';
import homeicon from "./Assets/home.svg";
import greaterthan from "./Assets/greaterthan.svg";
import fb from "./Assets/fb.svg";
import insta from "./Assets/insta.svg";
import twitter from "./Assets/twitter.svg";
import yt from "./Assets/yt.svg";
import col2 from "./Assets/col2.jpg";
import img2 from "./Assets/img2.jpg";
import img1 from "./Assets/img1.jpg";
import i1 from "./Assets/i1.gif";
import i2 from "./Assets/i2.gif";
import i3 from "./Assets/i3.gif";
import Carousel from './Carousel';

export default function OurPrograms() {
  return (
    <div>
      <div className='header1 container-fluid'>
        <div className='row'>
          <div className='col-12 col-md-3 d-flex justify-content-center align-items-center'>
            <img alt="..." src={fb} className='mx-3' />
            <img alt="..." src={insta} className='mx-3' />
            <img alt="..." src={twitter} className='mx-3' />
            <img alt="..." src={yt} className='mx-3' />
          </div> 
          <div className='col-12 col-md-9 font-weight-bolder d-flex justify-content-end socialmediaicons px-5 container'>
            <span className='global-networks'>Global Networks</span>
          </div>
        </div>
      </div>

      <div className='bg'>
        <div className='row container'>
          <div className='col-12 col-md-6'>
            <h1 className='text-white d-flex justify-content-center align-items-center bgtext1 font-weight-bolder'>Program</h1>
          </div>
          <div className='col-12 col-md-6 abc d-flex justify-content-center align-items-center'>
            <Link className="text-white" to="/">
            <img alt="..." src={homeicon} className='mx-1' /> Home
            </Link>
            <img alt="..." src={greaterthan} className='mx-4 mt-1' />
            <span className='training'>Training Led Employment Program</span>
          </div>


        </div>
      </div>

      <div className='container'>
  <div className='d-flex justify-content-center align-items-center training-text m-5 p-5'>
    Training Led Employment Program
  </div>
  <div className='row col-12 texts'>
    <div className='col-12 col-md-6'>
      <span className='first'><br /><br />Corporate and Investment Banking and Operations & Data Analysis Courses<br /><br /></span>
      <span className='second'>Our Institute of Banking and Finance & Institute of <br />Future Tech were established with the core objective <br /> of providing the latest technology skills to marginalized <br />youth to help narrow their skill gap.<br /><br /></span>
    </div>
    <div className='col-12 col-md-6'>
      <img alt="..." src={col2} className="img-fluid h-100 w-100" style={{ objectFit: 'cover', width: '100% !important', height: '100% !important' }} />
    </div>
  </div>
</div>



      <div className='container'>
        <div className='d-flex justify-content-center align-items-center training-text m-5 p-5'>
          What we do
        </div>
        <div className="row col-12 m-5 container">
          <div className="col-12 col-md-6">
            <div className="block-wrapper1 h-100 w-100">
              <img alt="..." src={img1} className="img-fluid"/>
              <h2 className="d-flex justify-content-center align-items-center mt-5 text-black font-weight-bolder">
                Certification in Corporate and Investment Banking and Operations (CIBOP)
              </h2>
              <p className="d-flex justify-content-center align-items-center p-5 text-black">
                <ul>
                  <li className='fs-5'>Our Institute of Banking and Finance strives to give disadvantaged students a head start in their careers by offering training and skill development in investment banking.</li>
                  <br />
                  <li className='fs-5'>Our course sessions include comprehensive investment banking skills, soft skills, resume building, MS Excel, 1-0-1 mentorship by industry experts and in-person workshops.</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="block-wrapper2 h-100">
              <img alt="..." src={img2} className="img-fluid"/>
              <h2 className="mt-5 mb-3 text-black font-weight-bolder">
                Certification in Data Analysis
              </h2>
              <p className="d-flex justify-content-center align-items-center p-5 text-black ">
                <ul>
                  <li className='fs-5'>In our Future Tech Institute, students can take certificate-based learning and upskilling courses based on their educational level to prepare them for real-time industry projects with industry support.</li>
                  <br />
                  <li className='fs-5'>Our Industry-Experts led classes and mentoring impart industry-valued skills. We provide students with hands-on experiences with popular software e.g., Tableau, XL Macros, etc.</li>
                  <br />
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
  <div className='d-flex justify-content-center align-items-center training-text m-5 p-5'>
    How we do it
  </div>
  <div className='row col-12'>
    <div className='col-12 col-sm m-5'>
      <div className='block-wrapper1 h-100 d-flex flex-column'>
        <img alt="..." src={i1} className="img-fluid" />
        <div className='blocks'>
          We have partnered with Lighthouse Communities Foundation, SACH & other developmental agencies across states of India to increase our reach.
        </div>
      </div>
    </div>
    <div className='col-12 col-sm m-5'>
      <div className='block-wrapper3 h-100 d-flex flex-column'>
        <img alt="..." src={i2} className="img-fluid" />
        <div className='blocks'>
          We use Bloom’s Taxonomy of learning & case studies for making students learn basic theory and understand how to apply that theory.
        </div>
      </div>
    </div>
    <div className='col-12 col-sm m-5'>
      <div className='block-wrapper2 h-100 d-flex flex-column'>
        <img alt="..." src={i3} className="img-fluid " />
        <div className='blocks'>
          In terms of employment, we offer students a great opportunity landscape to work with JP Morgan & Co, BOA Merrill Lynch, Goldman Sachs, Morgan Stanley, Citigroup, Deutsche Bank, Credit Suisse, Barclays, Wells Fargo, and UBS to name a few.
        </div>
      </div>
    </div>
  </div>
</div>

<div>
    <div className='d-flex justify-content-center align-items-center training-text m-5 p-3'>
        Testimonial
    </div>
    <Carousel />
</div>

    </div>
  );
}
