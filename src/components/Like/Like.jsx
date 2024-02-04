import React, { useState } from "react";
import "./Like.css";

const Like = () => {
  // Состояние для отслеживания активного состояния каждой кнопки
  const [activeButton, setActiveButton] = useState(null);

  // Функция для обработки клика по кнопке
  const handleButtonClick = (buttonName) => {
    // Если текущая кнопка уже активна, деактивируем ее
    if (activeButton === buttonName) {
      setActiveButton(null);
    } else {
      // Иначе активируем выбранную кнопку
      setActiveButton(buttonName);
    }
  };

  return (
    <div className="like-container">
      <button
        className={`like-button ${activeButton === "all" ? "active" : ""}`}
        onClick={() => handleButtonClick("all")}
      >
        Все
      </button>
      <button
        className={`like-button ${activeButton === "requests" ? "active" : ""}`}
        onClick={() => handleButtonClick("requests")}
      >
        Запросы
      </button>
      <button
        className={`like-button ${activeButton === "replies" ? "active" : ""}`}
        onClick={() => handleButtonClick("replies")}
      >
        Ответы
      </button>
      <button
        className={`like-button ${activeButton === "mentions" ? "active" : ""}`}
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
  );
};

export default Like;
