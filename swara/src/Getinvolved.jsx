import React from "react";
import Navbar from "./Navbar";
import {Link} from 'react-router-dom';
import Footer from "./Footer";

const Getinvolved = () => {
    return (
        <>
            <Navbar />
            <div className="getinvolved_style">
                <h1>Get Involved</h1>
            </div>
            <h1 className="getinvolved-text">You could play an important part in the shaping of a person’s future by…</h1>
            <div className="container getinvolved_container">
                <img className="getinvolved-image" src="https://saraswati-seva-foundation.org/wp-content/uploads/2023/03/corporate.jpg" />
                <h3 className="getinvolved-title">For Corporate Partners</h3>
                <p className="getinvolved-content">Our corporate partners support us with training, mentoring, recruitment, etc.</p>
                <p className="getinvolved-content">Our corporate partners include JP Morgan & Co, BOA Merrill Lynch, Goldman Sach, Morgan Stanley, Citi Group, Deutsche Bank, Credit Suisse, Barclays, Wells Fargo, and UBS to name a few.</p>
                <button className="getinvolvedbtn"><Link to='./corporate'>EXPLORE</Link></button>
            </div>
            <Footer />
        </>
    );
}

export default Getinvolved;