import React from "react";
import "./Like.css";

const Like = () => {
  return (
    <div className="like-container">
      <button className="like-button">Все</button>
      <button className="like-button">Запросы</button>
      <button className="like-button">Ответы</button>
      <button className="like-button">Упоминания</button>
      <button className="like-button">Цитирования</button>
      <button className="like-button confirmed">Потвержденные</button>
    </div>
  );
};

export default Like;
