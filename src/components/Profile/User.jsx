import React, { useState } from "react";
import "./User.css";

const User = () => {
  const [followersCount, setFollowersCount] = useState(0);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <h2>qwarllx</h2>
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
        <button className="edit-profile-button">Редактировать профиль</button>{" "}
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
        {isMenuOpen && (
          <ul className="dropdown-menu3">
            <li>Об этом профиле</li>
            <hr />
            <li>Выключить уведомление</li>
            <hr />
            <li>Ограничить доступ</li>
            <hr />
            <li style={{ color: "red" }}>Заблокировать</li>
            <hr />
            <li style={{ color: "red" }}>Пожаловаться</li>
            <hr />
            <li style={{ color: "red" }}>Удалить</li>
          </ul>
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
