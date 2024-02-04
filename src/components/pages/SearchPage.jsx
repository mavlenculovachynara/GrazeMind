import React, { useState } from "react";
import "./SearchPage.css";
import SearchIcon from "../../img/search.png";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);

  // const handleSearch = () => {
  //   // Логика для поиска
  //   console.log(`Performing search for: ${searchQuery}`);
  // };

  const handleCategoryClick = (category) => {
    setActiveCategory(category === activeCategory ? null : category);
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
    </div>
  );
};

export default SearchPage;
