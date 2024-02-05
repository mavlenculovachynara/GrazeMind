import React, { useRef, useState, useEffect } from "react";
import PostItem from "./PostItem";
import User from "../../img/user.webp";
import Gallery from "../../img/gallery.png";
import Hash from "../../img/hash (1).png";
import Cross from "../../img/cross-mark.png";

const PostList = () => {
  const fileInputRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showCategories, setShowCategories] = useState(false);
  const categories = ["здоровье", "спорт", "еда"];

  useEffect(() => {
    fileInputRef.current = document.createElement("input");
    fileInputRef.current.type = "file";
    fileInputRef.current.accept = "image/*";
    fileInputRef.current.style.display = "none";
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setShowCategories(false);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const toggleModal2 = () => {
    setIsModalOpen2(!isModalOpen2);
  };
  const openFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };
  const handleHashClick = () => {
    setShowCategories(!showCategories);
  };
  const handleCategoryClick = (category) => {
    const input = document.querySelector('.modal-actions input[type="text"]');
    if (input) {
      input.value += ` #${category} `;
    }
  };
  const clearImageClick = () => {
    setSelectedImage(null);
    fileInputRef.current.value = null;
  };
  return (
    <div className="postlist_container">
      <div className="container postlist">
        <div className="postitem_add" onClick={toggleModal}>
          <div className="postitem_request">
            <img src={User} alt="img" />
            <span>Создайте ветку...</span>
          </div>
          <div className="postitem_addbutton">
            {selectedImage && <img src={selectedImage} alt="Selected" />}
            <img src={Hash} alt="img" />
            <img src={Gallery} alt="img" />
          </div>
        </div>
        <hr />
        <PostItem />
      </div>
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="postitem_request">
              {" "}
              <img src={User} alt="img" />
              <h5>artemnesterenko</h5>
            </div>
            <div className="modal-actions">
              {" "}
              <input type="text" placeholder="Создайте ветку..." />
              <div className="postitem_addbutton">
                <div className="postitem_image_container">
                  {" "}
                  <div className="hash-dropdown">
                    <img
                      src={Cross}
                      alt="img"
                      onClick={clearImageClick}
                      style={{ display: selectedImage ? "flex" : "none" }}
                    />
                    <img
                      src={Gallery}
                      alt="img"
                      onClick={openFileInput}
                      style={{ display: selectedImage ? "none" : "" }}
                    />
                    <img src={Hash} alt="img" onClick={handleHashClick} />
                  </div>
                  {showCategories && (
                    <div className="categories-dropdown">
                      {categories.map((category, index) => (
                        <span
                          key={index}
                          onClick={() => handleCategoryClick(category)}
                        >
                          +{category}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="selectFile">
                    {" "}
                    {selectedImage && (
                      <img src={selectedImage} alt="Selected" />
                    )}
                  </div>
                </div>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileSelect}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <div className="modal-addbutton">
              {" "}
              <button>Опубликовать</button>
            </div>
          </div>
        </div>
      )}
      <div>
        <button className="fixed-button" onClick={toggleModal2}>
          Фильтровать
        </button>
        {isModalOpen2 && (
          <div className="categories-modal">
            <ul className="categories">
              <li className="category-button">Здоровье</li>
              <hr />
              <li className="category-button">Спорт</li>
              <hr />
              <li className="category-button">Образование</li>
              <hr />
              <li className="category-button">Музыка</li>
              <hr />
              <li className="category-button">Еда</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostList;
