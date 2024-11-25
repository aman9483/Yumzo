import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { assets } from '../../assets/assets';
import './LoginPopup.css';
import { register, login } from '../../redux/action/user';

export const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState('Sign Up');  // Toggle between Sign Up and Login
  const [formData, setFormData] = useState({ Fullname: '', email: '', password: '' });
  const dispatch = useDispatch();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let result;

      // Depending on the current state (Sign Up or Login), call the respective action
      if (currState === 'Sign Up') {
        // Dispatch the register action
        result = await dispatch(register({
          Fullname: formData.Fullname,
          email: formData.email,
          password: formData.password
        }));

        // If registration is successful, switch to the Login form
        if (result.success) {
          // Change state to 'Login' after successful registration
          setCurrState('Login');
        }
      } else {
        // Dispatch the login action
        result = await dispatch(login(formData.email, formData.password));
      }

      // If login is successful, close the popup
      if (result.success) {
        setShowLogin(false);
      } else {
        console.error(result.message);  // This will show the error message if unsuccessful
      }
    } catch (error) {
      console.error("Error during registration/login:", error);
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={handleSubmit} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className="login-popup-inputs">
          {currState === 'Sign Up' && (
            <input
              type="text"
              name="Fullname"
              placeholder="Your name"
              value={formData.Fullname}
              onChange={handleChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">{currState === 'Sign Up' ? 'Create account' : 'Login'}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currState === 'Login' ? (
          <p>
            Create a new account? <span onClick={() => setCurrState('Sign Up')}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={() => setCurrState('Login')}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};
