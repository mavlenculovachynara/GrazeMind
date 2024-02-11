import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import SearchIcon from "../../img/search.png";
import User from "../../img/user.webp";
import { useAuth } from "../../context/AuthContextProvider";
import { usePost } from "../../context/PostContextPrivder";
import { useNavigate, useSearchParams } from "react-router-dom";
import { email } from "../../helpers/const";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("accounts");
  const [filteredData, setFilteredData] = useState([]);
  const { getUsers, users } = useAuth();
  const { getPosts, posts } = usePost();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    getUsers();
    getPosts();
  }, []);

  useEffect(() => {
    console.log(posts);
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [searchParams]);

  useEffect(() => {
    const filterData = () => {
      if (activeCategory === "accounts") {
        setFilteredData(
          users.filter((user) =>
            user.username.toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
      } else if (activeCategory === "publications") {
        setFilteredData(
          posts.filter((post) =>
            post.description.toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
      }
    };

    filterData();
  }, [searchQuery, activeCategory, users, posts]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category === activeCategory ? null : category);
    setSearchParams({ category });
  };

  return (
    <div className="search-container">
      <div className="search-input-container">
        <div className="search-icon">
          <img src={SearchIcon} alt="" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Поиск..."
          className="search-input"
        />
      </div>
      <div className="search-category">
        <button
          className={activeCategory === "accounts" ? "active" : ""}
          onClick={() => handleCategoryClick("accounts")}
        >
          Аккаунты
        </button>
        <button
          className={activeCategory === "publications" ? "active" : ""}
          onClick={() => handleCategoryClick("publications")}
        >
          Публикации
        </button>
      </div>
      {activeCategory === "accounts" && (
        <div className="search-account">
          <div className="account-list">
            {filteredData.map((elem) =>
              elem.email !== email ? (
                <div className="account" key={elem.id}>
                  <div style={{ display: "flex" }}>
                    <img
                      src={elem.avatar || User}
                      alt="Аватар"
                      className="avatar"
                    />
                    <div className="account-info">
                      <h6 style={{ color: "white" }} className="username">
                        {elem.username ? elem.username : "Неизвестно"}
                      </h6>
                    </div>
                  </div>
                  <div>
                    <button
                      className="more-button"
                      onClick={() => navigate(`/user_details/${elem.id}`)}
                    >
                      Перейти
                    </button>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      )}
      {activeCategory === "publications" && (
        <div className="search-publications">
          <div className="publication-list">
            {filteredData.map((elem) => (
              <div className="post" key={elem.id}>
                <h4 className="post-title" style={{ color: "white" }}>
                  {elem.cretor ? elem.creator.username : "Unknown"}
                  <p> {new Date(elem.date_created).toLocaleDateString()}</p>
                  <p className="post-content">{elem.description}</p>
                </h4>
                <img
                  src={elem.image}
                  alt="img"
                  onClick={() => navigate(`/post_details/${elem.id}`)}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
