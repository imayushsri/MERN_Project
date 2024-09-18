import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-9">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <Link className="navbar-brand nav_font" to="/">
                                <img src="img/logo/logo.png" alt="logo" height="50vw" />
                            </Link>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active nav_font" aria-current="page" to="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link nav_font" to="/findjob">
                                            Find Job
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link nav_font" to="/about">
                                            About
                                        </Link>
                                    </li>
                                    <li className="nav-item me-5">
                                        <Link className="nav-link nav_font" to="/contact">
                                            Contact
                                        </Link>
                                    </li>
                                    <li>
                                    <div className="nav_button">
                                <div className="btn btn-info nav_register">Register</div>
                                <div className="btn btn-info nav_login">Login</div>
                                </div>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-sm-1"></div>
            </div>
        </>
    )
}

export default Navbar
