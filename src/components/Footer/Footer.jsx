import React from 'react';
import './Footer.css'; 
import livestock from '../../img/livestock (1).png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-container">
          <img className="logo" src={livestock} alt="LiveStock Logo" width="60px" />
          <div className="site-info">
            <h2>GrazeMind</h2>
            <p>Добро пожаловать в мир инновационного решения для вашего хозяйства!</p>
          </div>
        </div>
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>Email: mavlenkulovachynara@gmail.com</p>
          <p>Instagram: @livestock_insta</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
