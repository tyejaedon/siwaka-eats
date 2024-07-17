import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Login';
import BuyerRegister from './buyer-reg';
import SellerReg from './seller-reg';
import BuyerHome from './buyer-home';
import DashboardSeller from './dashboard_seller';
import SellerHomepage from './seller_home';
import DashboardBuyer from './dashboard_buyer';
import Menu from './menu'; // Make sure MenuPage is correctly imported
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/homepage-user" element={<BuyerHome/>} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/seller-homepage" element={<SellerHomepage/>} />
        <Route path="/dashboard_seller" element={<DashboardSeller />} />
        <Route path="/seller-register" element={<SellerReg />} />
        <Route path="/dashboard_buyer" element={<DashboardBuyer/>} />
        <Route path="/buyer-register" element={<BuyerRegister />} />
        {/* Fallback to login page for any unmatched route */}
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
