import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";

const ResetPassword = () => {
  const { error, setError, handleResetPassword } = useAuth();
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  useEffect(() => {
    setError(false);
  }, []);
  function handleReset(e) {
    e.preventDefault();
    if (!newPassword.trim() || !newPasswordConfirm.trim()) {
      setError("Ваши пароли не совпадают!");
      return;
    } else if (
      newPassword.trim().length < 8 ||
      newPasswordConfirm.trim().length < 8
    ) {
      setError("Пароль должен содержать не менее 8 символов");
      return;
    }
    let formData = new FormData();
    formData.append("new_password", newPassword);
    formData.append("password_confirm", newPasswordConfirm);
    handleResetPassword(formData);
  }
  return (
    <div className="login-form">
      <form action="#" className="login-container" onSubmit={handleReset}>
        <h3>Восстановление пароля</h3>
        {error ? <h5 style={{ color: "red" }}>{error}</h5> : null}
        <h5>Вам на почту пришло сообщение</h5>
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
