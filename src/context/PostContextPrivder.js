import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, API } from "../helpers/const";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const postContext = createContext();
export const usePost = () => useContext(postContext);
const INIT_STATE = { categories: [], posts: [], onePost: {} };
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_CATEGORIES:
      return { ...state, categories: action.payload };
    case ACTIONS.GET_POSTS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};
const PostContextPrivder = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();
  const getConfig = () => {
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    const Authorization = `Bearer ${tokens.access}`;
    const config = {
      headers: { Authorization },
    };
    return config;
  };
  async function getCategories() {
    try {
      const { data } = await axios(`${API}/api/hashtags/`);
      dispatch({
        type: ACTIONS.GET_CATEGORIES,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  }
  async function addCategory(formData) {
    try {
      const res = await axios.post(
        `${API}/api/hashtags/`,
        formData,
        getConfig()
      );
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }
  async function addPost(formData) {
    try {
      await axios.post(`${API}/api/posts/`, formData, getConfig());
      getPosts();
    } catch (error) {
      console.error(error);
    }
  }
  async function getPosts() {
    try {
      const { data } = await axios(`${API}/api/posts/`, getConfig());
      dispatch({ type: ACTIONS.GET_POSTS, payload: data });
    } catch (error) {
      console.error(error);
    }
  }
  async function deletePost(id) {
    await axios.delete(`${API}/api/posts/${id}/`, getConfig());
    getPosts();
  }
  const values = {
    getCategories,
    categories: state.categories,
    addCategory,
    addPost,
    getPosts,
    posts: state.posts,
    deletePost,
  };
  return <postContext.Provider value={values}>{children}</postContext.Provider>;
};

export default PostContextPrivder;
