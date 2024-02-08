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
