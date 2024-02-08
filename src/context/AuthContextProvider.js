import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { ACTIONS, API } from "../helpers/const";
import { useNavigate } from "react-router-dom";
const authContext = createContext();
export const useAuth = () => useContext(authContext);
const AuthContextProvider = ({ children }) => {
  const INIT_STATE = { users: [] };
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case ACTIONS.GET_USERS:
        return { ...state, users: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [currentUser, setCurrentUser] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const getConfig = () => {
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    const Authorization = `Bearer ${tokens.access}`;
    const config = {
      headers: { Authorization },
    };
    return config;
  };
  // ! Register
  async function handleRegister(formData, username) {
    try {
      const { data } = await axios.post(`${API}/account/register/`, formData);
      localStorage.setItem("username", username);
      navigate("/register_confirm");
      console.log(data);
    } catch (error) {
      console.error(error);
      // setError([[Object.values(error.response.data)]].flat(2));
    }
  }
  async function handleActiveRegister(formData) {
    try {
      const { data } = await axios.post(`${API}/account/register/`, formData);
      navigate("/register_confirm");
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  async function handleResetPassword(formData) {
    try {
      const { data } = await axios.post(
        `${API}/account/reset_password/`,
        formData
      );
      console.log(data);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  }
  // !Login
  async function handleLogin(formData, email) {
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
  async function getUsers() {
    try {
      let { data } = await axios(`${API}/account/users/`, getConfig());
      dispatch({ type: ACTIONS.GET_USERS, payload: data });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  const values = {
    error,
    handleRegister,
    setError,
    handleLogin,
    handleLogout,
    currentUser,
    getUsers,
    users: state.users,
    handleActiveRegister,
    handleResetPassword,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
//! начальный код
