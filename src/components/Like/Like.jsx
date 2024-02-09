import React, { useState } from "react";
import "./Like.css";
import User from "../../img/user.webp";
const Like = () => {
  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (buttonName) => {
    if (activeButton === buttonName) {
      setActiveButton(null);
    } else {
      setActiveButton(buttonName);
    }
  };

  return (
    <div className="like-section">
      <div className="like-container">
        <button
          className={`like-button ${activeButton === "all" ? "active" : ""}`}
          onClick={() => handleButtonClick("all")}
        >
          Все
        </button>
        <button
          className={`like-button ${
            activeButton === "requests" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("requests")}
        >
          Запросы
        </button>
        <button
          className={`like-button ${
            activeButton === "replies" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("replies")}
        >
          Ответы
        </button>
        <button
          className={`like-button ${
            activeButton === "mentions" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("mentions")}
        >
          Упоминания
        </button>
        <button
          className={`like-button ${activeButton === "quotes" ? "active" : ""}`}
          onClick={() => handleButtonClick("quotes")}
        >
          Цитирования
        </button>
        <button
          className={`like-button ${
            activeButton === "confirmed" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("confirmed")}
        >
          Потвержденные
        </button>
      </div>

      <div className="postitem_text">
        <div className="postitem_request">
          <img src={User} alt="img" />
          <div className="postitem_description">
            <h5>{""}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Like;
