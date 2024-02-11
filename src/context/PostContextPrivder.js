import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, API, getConfig, ws } from "../helpers/const";
import axios from "axios";
const postContext = createContext();
export const usePost = () => useContext(postContext);
const INIT_STATE = {
  categories: [],
  posts: [],
  onePost: {},
  like: 0,
  comments: [],
  messages: [],
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_CATEGORIES:
      return { ...state, categories: action.payload };
    case ACTIONS.GET_POSTS:
      return { ...state, posts: action.payload };
    case ACTIONS.LIKE_POST:
      return {
        ...state,
        like: action.payload,
      };
    case ACTIONS.GET_ONE_POST:
      return {
        ...state,
        onePost: action.payload,
      };
    case ACTIONS.GET_COMMENTS:
      return { ...state, comments: action.payload };
    case ACTIONS.GET_MESSAGES:
      return { ...state, messages: action.payload };
    default:
      return state;
  }
};
const PostContextPrivder = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getCategories() {
    try {
      const { data } = await axios(`${API}/posts/hashtags/`);
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
        `${API}/posts/hashtags/`,
        formData,
        getConfig()
      );
      console.log(res);
    } catch (error) {
      console.error(error.response.data);
    }
  }
  // !addpost
  async function addPost(formData) {
    try {
      let res = await axios.post(`${API}/posts/posts/`, formData, getConfig());
      console.log(res);
      getPosts();
    } catch (error) {
      console.error(error);
    }
  }
  async function getPosts() {
    try {
      const res = await axios(`${API}/posts/posts/`, getConfig());
      console.log(res);
      dispatch({ type: ACTIONS.GET_POSTS, payload: res.data });
    } catch (error) {
      console.error(error);
    }
  }
  // !delete
  async function deletePost(id) {
    try {
      await axios.delete(`${API}/posts/posts/${id}/`, getConfig());
      getPosts();
    } catch (error) {
      console.error(error);
    }
  }
  // !like
  const likePost = async (id) => {
    try {
      const { data } = await axios.post(`${API}/posts/likes/`, getConfig());
      console.log(data);
      dispatch({
        type: ACTIONS.LIKE_POST,
        payload: data,
      });
      console.log("Post liked:", data);
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };
  // !detail
  async function getOnePost(id) {
    try {
      const { data } = await axios(`${API}/posts/posts/${id}/`, getConfig());
      dispatch({
        type: ACTIONS.GET_ONE_POST,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  }
  async function addComment(formData, id) {
    try {
      let res = await axios.post(
        `${API}/posts/posts/${id}/comments/`,
        formData,
        getConfig()
      );
      console.log(res);
      getComments();
    } catch (error) {
      console.error(error);
    }
  }
  async function getComments(id) {
    try {
      let { data } = await axios(
        `${API}/posts/posts/${id}/comments/`,
        getConfig()
      );
      dispatch({ type: ACTIONS.GET_COMMENTS, payload: data });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  //!delete comment
  async function deleteComments(id) {
    try {
      await axios.delete(`${API}/posts/comments/${id}/`, getConfig());
      getComments();
    } catch (error) {
      console.error(error);
    }
  }
  async function addMessage(formData) {
    try {
      const { data } = await axios.post(
        `${ws.url}/chat/send-messages/`,
        formData,
        getConfig()
      );
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  const values = {
    getCategories,
    categories: state.categories,
    addCategory,
    addPost,
    getPosts,
    posts: state.posts,
    deletePost,
    likePost,
    like: state.like,
    getOnePost,
    onePost: state.onePost,
    addComment,
    comments: state.comments,
    getComments,
    deleteComments,
    addMessage,
  };
  return <postContext.Provider value={values}>{children}</postContext.Provider>;
};

export default PostContextPrivder;
