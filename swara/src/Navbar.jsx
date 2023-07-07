import React from 'react';
import cssstyle from './index.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Corporate from './Corporate';

const Navbar = () => {
  return (
      <>
        <div className='top_nav'>
          <a className='icon'><FacebookIcon /></a>
          <a className='icon'><InstagramIcon/></a>
          <a className='icon'><TwitterIcon /></a>
          <a className='icon'><YouTubeIcon /></a>
        </div>
        <div>
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand">
                <img src="https://saraswati-seva-foundation.org/wp-content/uploads/2023/03/ssf.jpg" alt="Logo" width="230" height="70" className="d-inline-block align-text-top" />
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                  </li>
                  <li className="nav-item">
                    <Dropdown>
                      <Dropdown.Toggle variant="none" id="dropdown-about">
                        ABOUT US
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#">About ssf</Dropdown.Item>
                        <Dropdown.Item href="#">mentors and adviosrs</Dropdown.Item>
                        <Dropdown.Item href="#">Executive Team</Dropdown.Item>
                        <Dropdown.Item href="#">Internal chapters and Lead </Dropdown.Item>
                        <Dropdown.Item href="#">Privacy Policies</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li className="nav-item">
                    <Dropdown>
                      <Dropdown.Toggle variant="none" id="dropdown-program">
                        OUR PROGRAM
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#">Training led employment program</Dropdown.Item>
                        <Dropdown.Item href="#">School industrial training program</Dropdown.Item>
                        <Dropdown.Item href="#">STEM-C program</Dropdown.Item>
                        <Dropdown.Item href="#">Career counselling program</Dropdown.Item>
                        <Dropdown.Item href="#">Teacher Training program</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li className="nav-item">
                    <Dropdown>
                      <Dropdown.Toggle variant="none" id="dropdown-media">
                        BLOGS, REPORTS & MEDIA
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#">Blogs</Dropdown.Item>
                        <Dropdown.Item href="#">Research Report</Dropdown.Item>
                        <Dropdown.Item href="#">Media</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/getinvolved">GET INVOLVED</Link>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </>
  );
}

export default Navbar;
