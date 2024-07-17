import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isBusiness, setIsBusiness] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include', // Include credentials if using sessions
      });

      if (response.ok) {
        // Handle successful login
        navigate('/seller-homepage'); // Redirect as needed
      } else {
        // Handle failed login
        const errorMessage = await response.text();
        alert(errorMessage);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in. Please try again.');
    }
  };

  const handleRegister = () => {
    if (isBusiness) {
      navigate('/seller-register');
    } else {
      navigate('/buyer-register');
    }
  };

  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Siwaka Street Eats</title>
      </head>
      <body className="login-body">
        <h1 id="title" className="login-title">
          Welcome to Siwaka Street Eats
        </h1>
        <span className="login-wrapper">
          <div className="login-container" id="login-container-1">
            <h2>Login</h2>
            <form method="POST" id="login_form" onSubmit={handleLogin}>
              <input
                placeholder="Email"
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="login-input"
              />
              <br />
              <input
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="login-input"
              />
              <br />
              <label htmlFor="usertype">
                <input
                  id="usertype"
                  type="checkbox"
                  checked={isBusiness}
                  onChange={() => setIsBusiness(!isBusiness)}
                  className="login-checkbox"
                />
                Are you a business?
              </label>
              <br />
              <br />
              <div id="flex" className="login-flex">
                <input type="submit" value="Login" className="login-submit" />
                <button type="button" onClick={handleRegister} className="login-button">
                  Register
                </button>
              </div>
            </form>
          </div>
        </span>
      </body>
    </div>
  );
};

export default LoginPage;
