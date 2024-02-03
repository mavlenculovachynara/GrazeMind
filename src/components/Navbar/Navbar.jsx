// Navbar.js
import React from "react";
import { Link, useNavigate } from 'react-router-dom'; 
import './Navbar.css'
import Home from '../../img/home (1).png'
import Threads from '../../img/Threads_(app).svg.png'
import Like from '../../img/icons8-like-24.png';
import User from '../../img/icons8-user-32.png';
import Post from '../../img/more.png';
import Search from '../../img/search.png'
import Menu from '../../img/menu (1).png'

const Navbar = () => {
  const navigate = useNavigate(); 

  const handleSearchClick = () => {
    // логика для поиска
  };

  return (
    <div>
      <nav className="nav-bar">
        <div className="logo">
          <img
            alt=""
            src={Threads}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </div>
        <div className="nav-links">
          <Link to="/" className="link">
            <img className="" src={Home} alt="" />
          </Link>
          <Link to="/searchPage" className="link" onClick={handleSearchClick}>
            <img src={Search} alt="" />
          </Link>
          <Link to="/post" className="link">
            <img src={Post} alt="" />
          </Link>
          <Link to="/like" className="link">
            <img src={Like} alt="" />
          </Link>
          <Link to="/user" id="userIcon" className="link">
            <img src={User} alt="" />
          </Link>
        </div>
        <div className="user-menu">
          <Link to="/user" className="link">
            <img src={Menu} alt="" />
          </Link>
          <div className="burger-menu">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
