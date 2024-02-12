import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const { error, setError, handleResetPassword } = useAuth();
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setError(false);
  }, []);
  function handleReset(e) {
    e.preventDefault();
    if (newPassword.trim() !== newPasswordConfirm.trim()) {
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
    navigate("/login");
  }
  return (
    <div className="login-form">
      <form action="#" className="login-container">
        <h3>Восстановление пароля</h3>
        {error ? <h5 style={{ color: "red" }}>{error}</h5> : null}
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
        <button className="login-button" type="submit" onClick={handleReset}>
          Сбросить пароль
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
