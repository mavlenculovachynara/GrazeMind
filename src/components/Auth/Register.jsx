import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { handleRegister, error, setError } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setError(false);
  }, []);

  function handleSave(e) {
    e.preventDefault();

    if (
      !username.trim() ||
      !email.trim() ||
      !password.trim() ||
      !passwordConfirm.trim()
    ) {
      return;
    } else if (password.trim() !== passwordConfirm.trim()) {
      setError("Пароли не совпадают");
      return;
    } else if (
      password.trim().length < 8 ||
      passwordConfirm.trim().length < 8
    ) {
      setError("Пароль должен содержать не менее 8 символов");
      return;
    } else if (!email.includes("@")) {
      setError("Некорректный адрес электронной почты");
      return;
    } else {
      setError("Вы успешно зарегистрировались!");
      navigate("/register_active");
    }
    let formData = new FormData();
    formData.append("email", email);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("password_confirm", passwordConfirm);
    handleRegister(formData, username);
  }

  return (
    <div className="login-form">
      <form onSubmit={handleSave} className="login-container">
        <h2>Регистрация</h2>
        {error ? <h5 style={{ color: "red" }}>{error}</h5> : null}
        <input
          type="text"
          placeholder="Имя пользователя"
          className="login-input"
          onChange={(e) => setUserName(e.target.value)}
        />
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
        <input
          type="password"
          placeholder="Повторите пароль"
          className="login-input"
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <button type="submit" className="login-button">
          Зарегистрироваться
        </button>
        <div className="auth-actions">
          <span>Есть аккаунт?</span>
          <a href="/login">Войти</a>
        </div>
      </form>
    </div>
  );
};

export default Register;
