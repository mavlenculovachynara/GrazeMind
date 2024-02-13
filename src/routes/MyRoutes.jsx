import React from "react";
import NotFound from "../components/NotFound/NotFound";
import { Route, Routes } from "react-router-dom";
import Main from "../components/Main/Main";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import User from "../components/Profile/User";
import SearchPage from "../components/pages/SearchPage";
import Like from "../components/Like/Like";
import Settings from "../components/settings/Settings";
import RegisterActive from "../components/Auth/RegisterActive";
import AddCategory from "../components/Category/AddCategory";
import ResetPassword from "../components/Auth/ResetPassword";
import OnePost from "../components/Posts/OnePost";
import UserDetails from "../components/Profile/UserDetails";
import MetaVerified from "../components/MetaVerified/MetaVerified";
import AllPage from "../components/LikePages/AllPage";
import Answers from "../components/LikePages/Answers";
import LikePage from "../components/LikePages/LikePage";

const PUBLIC_ROUTES = [
  { id: 1, link: "*", element: <NotFound /> },
  { id: 2, link: "/", element: <Main /> },
  { id: 3, link: "/login", element: <Login /> },
  { id: 4, link: "/register", element: <Register /> },
  { id: 5, link: "/user", element: <User /> },
  { id: 6, link: "/searchpage", element: <SearchPage /> },
  { id: 7, link: "/like", element: <Like /> },
  { id: 8, link: "/settings", element: <Settings /> },
  { id: 9, link: "/register_active", element: <RegisterActive /> },
  { id: 10, link: "addCategory", element: <AddCategory /> },
  { id: 11, link: "/reset_password", element: <ResetPassword /> },
  { id: 12, link: "/post_details/:id", element: <OnePost /> },
  { id: 13, link: "/user_details/:id", element: <UserDetails /> },
  { id: 14, link: "/meta_verified", element: <MetaVerified /> },
  { id: 15, link: "/all_likes", element: <AllPage /> },
  { id: 16, link: "/answers", element: <Answers /> },
  { id: 17, link: "/like_page", element: <LikePage /> },
];
const MyRoutes = () => {
  return (
    <Routes>
      {" "}
      {PUBLIC_ROUTES.map((elem) => (
        <Route path={elem.link} element={elem.element} key={elem.id} />
      ))}
    </Routes>
  );
};

export default MyRoutes;
