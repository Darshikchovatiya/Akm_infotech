import React from 'react'
import {FaEnvelope, FaMapMarkerAlt, FaPhoneAlt} from 'react-icons/fa'
import './footer.css'
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <>
            <footer className="site-footer">
                <div className="innerfirst">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="widget">
                                    <h3>About</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique incidunt rem quisquam nemo veritatis accusamus amet fugit</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="widget">
                                    <h3>Pages</h3>
                                    <ul className="link">
                                        <li>
                                            <NavLink to='/'>Login</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/signup'>Sign Up</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="widget">
                                    <h3>Contact</h3>
                                    <ul className="link quick-info">
                                        <li className="email">
                                            <FaEnvelope />
                                            <a href="#">info@example.com</a>
                                        </li>
                                        <li className="email">
                                            <FaPhoneAlt />
                                            <a href="#">8123867849</a>
                                        </li>
                                        <li className="email">
                                            <FaMapMarkerAlt />
                                            <a href="#">44, my mall near my tower city</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;