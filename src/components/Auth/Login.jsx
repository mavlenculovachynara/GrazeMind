import React from "react";
import "./Auth.css";

const Login = () => {
  return (
    <div className="login-form">
      <form action="#" className="login-container">
        <h2>Авторизация</h2>
        <input
          type="text"
          placeholder="Имя пользователя, номер или эл.адрес"
          className="login-input"
        />
        <input type="text" placeholder="Пароль" className="login-input" />
        <a href="#">Забыли пароль?</a>
        <button className="login-button">Войти</button>
        <div className="auth-actions">
          {" "}
          <span> Нет аккаунта?</span>
          <a href="/register">Создать аккаунт</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
