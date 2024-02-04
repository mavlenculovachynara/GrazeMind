import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MyRoutes from "./routes/MyRoutes";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <MyRoutes />
      <Footer />
    </>
  );
};

export default App;
