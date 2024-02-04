import React, { useRef, useState, useEffect } from "react";
import PostItem from "./PostItem";
import User from "../../img/user.webp";
import Gallery from "../../img/gallery.png";

const PostList = () => {
  const fileInputRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fileInputRef.current = document.createElement("input");
    fileInputRef.current.type = "file";
    fileInputRef.current.accept = "image/*";
    fileInputRef.current.style.display = "none";
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
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
                  <img src={Gallery} alt="img" onClick={openFileInput} />
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
                onChange={handleFileSelect} // Handle file selection
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
