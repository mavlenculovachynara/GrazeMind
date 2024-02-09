export const API = "http://104.198.167.223";
let email = JSON.parse(localStorage.getItem("email"));
if (!email) {
  email = "unknown@gmail.com";
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
