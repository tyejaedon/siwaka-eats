import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardBuyer = () => {
  const [showBalance, setShowBalance] = useState(false);

  const handleToggleBalance = () => {
    setShowBalance(!showBalance);
  };
  const navigate = useNavigate();

    const logout = () => {
        navigate('/');
    };

  return (
    <div className='body'>
      <header className='dash_buyer-header'>
        <div className="dash_buyer-user-profile">
          <div className="dash_buyer-profile">
            <div className="dash_buyer-profile-picture">
              <img 
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="profile"
              />
            </div>
            <div className="dash_buyer-profile-details">
              <h3 className='dash_buyer-h3'>Welcome, Khajira</h3>
              <p className='dash_buyer-p'>Buyer</p>
            </div>
          </div>
          <div class="logout-button">
            <button className="dash_buyer-btn" onclick={logout}>Logout</button>
        </div>
      
        </div>
      </header>
      <main className='dash_buyer-main'>
        <h1 className='dash_buyer-h1'>Dashboard</h1>
        <div className="dash_buyer-date">
          <input type="date" />
        </div>
        <section className="dash_buyer-dashboard">
          <div className="dash_buyer-table">
            <div className="dash_buyer-row">
              <div className="dash_buyer-card">
                <h2 className='dash_buyer-h2'>Purchased Items</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Quantity</th>
                      <th>Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Boji Special</td>
                      <td>1</td>
                      <td>Ksh.170</td>
                    </tr>
                    <tr>
                      <td>Rolex w/ Smokie</td>
                      <td>1</td>
                      <td>Ksh.90</td>
                    </tr>
                    <tr>
                      <td>Ugali w/ Chicken</td>
                      <td>1</td>
                      <td>Ksh.200</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="dash_buyer-card dash_buyer-balance-card">
                <h2 className='dash_buyer-h2'>Remaining Balance</h2>
                <label className="dash_buyer-toggle-label">
                  <input
                    type="checkbox"
                    className="dash_buyer-toggle-checkbox"
                    id="toggleBalance"
                    onChange={handleToggleBalance}
                  />
                  Show Balance
                </label>
                {showBalance && (
                  <div id="balanceContent">
                    <p>Ksh1200.00</p>
                    <div className="dash_buyer-progress-bar">
                      <div className="dash_buyer-progress" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="dash_buyer-row">
              <div className="dash_buyer-card">
                <h2 className='dash_buyer-h2'>Wishlist</h2>
                <table>
                  <tbody>
                    <tr><td>Passion Mint Juice</td></tr>
                    <tr><td>Chapo Beans</td></tr>
                    <tr><td>Mutura</td></tr>
                    <tr><td>Fruit Salad</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="dash_buyer-card">
                <h2 className='dash_buyer-h2'>Orders</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Order Name</th>
                      <th>Quantity</th>
                      <th>Cost</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Smocha</td>
                      <td>3</td>
                      <td>Ksh120</td>
                      <td className="dash_buyer-success">Paid</td>
                    </tr>
                    <tr>
                      <td>Seasoned Fries</td>
                      <td>5</td>
                      <td>Ksh.600</td>
                      <td className="dash_buyer-warning">Pending</td>
                    </tr>
                    <tr>
                      <td>Mango Passion Juice</td>
                      <td>1</td>
                      <td>Ksh100</td>
                      <td className="dash_buyer-primary">Not Finished</td>
                    </tr>
                    <tr>
                      <td>Plain Fries</td>
                      <td>2</td>
                      <td>Ksh.200</td>
                      <td className="dash_buyer-danger">Declined</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardBuyer;
