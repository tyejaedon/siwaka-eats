import React from 'react';
import { useNavigate } from 'react-router-dom';

const BuyerRegister = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    navigate('/')
    
  };

  return (
    <div className='buyer_reg-body'>

   
    <div className="buyer_reg-container">
      <div className="buyer_reg-form-box">
        <h1 className="buyer_reg-title">Registration</h1>
        <form onSubmit={handleSubmit}>
          <div className="buyer_reg-input-group">
            <div className="buyer_reg-input-field" id="namefield">
              <input type="text" placeholder="Name" required />
            </div>
            <div className="buyer_reg-input-field">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="buyer_reg-input-field">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="buyer_reg-input-field">
              <input type="tel" placeholder="Phone Number" required />
            </div>
            <div className="buyer_reg-input-field">
              <input type="text" placeholder="Mpesa Name" required />
            </div>
          </div>
          <div className="buyer_reg-btn-field">
            <button type="submit" className="buyer_reg-register-btn">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default BuyerRegister;
