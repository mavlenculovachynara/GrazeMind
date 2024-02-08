import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { API } from "../helpers/const";
const authContext = createContext();
export const useAuth = () => useContext(authContext);
const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [error, setError] = useState(false);

  async function handleRegister(formData, username, navigate) {
    try {
      const { data } = await axios.post(`${API}/account/register/`, formData);
      localStorage.setItem("username", JSON.stringify(username));
      // navigate("/");
      console.log(data);
    } catch (error) {
      console.error(error);
      // setError([[Object.values(error.response.data)]].flat(2));
    }
  }
  async function handleLogin(formData, email, navigate) {
    try {
      const { data } = await axios.post(`${API}/account/login/`, formData);
      localStorage.setItem("tokens", JSON.stringify(data));
      localStorage.setItem("email", JSON.stringify(email));

      console.log(data);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }
  const handleLogout = () => {
    localStorage.removeItem("tokens");
    localStorage.removeItem("email");
    setCurrentUser(null);
  };
  const values = {
    error,
    handleRegister,
    setError,
    handleLogin,
    handleLogout,
    currentUser,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
//! начальный код
