import React, { useEffect, useRef, useState } from "react";
import LockIcon from "../../img/lock.png";
import UserIcon from "../../img/user.webp";
import { avatar, bio, email, link, name } from "../../helpers/const";
import { useAuth } from "../../context/AuthContextProvider";
import { usePost } from "../../context/PostContextPrivder";
import "./User.css";

const User = () => {
  const [followersCount, setFollowersCount] = useState(0);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfilePhotoModalOpen, setIsProfilePhotoModalOpen] = useState(false);

  const [isBio, setIsBio] = useState("");
  const [isLink, setIsLink] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);
  const { editUser } = useAuth();
  const { getPosts, posts, likePost } = usePost();

  useEffect(() => {
    fileInputRef.current = document.createElement("input");
    fileInputRef.current.type = "file";
    fileInputRef.current.accept = "image/*";
    fileInputRef.current.style.display = "none";
  }, []);

  const toggleProfilePhotoModal = () => {
    setIsProfilePhotoModalOpen(!isProfilePhotoModalOpen);
  };

  const handleChooseFile = () => {
    fileInputRef.current.click();
  };

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const fileData = reader.result;
        localStorage.setItem("avatar", JSON.stringify(fileData));
        setProfileImage(fileData);
      };
      reader.readAsDataURL(file);
    }
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setProfileImage(null);
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
    formData.append("avatar", fileInputRef.current.files[0]);
    formData.append("biography", isBio);
    localStorage.setItem("bio", JSON.stringify(isBio));
    formData.append("link", isLink);
    localStorage.setItem("link", JSON.stringify(isLink));
    editUser(formData);
  }

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div className="profile-container">
      <div className="profile-title">
        <div className="profile-name">
          <h2>{name}</h2>
          <h4 style={{ color: "white", maxWidth: "100px" }}>{bio}</h4>
          <p style={{ maxWidth: "60px" }}>
            <a href={link}>{link}</a>
          </p>
          <span>{followersCount} подписчиков</span>
        </div>
        <img
          onClick={toggleProfilePhotoModal}
          src={avatar || UserIcon}
          alt="Аватар пользователя"
          className="avatar"
          style={{ width: "60px", height: "60px" }}
        />
        {isProfilePhotoModalOpen && (
          <div className="profile-photo-modal" onClick={toggleProfilePhotoModal}>
            <div className="profile-photo-content">
              <img
                style={{ borderRadius: '50%', width: '200px', height: '200px' }}
                src={avatar || UserIcon}
                alt=""
              />
            </div>
          </div>
        )}
      </div>
      <div className="profile-buttons">
        <button className="edit-profile-button" onClick={toggleModal}>
          Редактировать профиль
        </button>
        {isModalOpen && (
          <div className="modal2" onClick={closeModal}>
            <div className="modal-content2" onClick={(e) => e.stopPropagation()}>
              <div className="modal-actions2">
                <span className="modalspan">Имя</span>
                <div className="modalinp">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {" "}
                    <img src={LockIcon} alt="img" />{" "}
                    <input
                      type="text"
                      defaultValue={name}
                      style={{ color: "white" }}
                    />
                  </div>
                  <div className="icon2">
                    <img src={profileImage || UserIcon} alt="img" />
                    &nbsp;<span onClick={handleChooseFile}>+</span>
                    <input
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      ref={fileInputRef}
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
                <hr className="hrmodal" />
                <div>
                  <span className="modalspan">Биография</span>
                  <textarea
                    style={{ height: "25px" }}
                    type="text"
                    placeholder="+ Добавить биографию"
                    defaultValue={bio}
                    onChange={(e) => setIsBio(e.target.value)}
                  />
                </div>
                <hr className="hrmodal" />
                <div>
                  <span className="modalspan">Ссылка</span>
                  <textarea
                    style={{ height: "65px" }}
                    type="text"
                    placeholder="+ Добавить ссылку"
                    defaultValue={link}
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
        </div>
        <div className="contentForUser">
        {activeTab === "threads" && (
  <div className="search-publications">
    <div className="publication-list">
      {posts
        .filter((elem) => elem.creator.email === email)
        .map((elem) => (
          <div className="post" key={elem.id}>
            <img src={elem.image} alt="img" />
            <p className="post-content">{elem.description}</p>
          </div>
        ))}
    </div>
  </div>
)}
        </div>
      </div>
    </div>
  );
};

export default User;
