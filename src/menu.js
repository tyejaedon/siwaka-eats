import React, { useEffect, useState } from 'react';
import Nav_seller from './Navigation_seller';
import axios from 'axios';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch('/items');
        const menuItemsData = await response.json();
        setMenuItems(menuItemsData);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    fetchMenuItems();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await axios.post('/menuitems', formData);
      if (response.status === 200) {
        setSuccess(true);
        event.target.reset();
        setTimeout(() => setSuccess(false), 3000);

        // Fetch the updated menu items
        const updatedResponse = await fetch('/items');
        const updatedMenuItemsData = await updatedResponse.json();
        setMenuItems(updatedMenuItemsData);
      }
    } catch (error) {
      console.error('Error adding menu item:', error);
    }
  };

  return (
    <div className='menu-body'>
      <div className="menu-shop_image">
        <Nav_seller/>
        <span className="menu-shop_profile"></span>
      </div>
      <br />
      <br />
      <div className="menu-menu">
        <h2 className='menu-h2'>Our Menu</h2>
        <h3 className='menu-h3'>Main Dishes</h3>
        <div id="foodItems">
          {menuItems.map((item, index) => (
            <div key={index}>
              <p className='menu-p'>
                <span style={{ fontWeight: 'bold' }}>{item.menu_item}</span> - ksh {item.price}
              </p>
              {item.image && (
                <div>
                  <img className="menu-item" src={item.url} alt="Food Item" />
                  <br />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="menu-container">
        <h1>New Menu Item</h1>
        {/* Success Message */}
        {success && (
          <div id="successMessage" style={{ color: 'green' }}>
            Menu item added successfully!
          </div>
        )}

        <form id="menuForm" onSubmit={handleSubmit} encType="multipart/form-data">
          <label className='menu-label' htmlFor="menuItem">Menu Item:</label>
          <input type="text" id="menuItem" name="menuItem" required />

          <label className='menu-label' htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" step="0.01" required />

          <label className='menu-label' htmlFor="image">Image:</label>
          <input type="file" id="food_image" name="food_image" accept="image/*" required />

          <button className='menu-submit' type="submit">Add Menu Item</button>
        </form>
      </div>
    </div>
  );
};

export default Menu;
