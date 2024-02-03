import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Home from "../../img/home (1).png";
import Threads from "../../img/threadslogo.svg";
import Like from "../../img/heart-shape.png";
import User from "../../img/icons8-user-32.png";
import Post from "../../img/more.png";
import Search from "../../img/search.png";
import Menu from "../../img/menu (1).png";
import Gallery from "../../img/gallery.png";
const Navbar = () => {
  const [isTop, setIsTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fileInputRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsTop(scrollTop === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const openFileInput = () => {
    fileInputRef.current.click();
  };
  const navigate = useNavigate();

  const handleSearchClick = () => {
    // логика для поиска
  };
  return (
    <div className={`navbar-wrapper ${isTop ? "" : "fixed"}`}>
      <nav className="nav-bar">
        <Link className="logo" to="/">
          <img alt="img" src={Threads} className="d-inline-block align-top" />
        </Link>

        <div className="nav-links">
          <Link to="/" className="link">
            <img className="" src={Home} alt="" />
          </Link>

          <Link to="/searchPage" className="link" onClick={handleSearchClick}>
            <img src={Search} alt="" />
          </Link>
          <div className="link" onClick={toggleModal}>
            <img src={Post} alt="" />
          </div>
          <Link to="/like" className="link">
            <img src={Like} alt="" />
          </Link>
          <Link to="/user" id="userIcon" className="link">
            <img src={User} alt="" />
          </Link>
        </div>
        <div className="burger-menu" onClick={toggleMenu}>
          <img src={Menu} alt="" />
        </div>
        {isMenuOpen && (
          <ul className="dropdown-menu">
            <li>Внешний вид</li>
            <hr />
            <li>Настройки</li>
            <hr />
            <li>Сообщить о проблеме</li>
            <hr />
            <li>Выйти</li>
          </ul>
        )}
        {isModalOpen && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="postitem_request">
                {" "}
                <img src={User} alt="img" />
                <h5>artemnesterenko</h5>
              </div>
              <div className="modal-actions">
                {" "}
                <input type="text" placeholder="Создайте ветку..." />
                <div className="postitem_addbutton">
                  <img src={Gallery} alt="img" onClick={openFileInput}></img>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
              <div className="modal-addbutton">
                {" "}
                <button>Опубликовать</button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
