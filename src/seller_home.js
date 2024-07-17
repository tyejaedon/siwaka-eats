import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Nav_seller from './Navigation_seller';

const SellerHomepage = () => {
  const [shopName, setShopName] = useState('unknown');
  const [shopImage, setShopImage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/userdata')
      .then(response => response.json())
      .then(data => {
        setShopName(data.businessName || 'unknown');
        setShopImage(data.businessImage || '');
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="seller_home-body">
      <Nav_seller />
      <br />
      <br />
      <div className="seller_home-wrapper">
        <a href="/menu" className="seller_home-shop-link">
          <div className="seller_home-shop">
            <img src={shopImage} alt="Shop Image" className="seller_home-shop-image" />
            <p>
              <b>Shop:</b> <span>{shopName}</span>
              <br />
              <b>Loved by Customers</b>: fries, chicken
            </p>
          </div>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default SellerHomepage;
