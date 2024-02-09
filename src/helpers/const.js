export const API = "https://104.198.167.223";
const email = JSON.parse(localStorage.getItem("email"));

// Разделить строку по символу "@"
export const [name] = email.split("@");

export const ACTIONS = {
  GET_CATEGORIES: "GET_CATEGORIES",
  GET_POSTS: "GET_POSTS",
  GET_USERS: "GET_USERS",
  GET_ONE_USER: "GET_ONE_USER"
};
