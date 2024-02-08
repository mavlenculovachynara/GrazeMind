import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { API } from "../helpers/const";
import { useNavigate } from "react-router-dom";
const authContext = createContext();
export const useAuth = () => useContext(authContext);
const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const getConfig = () => {
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    const Authorization = `Bearer ${tokens.refresh}`;
    const config = {
      headers: { Authorization },
    };
    return config;
  };
  // ! Register
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
  // !Login
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
  // !Logout
  const handleLogout = async () => {
    try {
      await axios.post(`${API}/account/logout/`, getConfig());
      localStorage.removeItem("tokens");
      localStorage.removeItem("email");
      localStorage.removeItem("username");
      setCurrentUser(null);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
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
