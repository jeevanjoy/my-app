import React from 'react'
import { Link } from 'react-router-dom'
//import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.about}</Link>
          </li>
         
        </ul>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.togglemode} />
          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{props.mode}</label>
        </div>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.togglemode1} />
          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{props.mode1}</label>
        </div>
        
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </nav>
  )
}
/* Navbar.propTypes= {
    title: PropTypes.string,
    aboout: PropTypes.string

} */
/* Navbar.defaultProps= {
    title :         'hi'
} */