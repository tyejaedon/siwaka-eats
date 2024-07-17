import React from 'react';

const SellerReg = () => {
  return (
    <div>
      <section className="seller_reg-header"></section>

      <div className="seller_reg-text-box">
        <h1>Siwaka Street Eats</h1>
        <p>Build your business online with Siwaka Street Eats</p>
      </div>

      <section className="seller_reg-register">
        <div className="seller_reg-container">
          <div className="seller_reg-title">Registration</div>
          <form action="#">
            <div className="seller_reg-user-details">
              <div className="seller_reg-input-box">
                <span className="seller_reg-details">Establishment name</span>
                <input type="text" placeholder="establishment name" required />
              </div>
              <div className="seller_reg-input-box">
                <span className="seller_reg-details">First name</span>
                <input type="text" placeholder="enter first name" required />
              </div>
              <div className="seller_reg-input-box">
                <span className="seller_reg-details">Last name</span>
                <input type="text" placeholder="enter last name" required />
              </div>
              <div className="seller_reg-input-box">
                <span className="seller_reg-details">Mobile number</span>
                <input type="text" placeholder="enter mobile number" required />
              </div>
              <div className="seller_reg-input-box">
                <span className="seller_reg-details">Email address</span>
                <input type="text" placeholder="enter email address" required />
              </div>
              <div className="seller_reg-input-box">
                <span className="seller_reg-details">Password</span>
                <input type="password" placeholder="enter password" required />
              </div>
              <div className="seller_reg-input-box">
                <span className="seller_reg-details">Confirm password</span>
                <input type="password" placeholder="confirm password" required />
              </div>
              <div className="seller_reg-input-box">
                <span className="seller_reg-details">Mpesa paybill</span>
                <input type="text" placeholder="enter mpesa paybill" required />
              </div>
            </div>
            <div className="seller_reg-button">
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SellerReg;
