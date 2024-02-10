export const API = "http://104.198.167.223";
export let email = JSON.parse(localStorage.getItem("email"));
export const tokens = JSON.parse(localStorage.getItem("tokens"));
if (!email) {
  email = "";
}
const [name] = email.split("@");
export { name };

export const ACTIONS = {
  GET_CATEGORIES: "GET_CATEGORIES",
  GET_POSTS: "GET_POSTS",
  GET_USERS: "GET_USERS",
  GET_ONE_POST: "GET_ONE_POST",
  GET_COMMENTS: "GET_COMMENTS",
  GET_ONE_USER: "GET_ONE_USER",
};
export const admin_email = "admin@gmail.com";
