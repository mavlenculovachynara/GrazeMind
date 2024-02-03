import React, { useState } from "react";
import "./User.css";

const User = () => {
  const [followersCount, setFollowersCount] = useState(0);
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = () => {
    setFollowersCount((prevCount) => prevCount + 1);
    setIsFollowing(true);
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
      {!isFollowing && (
        <button className="follow-button" onClick={handleFollow}>
          Подписаться
        </button>
      )}
    </div>
  );
};

export default User;
