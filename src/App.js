import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MyRoutes from "./routes/MyRoutes";
import Footer from "./components/Footer/Footer";
import AuthContextProvider from "./context/AuthContextProvider";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <MyRoutes />
        <Footer />
      </AuthContextProvider>
    </>
  );
};

export default App;
