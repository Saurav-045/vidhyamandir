import React from "react";
import location from './Location.svg';
import mail from './mail.svg';
import square from './square.svg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="container-field footer-style">
                <div className="row">
                    <div className="col-4">
                        <h5>HEAD OFFICE</h5>
                        <img className="footer-image" src={location} />
                        <p >1/13/163-B Kacheri, Civil Lines, Opposite Kshetriya <br /> Gramin Bank, Ayodhya, UP 224001</p>
                        <img className="footer-image" src={mail} />
                        <p>info@saraswati-seva-foundation.org</p>
                    </div>
                    <div className="col-4">
                        <h5 className="footer-icon">QUICK LINKS</h5>
                        <table className="footer-table">
                            <tbody>
                                <tr>
                                    <td><img className="footer-icon" src={square} />Home </td>
                                    <td><img className="footer-icon" src={square} />Blogs </td>
                                </tr>
                                <tr>
                                    <td><img className="footer-icon" src={square} />About Us</td>
                                    <td><img className="footer-icon" src={square} />Research Report </td>
                                </tr>
                                <tr>
                                    <td><img className="footer-icon" src={square} />Get Involved</td>
                                    <td><img className="footer-icon" src={square} />Global Network </td>
                                </tr>
                                <tr>
                                    <td><img className="footer-icon" src={square} />Media </td>
                                    <td><img className="footer-icon" src={square} />Donate </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-4 footer-form">
                        <h3>GET IN TOUCH</h3>
                        <form className='container footer-container'>
                        <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Contact No.</label>
                                <input type="number" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary footer-btn">Send Your Query</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container-field footer-end">
                <div className="row">
                    <div className="col-4"><p>© 2023 saraswati-seva-foundation.org All Right Reserved.</p></div>
                    <div className="col-4"><p>Privacy Policies</p></div>
                    <div className="col-4">
                        <Link className="footer-icon2" ><FacebookIcon /></Link>
                        <Link className="footer-icon2" ><InstagramIcon /></Link>
                        <Link className="footer-icon2" ><TwitterIcon /></Link>
                        <Link className="footer-icon2" ><YouTubeIcon /></Link>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Footer;