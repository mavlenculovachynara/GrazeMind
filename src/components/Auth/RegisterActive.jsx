import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterActive = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Проверьте вашу почту и перейдите по ссылке!</h2>
      <button style={{ color: "black" }} onClick={() => navigate("/login")}>
        Авторизоваться
      </button>
    </div>
  );
};

export default RegisterActive;
