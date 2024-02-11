import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";
import "./Auth.css";
const RegisterActive = () => {
  const { handleActiveRegister } = useAuth();
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  function activeSave() {
    if (!code.trim()) return;
    navigate("/login");
    let formData = new FormData();
    formData.append("activation_code", code);
    handleActiveRegister(formData);
  }

  const handleHover = (event) => {
    event.target.style.backgroundColor = 'black';
    event.target.style.color = 'white';
  };

  const handleHoverOut = (event) => {
    event.target.style.backgroundColor = 'white';
    event.target.style.color = 'black';
  };

  return (
    <div className="register_active_container">
      <div className="register_active_form">
        <h2>Введите код который пришел на вашу почту</h2>
        <input style={{ padding: '15px 10px',
    borderRadius: '10px',
    border: '1px solid #444',
    width: '50%',
    background: 'none',
    color:' white',
    fontSize: '16px',
    margin: '10px 0',
    transition: 'color 0.3s, border-color 0.3s',}}
          type="text"
          placeholder="Введите код"
          onChange={(e) => setCode(e.target.value)}
        />
            <button
          style={{
            padding: '15px',
            borderRadius: '10px',
            border: 'none',
            width: '50%',
            color: 'black',
            backgroundColor: 'white',
            fontSize: '16px',
            marginBottom: '10px',
            cursor: 'pointer',
            transition: 'color 0.3s, background-color 0.3s',
          }}
          onClick={activeSave}
          onMouseOver={handleHover}
          onMouseOut={handleHoverOut}
        >
     Авторизоваться</button>
      </div>
    </div>
  );
};

export default RegisterActive;
