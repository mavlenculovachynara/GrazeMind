import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import Home from "../../img/home (1).png";
import Like from "../../img/heart-shape.png";
import User from "../../img/icons8-user-32.png";
import Post from "../../img/more.png";
import Search from "../../img/search.png";
import Gallery from "../../img/gallery.png";
const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fileInputRef = useRef(null);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const openFileInput = () => {
    fileInputRef.current.click();
  };

  const handleSearchClick = () => {
    // логика для поиска
  };
  return (
    <div>
      {" "}
      <div className="navbar-wrapper2">
        <nav className="nav-bar2">
          <div className="nav-links2">
            <Link to="/" className="link2">
              <img className="" src={Home} alt="" />
            </Link>
            <Link
              to="/searchPage"
              className="link2"
              onClick={handleSearchClick}
            >
              <img src={Search} alt="" />
            </Link>
            <div className="link2" onClick={toggleModal}>
              <img src={Post} alt="" />
            </div>
            <Link to="/like" className="link2">
              <img src={Like} alt="" />
            </Link>
            <Link to="/user" id="userIcon" className="link2">
              <img src={User} alt="" />
            </Link>
          </div>
          {isModalOpen && (
            <div className="modal" onClick={closeModal}>
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
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
    </div>
  );
};

export default Footer;
