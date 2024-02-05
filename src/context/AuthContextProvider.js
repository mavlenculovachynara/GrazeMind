import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { API } from "../helpers/const";
const authContext = createContext();
export const useAuth = () => useContext(authContext);
const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  async function handleRegister(formData, navigate) {
    setLoading(true);
    try {
        const {data} = await axios(`${API}`)
    } catch (error) {
      console.error(error);
    }
  }
  const values = {};
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
