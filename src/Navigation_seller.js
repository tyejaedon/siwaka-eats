import React from 'react';
import { Link } from 'react-router-dom';

const Nav_seller = () => {
  const handleContactUsClick = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <ul className="navbar">
        <li><Link to="/seller-homepage">Home</Link></li>
        <li><Link to="/dashboard_Buyer">Dashboard</Link></li>
        <li><a href="#footer" onClick={handleContactUsClick}>Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Nav_seller;
