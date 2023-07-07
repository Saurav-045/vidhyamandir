import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Corporate = () => {
  return (
    <>
    <Navbar />
      <div className="title_style">
        <h1>JOIN AS CORPORATE PARTNER</h1>
      </div>
      <form className='container corporate_container'>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Company Name</label>
          <input type="text" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="companyType" className="form-label">Company Type</label>
          <select className="form-control" id="companyType">
            <option value="">Select Company Type</option>
            <option value="type1">Limited Liability company</option>
            <option value="type2">Publicly listed company</option>
            <option value="type3">Private company limited</option>
            <option value="type4">Holding company</option>
            <option value="type5">Unlimited company</option>
            <option value="type6">S corporation</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label corporate_checkbox" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary corporate_btn">Donate</button>
      </form>
      <Footer />
    </>
  );
}

export default Corporate;
