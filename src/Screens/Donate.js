import React from "react";
import { Link } from "react-router-dom";
import homeicon from "../Components/Assets/home.svg";
import greaterthan from "../Components/Assets/greaterthan.svg";
import fb from "../Components/Assets/fb.svg";
import insta from "../Components/Assets/insta.svg";
import twitter from "../Components/Assets/twitter.svg";
import yt from "../Components/Assets/yt.svg";
import donate from "../Components/Assets/donate.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import ssf from "../Components/Assets/ssf.jpg";

export default function Donate() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [credentials, setcredentials] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    profession: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      JSON.stringify({
        firstname: credentials.firstname,
        lastname: credentials.lastname,
        email: credentials.email,
        contact: credentials.contact,
        profession: credentials.profession,
      })
    );
    const response = await fetch("http://localhost:5000/api/createdonater", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: credentials.firstname,
        lastname: credentials.lastname,
        email: credentials.email,
        contact: credentials.contact,
        profession: credentials.profession,
      }),
    });
    const json = await response.json();
    console.log(json);
  };

  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };

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
              Donate
            </h1>
          </div>
          <div className="col-12 col-md-6 abc d-flex justify-content-center align-items-center">
            <Link className="text-white" to="/">
              <img alt="..." src={homeicon} className="mx-1" /> Home
            </Link>
            <img alt="..." src={greaterthan} className="mx-4 mt-1" />
            <span className="training">Donate</span>
          </div>
        </div>
      </div>
      <Carousel
        showThumbs={false}
        className="custom-carousel2 d-flex justify-content-center align-items-center"
        selectedItem={currentSlide}
        onChange={(slideIndex) => setCurrentSlide(slideIndex)}
      >
        <div className="container block block-wrapper">
          <h1 className="justify-content-center d-flex align-items-center font-weight-bolder">
            Support Our Cause
          </h1>
          <hr />
          <p className="text-black justify-content-center d-flex align-items-cnenter font-weight-bold p-2">
            Help our organization by donating today! <br />
            All donations go directly to making a difference <br />
            for our cause.
          </p>
          <img
            src={donate}
            alt="Image 1"
            className="custom-carousel-image img-fluid"
            style={{ objectFit: "contain" }}
          />
          <Link
            className="btn btn-lg btn-xl donatebtn"
            onClick={() => setCurrentSlide(1)}
          >
            Donate
          </Link>
        </div>
        <div>
          <div className="container">
            <div className="ssfimage container">
              <img src={ssf} />
            </div>
            <div className="info container">Add your information</div>
            <form
              onSubmit={handleSubmit}
              className="container block2 forms block-wrapper"
            >
              <div className="row col-12">
                <div className="col-12 col-md-6">
                  <label>First Name:</label>
                  <br />
                  <input
                    onChange={onChange}
                    className="newinput"
                    type="text"
                    name="firstname"
                    value={credentials.firstname}
                  />
                  <br />
                  <br />
                </div>
                <div className="col-12 col-md-6">
                  <label>Last Name:</label>
                  <br />
                  <input
                    onChange={onChange}
                    type="text"
                    className="newinput"
                    name="lastname"
                    value={credentials.lastname}
                  />
                  <br />
                  <br />
                </div>
              </div>
              <hr className="newhr" />
              <label>Email Id:</label>
              <br />
              <input
                onChange={onChange}
                type="email"
                name="email"
                className="px-5 newinput"
                value={credentials.email}
              />
              <br />
              <br />
              <label>Contact Number:</label>
              <br />
              <input
                onChange={onChange}
                type="text"
                name="contact"
                className="px-5 newinput"
                value={credentials.contact}
              />
              <br />
              <br />
              <label>Profession:</label>
              <br />
              <input
                onChange={onChange}
                type="text"
                name="profession"
                className="px-5 newinput"
                value={credentials.profession}
              />
              <br />
              <br />
              <br />
              <button type="submit" className="btn btn-xl btn-lg nextbtn">
                <a
                  href="https://buy.stripe.com/test_fZe5mK6Ld376dJm7ss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  Proceed to donation
                </a>
              </button>
            </form>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
