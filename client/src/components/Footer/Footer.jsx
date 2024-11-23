import React from 'react';
import { assets } from '../../assets/assets';
import './Footer.css';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';
import '../AppDownload/AppDownload.css';
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                <Link to='/' className="navbar-title">Yumzo</Link>
         <p>Yumzo is a state-of-the-art food delivery app that brings your favorite meals to your doorstep. With a sleek and intuitive interface, explore a wide variety of cuisines, easily browse menus, and enjoy seamless order tracking. Whether you're craving a quick bite or a full-course meal, Yumzo offers a fast, reliable, and personalized dining experience for every food lover.</p>
             <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                </div>  
               
                </div>
                <div className="footer-content-right">
               <h2>COMPANY</h2>
               <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
               </ul>
                </div>
                <div className="footer-content-center">
<h2>GET IN TOUCH</h2>
<ul>
    <li>+1-212-256-7890</li>
    <li>contact@tomato.com</li>
</ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 © Tomato.com-All Right Reserved </p>
        </div>

        <div  className="app-download-platform">

        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default Footer