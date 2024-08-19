import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return(
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid px-0">
          <Link className="navbar-brand mx-2" to="/">{props.title}</Link>
          <button className="navbar-toggler me-5 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
          </div>
          <div className={`form-check form-switch px-2 ms-5 text-${props.mode==='dark'?'light':'dark'}`}>
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable mode</label>
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckChecked" checked={props.mode === 'dark'}/>
          </div>
        </div>
      </nav>
  );
}

Navbar.propTypes = {title:PropTypes.string}