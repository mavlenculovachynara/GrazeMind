import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import SearchIcon from "../../img/search.png";
import { useAuth } from "../../context/AuthContextProvider";
import { usePost } from "../../context/PostContextPrivder";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("accounts");
  const [filteredData, setFilteredData] = useState([]);
  const { getUsers, users } = useAuth();
  const { getPosts, posts } = usePost();
  const [searchParams, setSearchParams] = useSearchParams();
const navigate = useNavigate()
  useEffect(() => {
    getUsers();
    getPosts();
  }, []);

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [searchParams]);

  useEffect(() => {
    // Функция фильтрации данных по значению поиска и активной категории
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
            {filteredData.map((elem) => (
              <div className="account" key={elem.id}>
                <div style={{ display: "flex" }}>
                  <img src={elem.avatar} alt="Avatar" className="avatar" />
                  <div className="account-info">
                    <h6 style={{ color: "white" }} className="username">
                      {elem.username ? elem.username : "Unknown"}
                    </h6>
                    <p className="bio">{elem.biography}</p>
                  </div>
                </div>
                <div>
                  <button className="more-button" onClick={()=> navigate(`/user_details/${elem.id}`)}>Перейти</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {activeCategory === "publications" && (
        <div className="search-publications">
          <div className="publication-list">
            {filteredData.map((elem) => (
              <div className="post" key={elem.id}>
                <h4 className="post-title" style={{ color: "white" }}>
                  {elem.creator ? elem.creator.username : "Unknown"}
                </h4>
                <p className="post-content">{elem.description}</p>
                <img src={elem.image} alt="img" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
