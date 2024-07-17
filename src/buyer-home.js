import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import shop1 from './assets/shop_1.jpeg';
import shop2 from './assets/shop_2.jpg';
import shop3 from './assets/shop_3.jpg';
import shop4 from './assets/shop_4.jpeg';

const BuyerHome = () => {
  return (
    <div className='buyer_home-body'>
      <Navigation />

      <div className="buyer_home-wrapper">
        <div className="buyer_home-shop">
          <a  className='buyer_home-links' href="shop_1.html">
            <img src= {shop1} className="buyer_home-images" alt="Shop 1" />
            <p className='buyer_home-p'>
              <b>Shop:</b> Benny's Eatery
              <br />
              <b>Loved by Customers:</b> fries, chicken
            </p>
          </a>
        </div>

        <div className="buyer_home-shop">
          <img src = {shop2} className="buyer_home-images" alt="Shop 2" />
          <p className='buyer_home-p'>
            <b>Shop:</b> Sharons Dishes
            <br />
            <b>Loved by Customers:</b> fries, chicken
          </p>
        </div>

        <div className="buyer_home-shop">
          <img src= {shop3} className="buyer_home-images" alt="Shop 3" />
          <p className='buyer_home-p'>
            <b>Shop:</b> Legacy Foods
            <br />
            <b>Loved by Customers:</b> fries, chicken
          </p>
        </div>

        <div className="buyer_home-shop">
          <img src= {shop4} className="buyer_home-images" alt="Shop 4" />
          <p className='buyer_home-p'>
            <b>Shop:</b> Rices and Rides
            <br />
            <b>Loved by Customers:</b> fries, chicken
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BuyerHome;
