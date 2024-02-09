import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";

const ResetPassword = () => {
  const { error, setError, handleResetPassword } = useAuth();
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  useEffect(() => {
    setError(false);
  }, []);
  function handleReset(e) {
    e.preventDefault();
    if (!password.trim()) {
      return;
    } else if (password.trim().length < 8) {
      setError("Пароль должен содержать не менее 8 символов");
      return;
    }
    let formData = new FormData();
    formData.append("password", password);
    formData.append("password", newPassword);
    formData.append("password", newPasswordConfirm);
    handleResetPassword(formData);
  }
  return (
    <div className="login-form">
      <form action="#" className="login-container" onSubmit={handleReset}>
        <h3>Восстановление пароля</h3>
        {error ? <h5 style={{ color: "red" }}>{error}</h5> : null}

        <input
          type="password"
          placeholder="Текущий пароль"
          className="login-input"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Введите новый пароль"
          className="login-input"
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Повторите новый пароль"
          className="login-input"
          onChange={(e) => setNewPasswordConfirm(e.target.value)}
        />
        <button className="login-button" type="submit">
          Сбросить пароль
        </button>
        <div className="auth-actions">
          <a href="/login">Войти</a>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
