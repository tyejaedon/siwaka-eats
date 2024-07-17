<div className='body'>


<div className="shop_1-image">
    <nav>
        <ul className="shop_1-navbar">
            <li>
                <a href="homepage_user.html">Home</a>
            </li>
            <li>
                <a href="dashboard_us.html">Dashboard</a>
            </li>
            <li>
                <a href="contact_us.html">Contact Us</a>
            </li>
        </ul>
    </nav>
    <span className="shop_1-profile"></span>
</div>
<div className="shop_1-menu">
    <h2>Our Menu</h2>
    <h3>Main Dishes</h3>
    <div className="shop_1-food">
        {menuItems.map((item, index) => (
            <p key={index}>
                <span className="shop_1-food">{item.name}</span> -{' '}
                <span className="shop_1-price">ksh {item.price}</span>
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
    <h3>Beverages</h3>
    <div className="shop_1-food">
        <p>Soda - ksh 60</p>
        <p>Monster - ksh 300</p>
        <p>Tea - ksh 50</p>
        <p>Coffee - ksh 40</p>
    </div>
</div>
<h1>CHECKOUT</h1>
<p>Prepare to have your meal served at your doorstep!</p>
<div className="shop_1-checkout">
    <h3>
        TOTAL: KSH <span id="shop_1-total">{total}</span>
    </h3>
    <button id="shop_1-checkout" onClick={handleCheckout}>
        <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: 50 }} />
    </button>
    <span id="shop_1-ordered">
        {total > 0 && ( // Only show if there are ordered items (total > 0)
            <>
                Ordered Items: <br />
                {menuItems.filter((item) => item.quantity > 0).map((item) => (
                    <span key={item.name}>
                        {item.quantity}x {item.name} - Ksh {item.price} <br />
                    </span>
                ))}
            </>
        )}
    </span>

</div>
</div>