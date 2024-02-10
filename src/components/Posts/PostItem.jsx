import React, { useState } from "react";
import "./Post.css";
import User from "../../img/user.webp";
import Like from "../../img/heart-shape.png";
import Comment from "../../img/comment.png";
import Repost from "../../img/send.png";
import { usePost } from "../../context/PostContextPrivder";
import { useNavigate } from "react-router-dom";

const PostItem = ({ elem }) => {
  const { deletePost, likePost, like } = usePost();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const postDate = new Date(elem.date_created);
  const formattedDate = postDate.toLocaleDateString();
  const navigate = useNavigate();
  const toggleMenu = () => {
    if (isMenuOpen5) setIsMenuOpen5(false);
    setIsMenuOpen(!isMenuOpen);
  };
  const [isMenuOpen5, setIsMenuOpen5] = useState(false);
  const toggleMenu5 = () => {
    toggleMenu();
    setIsMenuOpen5(!isMenuOpen5);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen5(false);
    setIsMenuOpen(false);
    alert("Спасибо, что сообщили об этом!");
  };

  return (
    <div className="postitem_container">
      <div className="postitem_title">
        <div className="postitem_text">
          <div className="postitem_request">
            <img src={User} alt="img" />
            <div className="postitem_description">
              <h5>{elem.creator.username}</h5>
              <p>{elem.description}</p>
            </div>
          </div>
          <div className="postitem_actions">
            <span>{formattedDate}</span>
            <button onClick={toggleMenu}>...</button>
          </div>
        </div>
        <div className="postitem_info">
          <img
            src={elem.image}
            alt="img"
            onClick={() => navigate(`/post_details/${elem.id}`)}
          />
          <div className="postitem_menu">
            {isMenuOpen && (
              <ul className="dropdown-menu2">
                <li onClick={toggleMenu}>Скрыть</li>
                <hr />
                <li>Выключить уведомление</li>
                <hr />
                <li style={{ color: "red" }}>Заблокировать</li>
                <hr />
                <li style={{ color: "red" }} onClick={toggleMenu5}>
                  Пожаловаться
                </li>
                <hr />
                <li
                  style={{ color: "red" }}
                  onClick={() => deletePost(elem.id)}
                >
                  Удалить
                </li>
              </ul>
            )}
            {isMenuOpen5 && (
              <ul className="dropdown-menu5">
                <li onClick={toggleMenu5}>Скрыть</li>
                <hr />
                <li>Почему вы хотите пожаловаться на эту публикацию?</li>
                <hr />
                <li onClick={handleMenuItemClick}>Мне это не нравится</li>
                <hr />
                <li onClick={handleMenuItemClick}>Это спам</li>
                <hr />
                <li onClick={handleMenuItemClick}>
                  Изображение обнаженного тела или действий сексуального
                  характера
                </li>
                <hr />
                <li onClick={handleMenuItemClick}>
                  Враждебные высказывания или символы
                </li>
                <hr />
                <li onClick={handleMenuItemClick}>Травля или преследование</li>
                <hr />
                <li onClick={handleMenuItemClick}>Ложная информация</li>
                <hr />
                <li onClick={handleMenuItemClick}>Мошенничество или обман</li>
                <hr />
                <li onClick={handleMenuItemClick}>
                  Насилие или опасные организации
                </li>
                <hr />
                <li onClick={handleMenuItemClick}>
                  Самоубийство или нанесение себе увечий
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="postitem_buttons">
          <div>
            {" "}
            <img onClick={() => likePost(elem.id)} src={Like} alt="img" />
            <img
              onClick={() => navigate(`/post_details/${elem.id}`)}
              src={Comment}
              alt="img"
            />
            <img src={Repost} alt="img" />
          </div>
          <div>
            <p>
              <span>84 ответов</span>
              <span>• {like} отметок "Нравится"</span>
            </p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default PostItem;
