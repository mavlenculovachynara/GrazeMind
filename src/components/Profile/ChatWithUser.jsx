import React, { useEffect } from "react";
import User from "../../img/user.webp";
import { useNavigate, useParams } from "react-router-dom";
import { name } from "../../helpers/const";
import { useAuth } from "../../context/AuthContextProvider";
import "./User.css";

const ChatWithUser = () => {
  const { getOneUser, oneUser } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    getOneUser(id);
  }, []);
  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="user-info">
          <img
            onClick={() => navigate(`/user_details/${id}`)}
            src={oneUser.avatar || User}
            alt="User Avatar"
            className="avatar"
          />
          <h4
            className="username"
            onClick={() => navigate(`/user_details/${id}`)}
          >
            {oneUser.username}
          </h4>
        </div>
        <button className="close-button" onClick={() => navigate("/")}>
          X
        </button>
      </div>
      <div className="chat-messages">
        <div className="message received">
          <div className="message-content">
            <p>{name}: Привет! Как дела?</p>
          </div>
        </div>
        <div className="message sent">
          <div className="message-content">
            <p>
              {" "}
              {oneUser.username ? oneUser.username : "Unknown"}: Привет! Всё
              отлично, спасибо!
            </p>
          </div>
        </div>
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Напишите сообщение..." />
        <button>Отправить</button>
      </div>
    </div>
  );
};

export default ChatWithUser;
