import React from "react";
import NotFound from "../components/NotFound/NotFound";
import { Route, Routes } from "react-router-dom";
import Main from "../components/Main/Main";
import About from "../components/about/About";
import AboutUs from "../components/about/Payment";
import ProductList from "../components/product/ProductList";
import ProductItem from "../components/product/ProductItem";


const PUBLIC_ROUTES = [
  { id: 1, link: "*", element: <NotFound /> },
  { id: 2, link: "/", element: <Main /> },
  { id: 5, link: "/about", element: <About/> },
  { id: 6, link: "/payments", element: <AboutUs /> },
  { id: 7, link: "/productlist", element: <ProductList /> },
  { id: 8, link: "/productItem", element: <ProductItem/> },
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
