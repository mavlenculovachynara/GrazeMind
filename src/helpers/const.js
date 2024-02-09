export const API = "http://34.28.172.100";
const email = JSON.parse(localStorage.getItem("email"));

// Разделить строку по символу "@"
export const [name] = email.split("@");

export const ACTIONS = {
  GET_CATEGORIES: "GET_CATEGORIES",
  GET_POSTS: "GET_POSTS",
  GET_USERS: "GET_USERS",
};
