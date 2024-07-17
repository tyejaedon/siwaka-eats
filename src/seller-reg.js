import React from 'react';


const seller_reg = () => {
    return (
      <div className='seller_reg-body'>


        <div className="seller_reg-container">
            <div className="seller_reg-form-box">
                <h1 id="seller_reg-title">Business Registration Form</h1>
                <form action="/submit" method="POST" enctype="multipart/form-data">
                    <div className="seller_reg-form-group">
                        <label htmlFor="personName">Name of Person:</label>
                        <input type="text" id="personName" name="personName" required />
                    </div>
                    <div className="seller_reg-form-group">
                        <label htmlFor="businessName">Name of Business:</label>
                        <input type="text" id="businessName" name="businessName" required />
                    </div>
                    <div className="seller_reg-form-group">
                        <label htmlFor="foodLicense">Image of Food License:</label>
                        <input type="file" id="foodLicense" name="foodLicense" accept="image/*" required />
                    </div>
                    <div className="seller_reg-form-group">
                        <label htmlFor="paymentMode">Mode of Payment:</label>
                        <select id="paymentMode" name="paymentMode" required>
                            <option value="Cash">Cash</option>
                            <option value="Mpesa">Mpesa</option>
                        </select>
                    </div>
                    <div className="seller_reg-form-group">
                        <label htmlFor="businessImage">Image of Business:</label>
                        <input type="file" id="businessImage" name="businessImage" accept="image/*" required />
                    </div>
                    <div className="seller_reg-form-group">
                        <label htmlFor="location">Location:</label>
                        <input type="text" id="location" name="location" required />
                    </div>
                    <div className="seller_reg-form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="seller_reg-form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <div className="seller_reg-btn-field">
                        <button  className='seller_reg-submit' type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default seller_reg;
