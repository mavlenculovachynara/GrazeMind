import React, { useEffect, useState } from "react";
import "./Post.css";
import User from "../../img/user.webp";
import Like from "../../img/heart-shape.png";
import Comment from "../../img/comment.png";
import Repost from "../../img/send.png";
import { usePost } from "../../context/PostContextPrivder";
import { useNavigate } from "react-router-dom";
import { admin_email, email, name } from "../../helpers/const";

const PostItem = ({ elem }) => {
  const { deletePost, likePost, like, getComments, comments } = usePost();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const postDate = new Date(elem.date_created);
  const formattedDate = postDate.toLocaleDateString();
  const [isMenuOpen5, setIsMenuOpen5] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    getComments(elem.id);
  }, []);
  const toggleMenu = () => {
    if (isMenuOpen5) setIsMenuOpen5(false);
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleMenu5 = () => {
    toggleMenu();
    setIsMenuOpen5(!isMenuOpen5);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen5(false);
    setIsMenuOpen(false);
    alert("Спасибо, что сообщили об этом!");
  };
  function handleLike() {
    let formData = new FormData();
    formData.append("post", elem.id);
    formData.append("user", name);
    likePost(formData);
  }
  return (
    <div className="postitem_container">
      <div className="postitem_title">
        <div className="postitem_text">
          <div className="postitem_request">
            <img
              src={elem.avatar || User}
              alt="img"
              onClick={() => navigate(`/user_details/${elem.id}`)}
            />
            <div className="postitem_description">
              <h5>{elem.creator.email.split("@")[0]}</h5>
              <p>{elem.description}</p>
            </div>
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
                {email === admin_email || email === elem.creator.email ? (
                  <>
                    {" "}
                    <hr />
                    <li
                      style={{ color: "red" }}
                      onClick={() => deletePost(elem.id)}
                    >
                      Удалить
                    </li>
                  </>
                ) : null}
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
            <img onClick={handleLike} src={Like} alt="img" />
            <img
              onClick={() => navigate(`/post_details/${elem.id}`)}
              src={Comment}
              alt="img"
            />
            <img src={Repost} alt="img" />
          </div>
          <div>
            <p>
              <span>{comments.length} комментариев</span>
              <span>• {like.length} отметок "Нравится"</span>
            </p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default PostItem;
