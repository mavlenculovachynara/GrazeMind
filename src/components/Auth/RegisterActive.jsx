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
  return (
    <div className="register_active_container">
      <div className="register_active_form">
        <h2>Введите код который пришел на вашу почту</h2>
        <input
          type="text"
          placeholder="Введите код"
          onChange={(e) => setCode(e.target.value)}
        />
        <button onClick={activeSave}>Авторизоваться</button>
      </div>
    </div>
  );
};

export default RegisterActive;
