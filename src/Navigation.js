import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
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
        <li><Link to="/homepage-user">Home</Link></li>
        <li><Link to="/dashboard_buyer">Dashboard</Link></li>
        <li><a href="#footer" onClick={handleContactUsClick}>Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
