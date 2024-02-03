import React, { useState } from "react";
import "./SearchPage.css";
import SearchIcon from "../../img/search.png";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // логика для поиска

    console.log(`Performing search for: ${searchQuery}`);
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
    </div>
  );
};

export default SearchPage;
