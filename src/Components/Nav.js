import React from 'react';
import Logo from '../assets/image/logo.png';

const Nav = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg mt-3">
          <img src={Logo} alt="The Logo"/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link ms-5" style={{color: "#4c6b9f"}} href="/#">Premium</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-5" style={{color: "#4c6b9f"}} href="/#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-5" style={{color: "#4c6b9f"}} href="/#">Support</a>
                </li>
            </ul>
            <form className="d-flex">
              <button className="btn ms-5" style={{backgroundColor: "#4c6b9f", color: "#fff"}} type="submit">Download</button>
            </form>
          </div>
      </nav>
        </div>
    )
}

export default Nav;
