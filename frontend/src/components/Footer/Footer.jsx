import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <a href='/'><img src={assets.logo} alt="Eats Express Logo" className="footer-logo" /></a>
          <p>
            At Eats Express, we celebrate the rich flavors and vibrant culture of Indian cuisine. 
            From savory street food to sumptuous main courses, our dishes are crafted with love and the finest ingredients. 
            Join us for an unforgettable culinary journey. Taste the tradition, savor the excellence.
          </p>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-123-456-7890</li>
            <li>contact@EatsExpress.com</li>
          </ul>
        </div>
        <div className="footer-content-credits">
          <h2>  CREDITS</h2>
          <ul>
            <li>Developed By:</li>
            <li>Keshav Prakash Sharma</li>
            <li>
              <a href='https://www.linkedin.com/in/keshav-prakash-sharma-601378146/'><img src={assets.linkedin_icon} alt="LinkedIn Icon" className="credits-icon-linkedin" /></a>
              <a href='mailto:keshu.prakash2002@gmail.com'><img src={assets.mail_icon} alt="Mail Icon" className="credits-icon-mail" /></a>
              <a href='https://github.com/Keshav3003'><img src={assets.github_icon} alt="Github Icon" className="credits-icon-github" /></a>
            </li>
            <li>
              <a href="https://keshav3003.github.io/MyPortfolio_KPS/" target="_blank" rel="noopener noreferrer">
                <button className="checkout-button">Checkout Profile</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © EatsExpress.com - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
