import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { LoginPopup } from './components/LoginPopup/LoginPopup';
import Navbar from './components/Navbar';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Order from './pages/PlaceOrder/Order';
import Loader from './components/loader/loader';  // Import the loader component

const App = () => {
  // Display popup for login
  const [showLogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(true);  // Track loading state

  // Simulate a loading state (e.g., fetching data or assets)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);  // Set loading to false after 2 seconds or once data is loaded
    }, 2000);  // Adjust time as needed

    return () => clearTimeout(timer);  // Cleanup timer when the component is unmounted
  }, []);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        {/* Show loader while loading is true */}
        {loading ? (
          <Loader />  // Show loader component while loading
        ) : (
          <>
            <Navbar setShowLogin={setShowLogin} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order" element={<Order />} />
            </Routes>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
