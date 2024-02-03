import React from "react";
import NotFound from "../components/NotFound/NotFound";
import { Route, Routes } from "react-router-dom";

const PUBLIC_ROUTES = [{ id: 1, link: "*", element: <NotFound /> }];
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
