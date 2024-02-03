import React from "react";

const Register = () => {
  return (
    <div className="login-form">
      <form action="#" className="login-container">
        <h2>Регистрация</h2>
        <input
          type="text"
          placeholder="Имя пользователя, номер или эл.адрес"
          className="login-input"
        />
        <input type="text" placeholder="Пароль" className="login-input" />
        <input
          type="text"
          placeholder="Повторите пароль"
          className="login-input"
        />
        <button className="login-button">Зарегистрироваться</button>
        <div className="auth-actions">
          {" "}
          <span>Есть аккаунт?</span>
          <a href="/login">Войти</a>
        </div>
      </form>
    </div>
  );
};

export default Register;
