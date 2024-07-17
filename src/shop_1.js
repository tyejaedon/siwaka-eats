import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faSquareXmark, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import Navigation from './Navigation';

function Shop() {
    const { shopName } = useParams();
    const [menuItems, setMenuItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await fetch(`/api/shops/${shopName}/menu`);
                const data = await response.json();

                if (Array.isArray(data)) {
                    const itemsWithQuantity = data.map(item => ({
                        ...item,
                        price: parseFloat(item.price), // Ensure price is a floating-point number
                        quantity: 0 // Initialize quantity to 0
                    }));
                    setMenuItems(itemsWithQuantity);
                } else {
                    console.error('Unexpected data format:', data);
                }
            } catch (error) {
                console.error('Error fetching menu items:', error);
            }
        };
        fetchMenuItems();
    }, [shopName]);

    const handleAddToCart = (itemIndex) => {
        const updatedMenuItems = [...menuItems];
        updatedMenuItems[itemIndex].quantity += 1;
        setMenuItems(updatedMenuItems);
        setTotal(prevTotal => prevTotal + updatedMenuItems[itemIndex].price);
    };

    const handleRemoveFromCart = (itemIndex) => {
        if (menuItems[itemIndex].quantity > 0) {
            const updatedMenuItems = [...menuItems];
            updatedMenuItems[itemIndex].quantity -= 1;
            setMenuItems(updatedMenuItems);
            setTotal(prevTotal => prevTotal - updatedMenuItems[itemIndex].price);
        }
    };

    const handleCheckout = () => {
        const orderedItems = menuItems.filter(item => item.quantity > 0);
        const orderSummary = orderedItems.map(
            item => `${item.quantity}x ${item.menu_item} - Ksh ${item.price.toFixed(2)}`
        );
        if(total > 0){
            alert(`Your order of ${orderSummary.join(', ')} for Ksh ${total.toFixed(2)} has been placed!`);
        }

       
    };

    return (
        <div>
            <Navigation/>
            <div className="shop_1-image">
                <span className="shop_1-profile"></span>
            </div>
            {menuItems.length > 0 ? (
                <div className="shop_1-menu">
                    <h2 className="shop_1-h2">Our Menu</h2>
                    <div className="shop_1-food">
                        {menuItems.map((item, index) => (
                            <p className="shop_1-p" key={index}>
                                <span className="shop_1-food">{item.menu_item}</span> -{' '}
                                <span className="shop_1-price">ksh {item.price.toFixed(2)}</span>
                                <button
                                    type="button"
                                    className="shop_1-check"
                                    id={`shop_1-check${index}`}
                                    onClick={() => handleAddToCart(index)}
                                >
                                    <FontAwesomeIcon icon={faCartPlus} />
                                </button>
                                <span id={`shop_1-counter${index}`}>{item.quantity}</span>
                                <button
                                    type="button"
                                    className="shop_1-cancel"
                                    id={`shop_1-cancel${index}`}
                                    onClick={() => handleRemoveFromCart(index)}
                                >
                                    <FontAwesomeIcon icon={faSquareXmark} />
                                </button>
                            </p>
                        ))}
                    </div>
                </div>
            ) : (
                <p>Loading menu...</p>
            )}
            <h1 className="shop_1-h1">CHECKOUT</h1>
            <p>Prepare to have your meal served at your doorstep!</p>
            <div className="shop_1-checkout">
                <h3 className="shop_1-h3">
                    TOTAL: KSH <span id="shop_1-total">{total.toFixed(2)}</span>
                </h3>
                <button id="shop_1-checkout" onClick={handleCheckout}>
                    <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: 50 }} />
                </button>
                <span id="shop_1-ordered">
                    {total > 0 && (
                        <>
                            Ordered Items: <br />
                            {menuItems.filter(item => item.quantity > 0).map(item => (
                                <span key={item.menu_item}>
                                    {item.quantity}x {item.menu_item} - Ksh {item.price.toFixed(2)} <br />
                                </span>
                            ))}
                        </>
                    )}
                </span>
            </div>
        </div>
    );
}

export default Shop;
