import React, { useEffect, useState } from "react";
import { usePost } from "../../context/PostContextPrivder";
import { useNavigate, useParams } from "react-router-dom";
import User from "../../img/user.webp";
import Like from "../../img/heart-shape.png";
import Comment from "../../img/comment.png";
import Repost from "../../img/send.png";
import "./Post.css";
const OnePost = () => {
  const [comment, setComment] = useState();
  const { onePost, getOnePost, likePost, like, addComment } = usePost();
  const { id } = useParams();
  useEffect(() => {
    getOnePost(id);
    console.log(onePost);
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navigate = useNavigate();
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

  const postDate = new Date(onePost.date_created);
  const formattedDate = postDate.toLocaleDateString();
  function handleComment() {
    let formData = new FormData();
    formData.append("post", id);
    formData.append("commenter", name);
    formData.append("content", comment);
    addComment(formData);
  }
  return (
    <div className="postitem_container2" key={onePost.id}>
      {onePost && onePost.creator && (
        <div className="postitem_title">
          <div className="postitem_text">
            <div className="postitem_request">
              <img src={User} alt="img" />
              <div className="postitem_description">
                <h5>{onePost.creator.username}</h5>
                <p>{onePost.description}</p>
              </div>
            </div>
            <div className="postitem_actions">
              <span>{formattedDate}</span>
              <button onClick={toggleMenu}>...</button>
            </div>
          </div>
          <div className="postitem_info">
            <img
              src={onePost.image}
              alt="img"
              onClick={() => navigate(`/post_details/${onePost.id}`)}
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
                  <li onClick={handleMenuItemClick}>
                    Травля или преследование
                  </li>
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
              <img onClick={() => likePost(onePost.id)} src={Like} alt="img" />
              <img src={Comment} alt="img" />
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
      )}

      <div className="comment">
        <div className="postitem_text">
          <div className="postitem_request">
            <img src={User} alt="img" />
            <div className="postitem_description">
              <h5>{""}</h5>
            </div>
          </div>
        </div>
        <div className="add_comment">
          {" "}
          <textarea
            placeholder="Добавить комментарий..."
            onChange={(e) => setComment(e.target.value)}
          />
          <button type="submit" onClick={handleComment}>
            Отправить
          </button>
        </div>
        <div className="comment_container">
          <div className="comment_item">
            <div className="postitem_text">
              <div className="postitem_request">
                <img src={User} alt="img" />
                <div className="postitem_description">
                  <h5>{""}</h5>
                  <p>{""}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnePost;
