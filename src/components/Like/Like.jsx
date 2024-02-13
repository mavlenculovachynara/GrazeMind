import React, { useState } from "react";
import "./Like.css";
import { useNavigate } from "react-router-dom";
const Like = () => {
  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (buttonName) => {
    if (activeButton === buttonName) {
      setActiveButton(null);
    } else {
      setActiveButton(buttonName);
    }
  };

  const navigate = useNavigate();

  return (
    <div className="like-section">
      <div className="like-container">
        <button
          className={`like-button ${activeButton === "all" ? "active" : ""}`}
          onClick={() => {handleButtonClick("all"); navigate('/all_likes')}}
        >
          Все
        </button>
        <button
          className={`like-button ${
            activeButton === "replies" ? "active" : ""
          }`}
          onClick={() => {handleButtonClick("replies"); navigate('/answers')}}
        >
          Ответы
        </button>
        <button
          className={`like-button ${
            activeButton === "mentions" ? "active" : ""
          }`}
          onClick={() => {handleButtonClick("mentions"); navigate('/like_page')}}
        >
          Лайки
        </button>
      </div>
    </div>
  );
};

export default Like;
