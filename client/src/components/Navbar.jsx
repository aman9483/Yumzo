import React, { useState, useEffect, useContext } from 'react';  // <-- Import useContext from React
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';  // Your custom context
import { assets } from './../assets/assets';
import './Navbar/Navbar.css';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [user, setUser] = useState(null);  // Store user data here
  const { getTotalCartAmount } = useContext(StoreContext);  // Accessing cart context

  useEffect(() => {
    // Fetch user data from localStorage
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    if (loggedInUser) {
      setUser(loggedInUser);  // Set the user if they are logged in
    }
  }, []);

  // Handle logout by removing user data from localStorage
  const handleLogout = () => {
    localStorage.removeItem('user');  // Remove user from localStorage
    setUser(null);  // Clear the user state
  };

  return (
    <div className="navbar">
      {/* Apply a unique class 'navbar-title' to the Yumzo title */}
      <Link to="/" className="navbar-title">Yumzo</Link>

      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="search icon" />

        <div className="navbar-search-icon">
          <Link to='/cart'>
            <img src={assets.basket_icon} alt="basket icon" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>

        {/* Show Sign In button if not logged in */}
        {!user ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          // Show user name and Logout button if logged in
          <div className="user-info">
            <span>{user.Fullname}</span>  {/* Display user's name */}
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
