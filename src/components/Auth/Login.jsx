import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";
import "./Auth.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { error, handleLogin, setError } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setError(false);
  }, []);
  function handleAuth(e) {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      return;
    } else if (password.trim().length < 8) {
      setError("Пароль должен содержать не менее 8 символов");
      return;
    } else if (!email.includes("@")) {
      setError("Некорректный адрес электронной почты");
      return;
    }
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    navigate("/");
    handleLogin(formData, email);
  }
  return (
    <div className="login-form">
      <form action="#" className="login-container" onSubmit={handleAuth}>
        <h2>Авторизация</h2>
        {error ? <h5 style={{ color: "red" }}>{error}</h5> : null}
        <input
          type="text"
          placeholder="Электронный адрес"
          className="login-input"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          className="login-input"
          onChange={(e) => setPassword(e.target.value)}
        />
        <a href="reset_password">Забыли пароль?</a>
        <button className="login-button" type="submit">
          Войти
        </button>
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
