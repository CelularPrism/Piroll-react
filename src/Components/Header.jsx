import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';

function Header() {
  return (
    <div className="Header">
      <div className="container">
        <div className="row">
          <div className="logo col-3">
            <Link to="/">
              <img className="logo_img" src={logo} />
            </Link>
          </div>

          <div className="links col-9">
            <div className="block_link">
              {/* <a className="link" href="#"> */}
              <Link to="/" className="link">
                {' '}
                Home{' '}
              </Link>
              {/* </a> */}
            </div>
            <div className="block_link">
              {/* <a className="link" href="#"> */}
              <Link to="/About" className="link">
                {' '}
                About{' '}
              </Link>
              {/* </a> */}
            </div>
            <div className="block_link">
              <a className="link" href="#">
                {' '}
                Contact{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
