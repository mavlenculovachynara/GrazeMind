import React, { useRef, useState, useEffect } from "react";
import PostItem from "./PostItem";
import User from "../../img/user.webp";
import Gallery from "../../img/gallery.png";
import Hash from "../../img/hash (1).png";
import Cross from "../../img/cross-mark.png";
import { usePost } from "../../context/PostContextPrivder";

const PostList = () => {
  const fileInputRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showCategories, setShowCategories] = useState(false);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [hashtag, setHashtag] = useState("");
  const username = JSON.parse(localStorage.getItem("username"));

  const { getCategories, categories, addPost, getPosts, posts } = usePost();
  useEffect(() => {
    getCategories();
    getPosts();
    console.log(categories);
  }, []);
  console.log(posts);
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
    setImage(file);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };
  const handleHashClick = () => {
    setShowCategories(!showCategories);
  };
  const handleCategoryClick = (category) => {
    setHashtag(`#${category}`);
    const input = document.querySelector('.modal-actions input[type="text"]');
    if (input) {
      input.value += ` #${category} `;
    }
  };
  const clearImageClick = () => {
    setSelectedImage(null);
    fileInputRef.current.value = null;
  };
  function postSave() {
    let formData = new FormData();
    formData.append("description", description);
    formData.append("description", hashtag);
    formData.append("image", image);
    addPost(formData);
  }
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
        {posts.map((elem) => (
          <PostItem elem={elem} key={elem.id} />
        ))}
      </div>
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="postitem_request">
              {" "}
              <img src={User} alt="img" />
              <h5>{username}</h5>
            </div>
            <div className="modal-actions">
              {" "}
              <input
                type="text"
                placeholder="Создайте ветку..."
                onChange={(e) => setDescription(e.target.value)}
              />
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
                      {categories.map((elem) => (
                        <span
                          key={elem.id}
                          onClick={() => handleCategoryClick(elem.tag)}
                        >
                          +{elem.tag}
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
                onChange={(e) => handleFileSelect(e)}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <div className="modal-addbutton">
              {" "}
              <button onClick={postSave}>Опубликовать</button>
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
              {categories.map((elem) => (
                <>
                  {" "}
                  <li className="category-button" key={elem.id}>
                    {elem.tag}
                  </li>
                  <hr />
                </>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostList;
