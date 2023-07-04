import React from "react";
import { Link } from "react-router-dom";
import homeicon from "./Assets/home.svg";
import greaterthan from "./Assets/greaterthan.svg";
import fb from "./Assets/fb.svg";
import insta from "./Assets/insta.svg";
import twitter from "./Assets/twitter.svg";
import yt from "./Assets/yt.svg";
import gi1 from "./Assets/gi1.jpg";
import gi2 from "./Assets/gi2.jpg";
import gi3 from "./Assets/gi3.jpg";
export default function GetInvolved() {
  return (
    <div>
      <div className="header1 container-fluid">
        <div className="row">
          <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
            <img alt="..." src={fb} className="mx-3" />
            <img alt="..." src={insta} className="mx-3" />
            <img alt="..." src={twitter} className="mx-3" />
            <img alt="..." src={yt} className="mx-3" />
          </div>
          <div className="col-12 col-md-9 font-weight-bolder d-flex justify-content-end socialmediaicons px-5 container">
            <span className="global-networks">Global Networks</span>
          </div>
        </div>
      </div>

      <div className="bg">
        <div className="row container">
          <div className="col-12 col-md-6">
            <h1 className="text-white d-flex justify-content-center align-items-center bgtext1 font-weight-bolder">
              Get Involved
            </h1>
          </div>
          <div className="col-12 col-md-6 abc d-flex justify-content-center align-items-center">
            <Link className="text-white" to="/">
              <img alt="..." src={homeicon} className="mx-1" /> Home
            </Link>
            <img alt="..." src={greaterthan} className="mx-4 mt-1" />
            <span className="training">Get Involved</span>  
          </div>
        </div>
      </div>

      <div className="container container-fluid">
    <div className="d-flex justify-content-center align-items-center training-text m-5 p-5">
        You can play an important role in shaping someone's future by...
    </div>
    <div className="row col-12 container mb-5">
        <div className="col-12 col-md-4">
            <div className="block-wrapper h-100 w-100">
                <img alt="..." src={gi1} className="img-fluid"/>
                <h4 className="d-flex justify-content-center align-items-center mt-5 text-black font-weight-bolder">
                    Volunteering
                </h4>
                <p className="text-black d-flex justify-content-center align-items-center mb-5 px-3">Join a dedicated group of volunteers, gain new experiences and skills, and support us at the same time.</p>
                <Link><div className="btn text-white explore btn-lg ">Explore</div></Link>
            </div>
        </div>
        <div className="col-12 col-md-4">
            <div className="block-wrapper h-100 w-100">
                <img alt="..." src={gi2} className="img-fluid"/>
                <h4 className="mt-5 mb-3 text-black font-weight-bolder d-flex justify-content-center align-items-center">
                    Donating
                </h4>
                <p className="text-black d-flex justify-content-center align-items-center mb-5 px-3">
                    Donations are vital to keep our program running and ensure fruitful outcomes. When you donate to us, you directly empower our stakeholders and support our cause.
                </p>
                <Link to="/donate"><div className="btn text-white explore btn-lg ">Explore</div></Link>
            </div>
        </div>
        <div className="col-12 col-md-4">
            <div className="block-wrapper h-100 w-100">
                <img alt="..." src={gi3} className="img-fluid"/>
                <h4 className="mt-5 mb-3 text-black font-weight-bolder d-flex justify-content-center align-items-center">
                    For Corporate Partners
                </h4>
                <p className="text-black d-flex justify-content-center align-items-center mb-5 px-3">Our corporate partners support us with training, mentoring, recruitment, and more. Some of our esteemed partners include JP Morgan & Co, BoA, Morgan Stanley, Goldman Sachs, Credit Suisse, Barclays, Wells Fargo, Deutsche Bank, UBS, among others.</p>
                <Link to=""><div className="btn text-white explore btn-lg">Explore</div></Link>
            </div>
        </div>
    </div>
</div>

    <div className="stayupdated container-fluid full-height h-100 p-5">
        <div className="text">
            <h1 className="container container-fluid d-flex justify-content-center align-items-center font-weight-bolder text-white px-5 pt-5 mb-3 mt-5">Stay Updated</h1>
            <h7 className=" font-weight-bolder d-flex justify-content-center align-items-center">To receive news on SSF’s up and coming programs and their impact,<br/> as well as stories from students and teachers,
consider signing up to our newsletter!</h7>
        </div>
        <div className="row h-100 m-5 p-5">
            <div className="col-12 col-md-8 col-md-4">
            <input type="email" className="inputmail" placeholder="Enter your email address"></input>
            </div>
            <div className="col-12 col-md-4">
                <div className="btn explore btn-xl btn-lg">Subscribe Newsletter</div>
            </div>
        </div>
    </div>


    </div>
  );
}
