import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";
import UserIcon from "../../img/user.webp";
import Close from "../../img/blockicon.png";
import "./User.css";
import { name } from "../../helpers/const";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { getOneUser, oneUser, toSubscribe, getSubscribers } = useAuth();
  const { id } = useParams();
  useEffect(() => {
    getOneUser(id);
    console.log(oneUser);
  }, []);
  const [followersCount, setFollowersCount] = useState(0);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfilePhotoModalOpen, setIsProfilePhotoModalOpen] = useState(false);
  const fileInputRef = useRef(null);
  //! modal5
  useEffect(() => {
    getSubscribers();
    fileInputRef.current = document.createElement("input");
    fileInputRef.current.type = "file";
    fileInputRef.current.accept = "image/*";
    fileInputRef.current.style.display = "none";
  }, []);
  const toggleProfilePhotoModal = () => {
    setIsProfilePhotoModalOpen(!isProfilePhotoModalOpen);
  };  
  //! модальное окно для жалоб
  const [isMenuOpen5, setIsMenuOpen5] = useState(false);
  const toggleMenu5 = () => {
    setIsMenuOpen5(!isMenuOpen5);
  };
  const handleMenuItemClick = () => {
    setIsMenuOpen5(false);
    setIsMenuOpen(false);
    alert("Спасибо, что сообщили об этом!");
  };
  //! Детальный обзор профиля
  const [isMenuOpenDetailProfile, setIsMenuOpenDetailProfile] = useState(false);
  const toggleMenuDetailProfile = () => {
    setIsMenuOpenDetailProfile(!isMenuOpenDetailProfile);
  };

  //! модальное окно для редактирования профиля
  // const [isActive, setIsActive] = useState(false);

  // const handleToggle = () => {
  //   setIsActive(!isActive);
  // };

  const handleFollow = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowersCount((prevCount) => prevCount - 1);
    } else {
      setIsFollowing(true);
      setFollowersCount((prevCount) => prevCount + 1);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [activeTab, setActiveTab] = useState("threads");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  function handleSubscribe() {
    let formData = new FormData();
    formData.append("subscriber", name);
    formData.append("subscribed_to");
    handleFollow();
    toSubscribe(formData, id);
  }
  return (
    <div>
      <div className="profile-container">
        <div className="profile-title">
          <div className="profile-name">
            <h2>{oneUser.username ? oneUser.username : "Unknown"}</h2>
            <h4 style={{ color: "white", maxWidth: "100px" }}>
              {oneUser.biography}
            </h4>
            <p style={{ maxWidth: "80px" }}>
              {oneUser.last_online &&
                new Date(oneUser.last_online).toLocaleDateString()}
            </p>
            <p style={{ maxWidth: "80px" }}>
              <a href={oneUser.link}>{oneUser.link}</a>
            </p>
            <span>{followersCount} подписчиков</span>
          </div>
          <img
           onClick={toggleProfilePhotoModal}
            src={oneUser.avatar || UserIcon}
            alt="Аватар пользователя"
            className="avatar"
            style={{ width: "70px", height: "70px" }}
          />
        </div>
        {isProfilePhotoModalOpen && (
  <div className="profile-photo-modal" onClick={toggleProfilePhotoModal}>
    <div className="profile-photo-content">
      <img
        style={{ borderRadius: '50%', width: '200px', height: '200px' }}
        src={UserIcon}
        alt=""
      />
    </div>
  </div>
)}
        <div className="profile-buttons">
          {
            <button
              className={`follow-button ${isFollowing ? "following" : ""}`}
              onClick={handleSubscribe}
            >
              {isFollowing ? "Вы подписаны" : "Подписаться"}
            </button>
          }
          <div className="profile-more">
            {" "}
            <button onClick={toggleMenu}>...</button>
          </div>
          {/* //! модальное окно для редактирования профиля*/}
          {isMenuOpen && (
            <ul className="dropdown-menu3">
              <li onClick={toggleMenuDetailProfile}>Об этом профиле</li>
              <hr />
              <li>Выключить уведомление</li>
              <hr />
              <li>Ограничить доступ</li>
              <hr />
              <li style={{ color: "red" }}>Заблокировать</li>
              <hr />
              <li onClick={toggleMenu5} style={{ color: "red" }}>
                Пожаловаться
              </li>
              <hr />
              <li style={{ color: "red" }}>Удалить</li>
            </ul>
          )}
          {/* //! модальное окно для жалоб */}
          {isMenuOpen5 && (
            <ul className="dropdown-menu5">
              <div style={{ display: "flex" }}>
                <li>Почему вы хотите пожаловаться на эту публикацию?</li>
                <img
                  onClick={toggleMenu5}
                  style={{ width: "30px", height: "30px" }}
                  src={Close}
                  alt=""
                />
              </div>
              <hr />
              <li onClick={handleMenuItemClick}>Мне это не нравится</li>
              <hr />
              <li onClick={handleMenuItemClick}>Это спам</li>
              <hr />
              <li onClick={handleMenuItemClick}>
                Изображение обнаженного тела или действий сексуального характера
              </li>
              <hr />
              <li onClick={handleMenuItemClick}>
                Враждебные высказывания или символы
              </li>
              <hr />
              <li onClick={handleMenuItemClick}>Травля или преследование</li>
              <hr />
              <li onClick={handleMenuItemClick}>Ложная информация</li>
              <hr />
              <li onClick={handleMenuItemClick}>Мошенничество или обман</li>
              <hr />
              <li onClick={handleMenuItemClick}>
                Насилие или опасные организации
              </li>
              <hr />
              <li onClick={handleMenuItemClick}>
                Самоубийство или нанесение себе увечий
              </li>
            </ul>
          )}
          {/*//! Детальный обзор профиля */}
          {isMenuOpenDetailProfile && (
            <div className="modal2">
              <div
                className="modal-content2"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-actions2">
                  <span className="modalspan">Имя / Название</span>
                  <div className="modalinp">
                    <input
                      type="text"
                      value={oneUser.username && "Unknown"}
                      style={{ color: "white", m: "0px important" }}
                    />
                    <div className="icon">
                      <img id="usericon2" src={UserIcon} alt="" />
                    </div>
                  </div>
                  <hr className="hrmodal" />
                  <div>
                    <span className="modalspan">Дата регистрации</span>
                    <p className="detailP">Февраль 2024 г. · Более 100 млн</p>
                  </div>
                  <hr className="hrmodal" />
                  <div>
                    <span className="modalspan">
                      Предыдущие имена пользователя
                    </span>
                    <p className="detailP">
                      Имя пользователя менялось 3 раз в Instagram
                    </p>
                  </div>
                  <hr className="hrmodal" />
                  <div className="modalbtndetail">
                    <button onClick={toggleMenuDetailProfile}>Закрыть</button>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="replies-section">
            <div className="buttonForUser">
              <div
                className={activeTab === "threads" ? "button active" : "button"}
                onClick={() => handleTabChange("threads")}
              >
                Ветки
              </div>
              <div
                className={activeTab === "replies" ? "button active" : "button"}
                onClick={() => handleTabChange("replies")}
              >
                Ответы
              </div>
              <div
                className={activeTab === "likes" ? "button active" : "button"}
                onClick={() => handleTabChange("likes")}
              >
                Лайки
              </div>
            </div>
          </div>{" "}
        </div>{" "}
        <div className="contentForUser">
          {activeTab === "threads" && <p>Контент для веток</p>}
          {activeTab === "replies" && <p>Контент для ответов</p>}
          {activeTab === "likes" && <p>Контент для лайков</p>}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
