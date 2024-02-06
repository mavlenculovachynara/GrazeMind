import React, { useEffect, useRef, useState } from "react";
import LockIcon from "../../img/lock.png";
import UserIcon from "../../img/user.webp";
import Close from '../../img/blockicon.png';
import "./User.css";

const User = () => {
  const [followersCount, setFollowersCount] = useState(0);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fileInputRef = useRef(null);
  const email = JSON.parse(localStorage.getItem("email"));
  const name = email ? email.split("@")[0] : "Guest";

  //! modal5

  useEffect(() => {
    fileInputRef.current = document.createElement("input");
    fileInputRef.current.type = "file";
    fileInputRef.current.accept = "image/*";
    fileInputRef.current.style.display = "none";
  }, []);
       //! модальное окно для жалоб
  const [isMenuOpen5, setIsMenuOpen5] = useState(false);
  const toggleMenu5 = () => {
    setIsMenuOpen5(!isMenuOpen5);
  };
  const handleMenuItemClick = () => {
    setIsMenuOpen5(false);
    setIsMenuOpen(false)
    alert('Спасибо, что сообщили об этом!');
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

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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

  return (
    <div className="profile-container">
      <div className="profile-title">
        <div className="profile-name">
          <h2>{name ? name : <span>Guest</span>}</h2>
          <p>Веб-разработчик</p>
          <span>{followersCount} подписчиков</span>
        </div>
        <img
          src="https://i.pinimg.com/474x/31/af/f1/31aff1f41b565d819acc5ab0003be45e.jpg"
          alt="Аватар пользователя"
          className="avatar"
        />
      </div>
      <div className="profile-buttons">
        <button className="edit-profile-button" onClick={toggleModal}>
          Редактировать профиль
        </button>{" "}
        <button
          className={`follow-button ${isFollowing ? "following" : ""}`}
          onClick={handleFollow}
        >
          {isFollowing ? "Вы подписаны" : "Подписаться"}
        </button>
        <div className="profile-more">
          {" "}
          <button onClick={toggleMenu}>...</button>
        </div>
        {/* //! модальное окно для редактирования профиля*/}
        {isModalOpen && (
          <div className="modal2" onClick={closeModal}>
            <div
              className="modal-content2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-actions2">
                <span className="modalspan">Имя</span>
                <div className="modalinp">
                  <img src={LockIcon} alt="" />{" "}
                  <input
                    type="text"
                    value="Meerim"
                    style={{ color: "white" }}
                  />
                  <div className="icon">
                    <img id="usericon" src={UserIcon} alt="" />
                  </div>
                </div>
                <hr className="hrmodal" />
                <div>
                  <span className="modalspan">Биография</span>
                  <input type="text" value="+ Добавить биографию" />
                </div>
                <hr className="hrmodal" />
                <div>
                  <span className="modalspan">Ссылка</span>
                  <input type="text" value="+ Добавить ссылку" />
                </div>
                <hr className="hrmodal" />
                <div className="modalbtn">
                  <button onClick={closeModal}>Готово</button>
                </div>
              </div>
            </div>
          </div>
        )}
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
            <li onClick={toggleMenu5} style={{ color: "red" }}>Пожаловаться</li>
            <li style={{ color: "red" }} onClick={toggleMenu5}>
              Пожаловаться
            </li>
            <hr />
            <li style={{ color: "red" }}>Удалить</li>
          </ul>
        )} 
        {/* //! модальное окно для жалоб */}
        {isMenuOpen5 && (
            <ul className="dropdown-menu5">
              <div style={{display:'flex'}}><li>Почему вы хотите пожаловаться на эту публикацию?</li><img onClick={toggleMenu5} style={{width: '30px', height: '30px'}} src={Close} alt="" /></div>
              <hr />
              <li onClick={handleMenuItemClick}>Мне это не нравится</li>
              <hr />
              <li onClick={handleMenuItemClick}>Это спам</li>
              <hr />
              <li onClick={handleMenuItemClick}>Изображение обнаженного тела или действий сексуального характера</li>
              <hr />
              <li onClick={handleMenuItemClick}>Враждебные высказывания или символы</li>
              <hr />
              <li onClick={handleMenuItemClick}>Травля или преследование</li>
              <hr />
              <li onClick={handleMenuItemClick}>Ложная информация</li>
              <hr />
              <li onClick={handleMenuItemClick}>Мошенничество или обман</li>
              <hr />
              <li onClick={handleMenuItemClick}>Насилие или опасные организации</li>
              <hr />
              <li onClick={handleMenuItemClick}>Самоубийство или нанесение себе увечий</li>
            </ul>
          )}
          {/*//! Детальный обзор профиля */}
           {isMenuOpenDetailProfile && (
        <div className="modal2">
          <div className="modal-content2" onClick={(e) => e.stopPropagation()}>
            <div className="modal-actions2"><span className="modalspan">Имя / Название</span>
            <div className="modalinp"><input type="text" value="Meerim" style={{color: 'white', m:'0px important'}}/>
             <div className="icon"><img id="usericon" src={UserIcon} alt="" /></div></div> 
            <hr className="hrmodal"/>
            <div><span className="modalspan">Дата регистрации</span><p className="detailP">Февраль 2024 г. · Более 100 млн</p></div>
            <hr className="hrmodal"/>
            <div><span className="modalspan">Предыдущие имена пользователя</span><p className="detailP">Имя пользователя менялось 3 раз в Instagram</p></div>
            <hr className="hrmodal"/>
            <div className="modalbtndetail"><button onClick={toggleMenuDetailProfile}>Закрыть</button></div>
            </div>
          </div>
        </div>
           )}
          
        <div className="replies-section">
          <div>
            {" "}
            <span>Ветки</span>
          </div>
          <div>
            {" "}
            <span>Ответы</span>
          </div>
          <div>
            {" "}
            <span>Лайки</span>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default User;
