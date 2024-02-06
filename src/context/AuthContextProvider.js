import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { API } from "../helpers/const";
const authContext = createContext();
export const useAuth = () => useContext(authContext);
const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [error, setError] = useState(false);
  async function handleRegister(formData, navigate) {
    try {
      await axios.post(`${API}/account/register/`, formData);
      navigate("/");
    } catch (error) {
      console.error(error);
      setError([[Object.values(error.response.data)]].flat(2));
    }
  }
  async function handleLogin(formData, email, navigate) {
    try {
      const { data } = await axios.post(`${API}/account/login/`, formData);
      localStorage.setItem("tokens", JSON.stringify(data));
      localStorage.setItem("email", email);
      setCurrentUser(email);
      navigate("/");
    } catch (error) {
      console.error(error);
      setError([[Object.values(error.response.data.detail)]].flat(2));
    }
  }
  const values = { error, handleRegister, setError, handleLogin };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
