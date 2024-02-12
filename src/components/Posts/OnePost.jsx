import React, { useEffect, useState } from "react";
import { usePost } from "../../context/PostContextPrivder";
import { useNavigate, useParams } from "react-router-dom";
import User from "../../img/user.webp";
import Like from "../../img/heart-shape.png";
import Comment from "../../img/comment.png";
import Repost from "../../img/send.png";
import { admin_email, avatar, email, name } from "../../helpers/const";
import "./Post.css";

const OnePost = () => {
  const [comment, setComment] = useState("");
  const {
    onePost,
    getOnePost,
    likePost,
    like,
    addComment,
    comments,
    getComments,
    deleteComments,
    translateComments,
    translateComment,
    unLikePost,
  } = usePost();
  const { id } = useParams();
  useEffect(() => {
    getOnePost(id);
    getComments(id);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [activeMenuId, setActiveMenuId] = useState(null);
  const toggleMenu2 = (id) => {
    setActiveMenuId((prevId) => (prevId === id ? null : id));
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
    addComment(formData, id);
  }

  function handleLike() {
    let formData = new FormData();
    formData.append("post", id);
    formData.append("user", name);
    likePost(formData);
  }

  function handleUnlike() {
    let formData = new FormData();
    formData.append("post", id);
    formData.append("user", name);
    unLikePost(formData);
  }

  const [translatedComments, setTranslatedComments] = useState({});

  function toggleTranslate(id) {
    setTranslatedComments((prevComments) => ({
      ...prevComments,
      [id]: !prevComments[id],
    }));
  }

  function handleTranslate(id) {
    translateComments(id);
    toggleTranslate(id);
    toggleMenu2();
  }

  return (
    <div className="postitem_container2" key={onePost.id}>
      {onePost && onePost.creator && (
        <div className="postitem_title">
          <div className="postitem_text">
            <div className="postitem_request">
              <img src={onePost.avatar || User} alt="img" />
              <div className="postitem_description">
                <h5>{onePost.creator.email.split("@")[0]}</h5>
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
              {like.find((user) => user.email === email) ? (
                <img onClick={handleUnlike} src={Like} alt="img" />
              ) : (
                <img onClick={handleLike} src={Like} alt="img" />
              )}
              <img src={Comment} alt="img" />
              <img src={Repost} alt="img" />
            </div>
            <div>
              <p>
                <span>{comments.length} ответов</span>
                <span>• {like.length} отметок "Нравится"</span>
              </p>
            </div>
          </div>
          <hr />
        </div>
      )}

      <div className="comment">
        <div className="postitem_text">
          <div className="postitem_request">
            <img src={avatar || User} alt="img" />
            <div className="postitem_description">
              <h5>{email.split("@")[0]}</h5>
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
          {comments.map((elem) => (
            <div className="comment_item" key={elem.id}>
              <div className="postitem_text" style={{ width: "500px" }}>
                <div
                  className="postitem_request"
                  style={{ margin: "0px 10px" }}
                >
                  <img
                    src={elem.avatar || User}
                    alt="img"
                    style={{ width: "55px" }}
                  />
                  <div className="postitem_description">
                    <h5>{elem.commenter.email.split("@")[0]}</h5>
                    <p>
                      {translatedComments[elem.id]
                        ? translateComment.translated
                        : elem.content}
                    </p>
                  </div>
                </div>
                <div
                  className="postitem_actions"
                  style={{ margin: "0px 10px", position: "relative" }}
                >
                  <span>
                    {new Date(elem.date_created).toLocaleDateString()}
                  </span>
                  <button onClick={() => toggleMenu2(elem.id)}>...</button>
                  <div className="postitem_menu">
                    {activeMenuId === elem.id && (
                      <ul
                        className="dropdown-menu2"
                        style={{
                          position: "absolute",
                          left: "290px",
                          top: "30px",
                          zIndex: 1,
                        }}
                      >
                        <li onClick={toggleMenu2}>Скрыть</li>
                        <hr />
                        <li onClick={() => handleTranslate(elem.id)}>
                          {translatedComments[elem.id]
                            ? "Оригинал"
                            : "Перевести"}
                        </li>
                        <hr />
                        <li style={{ color: "red" }}>Пожаловаться</li>
                        {email === admin_email ? (
                          <>
                            <hr />
                            <li
                              style={{ color: "red" }}
                              onClick={() => deleteComments(elem.id)}
                            >
                              Удалить
                            </li>
                          </>
                        ) : null}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnePost;
