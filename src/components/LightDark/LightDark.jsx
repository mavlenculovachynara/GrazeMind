import React from "react";
import "./LightDark.css";
const LightDark = ({ onToggleTheme }) => {
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
    onToggleTheme(!isDarkMode);
  };
  return (
    <div className="theme-switcher" onClick={toggleTheme}>
      Toggle Theme
    </div>
  );
};
export default LightDark;
