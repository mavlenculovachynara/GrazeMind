import React, { useEffect, useState } from "react";
import User from "../../img/user.webp";
import { useNavigate, useParams } from "react-router-dom";
import { usePost } from "../../context/PostContextPrivder";
import { email, name, ws } from "../../helpers/const";
import { useAuth } from "../../context/AuthContextProvider";
import "./User.css";

const ChatWithUser = () => {
  const { addMessage } = usePost();
  const { getOneUser, oneUser } = useAuth();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getOneUser(id);
  }, []);

  useEffect(() => {
    ws.onopen = () => {
      console.log("Connected to WebSocket");
    };
    ws.onmessage = (e) => {
      JSON.parse(e.data);
    };
    ws.onclose = () => {
      console.log("Disconnected from WebSocket");
    };
    return () => {
      ws.close();
    };
  }, []);

  function handleMessage() {
    if (messages.trim() !== "") {
      const data = {
        sender: { email: email, username: name },
        receiver: { email: oneUser.email, username: oneUser.username },
        message: messages,
      };
      ws.send(JSON.stringify(data));
      addMessage(data);
      setMessages("");
    }
    addMessage(messages);
  }
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
        <input
          type="text"
          placeholder="Напишите сообщение..."
          onChange={(e) => setMessages(e.target.value)}
        />
        <button onClick={handleMessage}>Отправить</button>
      </div>
    </div>
  );
};

export default ChatWithUser;
