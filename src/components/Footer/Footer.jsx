import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
        <div className="inner-footer">
          <div className="about">We are providing online photography, cloud
           storage and rental service</div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="contact">
          <div className="text">Email:talhamaiken92@gmail.com</div>
          <div className="text">Email:hasratgm@gmail.com</div>
          <div className="text">Phone:0344-0699200</div>
          <div className="text">Phone:0313-8901931</div>
        </div>
        </div>
        <div className="copyright">
          <p>Copyright 2020 | All Rights are Reserved</p>
        </div>
      </footer>
    )
}

export default Footer
