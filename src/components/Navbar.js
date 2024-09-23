import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

export class Navbar extends Component {

    static defaultProps = {
        mode: 'light',
    }

    static propTypes = {
        mode: PropTypes.string,
    }

  render() {
    return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode} text-${this.props.mode==='light'?'dark':'light'}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NewsRaptor</Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span   span="true" className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>

                        <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
                    </ul>
                </div>

                <div className={`form-check form-switch text-${this.props.mode==='light'?'dark':'light'} mx-3`}>
                    <input className="form-check-input" onClick={()=>{this.props.toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{this.props.mode==='light'?"Enable Dark Mode":"Enable Light Mode"}</label>
                </div>

                <Link className="navbar-brand" to="/">
                    <div className='d-flex'>
                    
                        <img className="border border-dark rounded-circle mx-2" src="/android-chrome-512x512.png" alt="NewsRaptor" width="50" height="50"/>
                        <h1><strong>NewsRaptor</strong></h1>
                    </div>
                </Link>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
