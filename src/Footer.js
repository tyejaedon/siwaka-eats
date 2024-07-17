// src/components/Footer.js

import React from 'react';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.gif';
// Create this CSS file to style the footer

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <form className="footer-contact-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="footer-social-icons">
            <a href="#"><img src= {facebook} alt="Facebook" /></a>
            <a href="#"><img src= {instagram} alt="Instagram" /></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Our Location</h3>
          <p>Strathmore University</p>
          <p>Phone: +25401010101</p>
          <p>Email: contact@company.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Siwaka Street Eats. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
