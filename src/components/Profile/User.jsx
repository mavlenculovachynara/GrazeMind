import React, { useState } from "react";
import "./User.css";
import { Link } from "react-router-dom";
const User = () => {
  const [followers, setFollowers] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = () => {
    setIsFollowing(true);
    setFollowers((prevFollowers) => [...prevFollowers, currentUser]);
  };

  const handleUnfollow = () => {
    setIsFollowing(false);
    setFollowers((prevFollowers) =>
      prevFollowers.filter((follower) => follower !== currentUser)
    );
  };

  const currentUser = "current_user";
  return (
    <div className="profile-container">
      <img
        src="https://i.pinimg.com/474x/31/af/f1/31aff1f41b565d819acc5ab0003be45e.jpg"
        alt="Аватар пользователя"
        className="avatar"
      />
      <h2 className="username">qwarllx</h2>
      <p className="bio">Веб-разработчик</p>
      <div className="user-details">
        <Link to="/instagram" className="link">
          <img
            src="https://cdn-icons-png.freepik.com/256/174/174855.png?ga=GA1.1.2114092305.1701882282"
            alt="instagram-icon"
            className="insta-icon"
          />
        </Link>
      </div>
      <p>followings: {followers.length}</p>
      {isFollowing ? (
        <button className="unfollow-button" onClick={handleUnfollow}>
          Unfollow
        </button>
      ) : (
        <button className="follow-button" onClick={handleFollow}>
          Follow
        </button>
      )}
    </div>
  );
};

export default User;
