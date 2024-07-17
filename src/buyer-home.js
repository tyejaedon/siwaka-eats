import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const BuyerHome = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    // Fetch shop data from the server
    fetch('/shops') // Replace with your actual API endpoint URL
      .then(response => response.json())
      .then(data => setShops(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className='buyer_home-body'>
      <Navigation />

      <div className="buyer_home-wrapper">
        {shops.map((shop) => (
          <div className="buyer_home-shop" key={shop.name}> 
          <Link to={`/shop/${shop.name}`} className='buyer_home-links'>
      
              <img src={shop.imageUrl} className="buyer_home-images" alt={`Shop ${shop.name}`} />
              <p className='buyer_home-p'>
                <b>Shop:</b> {shop.name}
                <br />
                {shop.menuItems && ( // Check if menuItems exist
                  <div className="food-comodities">
                    <h3>Loved by Customers:</h3>
                    <span>
                      {/* Slice the first 3 menu items and join with commas */}
                      {shop.menuItems.slice(0, 3).join(', ')}
                    </span>
                  </div>
                )}
              </p>
              </Link>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default BuyerHome;
