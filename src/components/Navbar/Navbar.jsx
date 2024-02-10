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
import Hash from "../../img/hash (1).png";
import User2 from "../../img/user.webp";
import Cross from "../../img/cross-mark.png";
import { useAuth } from "../../context/AuthContextProvider";
import LightDark from "../LightDark/LightDark";
import { usePost } from "../../context/PostContextPrivder";
import { name } from "../../helpers/const";

const Navbar = () => {
  const [isTop, setIsTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen4, setIsModalOpen4] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showCategories, setShowCategories] = useState(false);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [hashtag, setHashtag] = useState("");
  const [username, setUserName] = useState("");
  const [mail, setMail] = useState("");
  const [theme, setTheme] = useState("light");
  const [problemMessage, setProblemMessage] = useState("");

  const { categories, getCategories, addPost } = usePost();
  const { handleLogout } = useAuth();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  useEffect(() => {
    getCategories();
    const mail = JSON.parse(localStorage.getItem("email"));
    setUserName(name);
    setMail(mail);
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
    setSelectedImage(null);
    setShowCategories(false);
    document.body.style.overflow = "";
  };

  const handleSendMessage = () => {
    const message = document.querySelector(".modal-content3 textarea").value;
    localStorage.setItem("problemMessage", message);
    setIsModalOpen3(false);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal3 = () => {
    setIsModalOpen3(false);
  };

  const toggleModal3 = () => {
    setIsModalOpen3(!isModalOpen3);
    setIsMenuOpen(false);
  };

  const closeModal4 = () => {
    setIsModalOpen4(false);
  };

  const toggleModal4 = () => {
    setIsModalOpen4(!isModalOpen4);
    setIsMenuOpen(false);
  };

  const openFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleHashClick = () => {
    setShowCategories(!showCategories);
  };

  const handleCategoryClick = (category) => {
    setHashtag(`#${category}`);
    const input = document.querySelector(".modal-actions textarea");
    if (input) {
      input.value += ` #${category} `;
    }
  };

  const clearImageClick = () => {
    setSelectedImage(null);
    fileInputRef.current.value = null;
  };

  const handleToggleTheme = (newTheme) => {
    console.log("Theme toggled:", newTheme);
    setTheme(newTheme);
  };

  function postSave() {
    closeModal();
    let formData = new FormData();
    formData.append("description", description);
    formData.append("description", hashtag);
    formData.append("image", image);
    addPost(formData);
  }

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

          <Link to="/searchPage" className="link">
            <img src={Search} alt="" />
          </Link>
          <Link to="/" className="link" onClick={toggleModal}>
            <img src={Post} alt="" />
          </Link>
          <Link to="/like" className="link">
            <img src={Like} alt="" />
          </Link>
          <Link to={mail ? "/user" : "/login"} id="userIcon" className="link">
            <img src={User} alt="" />
          </Link>
        </div>
        <div className="burger-menu" onClick={toggleMenu}>
          <img src={Menu} alt="" />
        </div>
        {isMenuOpen && (
          <ul className="dropdown-menu">
            <li onClick={toggleModal4}>Внешний вид</li>
            <hr />
            <li onClick={() => navigate("/settings")}>Настройки</li>
            <hr />
            <li onClick={() => navigate("/meta_verified")}>Meta Verified</li>
            <hr />
            <li onClick={toggleModal3}>Сообщить о проблеме</li>
            <hr />
            <li onClick={() => navigate("/register")}>Зарегистрироваться</li>
            <hr />
            <li onClick={() => navigate("/login")}>Авторизация</li>
            <hr />
            <li onClick={() => navigate("/logout")}>Выйти</li>
          </ul>
        )}
        {isModalOpen && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="postitem_request">
                {" "}
                <img src={User2} alt="img" />
                <h5>{username}</h5>
              </div>
              <div className="modal-actions">
                {" "}
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Создайте ветку..."
                />
                <div className="postitem_addbutton">
                  <div className="postitem_image_container">
                    {" "}
                    <div className="hash-dropdown">
                      <img
                        src={Cross}
                        alt="img"
                        onClick={clearImageClick}
                        style={{ display: selectedImage ? "flex" : "none" }}
                      />
                      <img
                        src={Gallery}
                        alt="img"
                        onClick={openFileInput}
                        style={{ display: selectedImage ? "none" : "" }}
                      />
                      <img src={Hash} alt="img" onClick={handleHashClick} />
                    </div>
                    {showCategories && (
                      <div className="categories-dropdown">
                        {categories.map((elem) => (
                          <span
                            key={elem.id}
                            onClick={() => handleCategoryClick(elem.tag)}
                          >
                            +{elem.tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="selectFile">
                      {" "}
                      {selectedImage && (
                        <img src={selectedImage} alt="Selected" />
                      )}
                    </div>
                  </div>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileSelect}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
              <div className="modal-addbutton">
                {" "}
                <button onClick={postSave}>Опубликовать</button>
              </div>
            </div>
          </div>
        )}
        {isModalOpen3 && (
          <div className="modal3" onClick={closeModal3}>
            <h4>Сообщение о проблеме</h4>
            <div
              className="modal-content3"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-actions3">
                <textarea
                  placeholder="Предоставьте как можно более подробную информацию"
                  style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word" }}
                  onChange={(e) => setProblemMessage(e.target.value)}
                />
              </div>
              <div className="modal-addbutton3">
                {" "}
                <button onClick={handleSendMessage}>Отправить</button>
              </div>
            </div>
          </div>
        )}
        {isModalOpen4 && (
          <div className="modal4" onClick={closeModal4}>
            <h4>Внешний вид</h4>
            <div
              className="modal-content4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-addbutton4">
                {" "}
                <LightDark />
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
