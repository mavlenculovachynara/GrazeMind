import React, { useState } from "react";
import Moon from "../../img/moon (2).png";
import Sun from "../../img/sun (1).png";
import "./LightDark.css";

const LightDark = () => {
  const [isThemeMode, setIsThemeMode] = useState(false);
  function toggleThemeMode() {
    setIsThemeMode(!isThemeMode);
  }
  return (
    <div className="theme">
      <p> Тема: {isThemeMode ? "Белая" : "Темная"}</p>
      <div className="theme-buttons">
        <button
          onClick={toggleThemeMode}
          style={{
            backgroundColor: isThemeMode ? "white" : "gray",
            color: isThemeMode ? "black" : "",
          }}
        >
          <img src={Sun} alt="" width={20} />
        </button>
        <button
          onClick={toggleThemeMode}
          style={{
            backgroundColor: isThemeMode ? "gray" : "black",
            color: isThemeMode ? "" : "white",
          }}
        >
          <img src={Moon} alt="" width={20} />
        </button>
      </div>
    </div>
  );
};

export default LightDark;
