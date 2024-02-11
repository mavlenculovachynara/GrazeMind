import React, { useEffect, useRef, useState } from "react";
import LockIcon from "../../img/lock.png";
import UserIcon from "../../img/user.webp";
import { name } from "../../helpers/const";
import { useAuth } from "../../context/AuthContextProvider";
import "./User.css";

const User = () => {
  const [followersCount, setFollowersCount] = useState(0);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBio, setIsBio] = useState("");
  const [isLink, setIsLink] = useState("");
  const fileInputRef = useRef(null);
  const { editUser } = useAuth();
  const bio = JSON.parse(localStorage.getItem("bio"));
  const link = JSON.parse(localStorage.getItem("link"));
  //! modal5

  useEffect(() => {
    fileInputRef.current = document.createElement("input");
    fileInputRef.current.type = "file";
    fileInputRef.current.accept = "image/*";
    fileInputRef.current.style.display = "none";
  }, []);

  //! модальное окно для редактирования профиля
  // const [isActive, setIsActive] = useState(false);

  // const handleToggle = () => {
  //   setIsActive(!isActive);
  // };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleFollow = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowersCount((prevCount) => prevCount - 1);
    } else {
      setIsFollowing(true);
      setFollowersCount((prevCount) => prevCount + 1);
    }
  };

  const [activeTab, setActiveTab] = useState("threads");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  function handleEditUser() {
    if (!isBio.trim()) return;
    if (!isLink.startsWith("https://")) return;
    closeModal();
    let formData = new FormData();
    formData.append("biography", isBio);
    localStorage.setItem("bio", JSON.stringify(isBio));
    formData.append("link", isLink);
    localStorage.setItem("link", JSON.stringify(isLink));
    editUser(formData);
  }

  return (
    <div className="profile-container">
      <div className="profile-title">
        <div className="profile-name">
          <h2>{name}</h2>
          <h4 style={{ color: "white", maxWidth: "100px" }}>{bio}</h4>
          <p style={{ maxWidth: "80px" }}>
            <a href={link}>{link}</a>
          </p>
          <span>{followersCount} подписчиков</span>
        </div>
        <img
          src={UserIcon}
          alt="Аватар пользователя"
          className="avatar"
          style={{ width: "70px", height: "70px" }}
        />
      </div>
      <div className="profile-buttons">
        <button className="edit-profile-button" onClick={toggleModal}>
          Редактировать профиль
        </button>{" "}
        {/* //! модальное окно для редактирования профиля*/}
        {isModalOpen && (
          <div className="modal2" onClick={closeModal}>
            <div
              className="modal-content2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-actions2">
                <span className="modalspan">Имя</span>
                <div className="modalinp">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {" "}
                    <img src={LockIcon} alt="" />{" "}
                    <input
                      type="text"
                      defaultValue={name}
                      style={{ color: "white" }}
                    />
                  </div>

                  <div className="icon">
                    <img id="usericon1" src={UserIcon} alt="img" />
                  </div>
                </div>
                <hr className="hrmodal" />
                <div>
                  <span className="modalspan">Биография</span>
                  <input
                    type="text"
                    placeholder="+ Добавить биографию"
                    onChange={(e) => setIsBio(e.target.value)}
                  />
                </div>
                <hr className="hrmodal" />
                <div>
                  <span className="modalspan">Ссылка</span>
                  <input
                    type="text"
                    placeholder="+ Добавить ссылку"
                    onChange={(e) => setIsLink(e.target.value)}
                  />
                </div>
                <hr className="hrmodal" />
                <div className="modalbtn">
                  <button onClick={handleEditUser}>Готово</button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="replies-section">
          <div className="buttonForUser">
            <div
              className={activeTab === "threads" ? "button active" : "button"}
              onClick={() => handleTabChange("threads")}
            >
              Ветки
            </div>
            <div
              className={activeTab === "replies" ? "button active" : "button"}
              onClick={() => handleTabChange("replies")}
            >
              Ответы
            </div>
            <div
              className={activeTab === "likes" ? "button active" : "button"}
              onClick={() => handleTabChange("likes")}
            >
              Лайки
            </div>
          </div>
        </div>{" "}
        <hr />
      </div>{" "}
      <div className="contentForUser">
        {activeTab === "threads" && <p>Контент для веток</p>}
        {activeTab === "replies" && <p>Контент для ответов</p>}
        {activeTab === "likes" && <p>Контент для лайков</p>}
      </div>
    </div>
  );
};

export default User;
