import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MyRoutes from "./routes/MyRoutes";
import Footer from "./components/Footer/Footer";
import AuthContextProvider from "./context/AuthContextProvider";
import PostContextPrivder from "./context/PostContextPrivder";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <PostContextPrivder>
          <Navbar />
          <MyRoutes />
          <Footer />
        </PostContextPrivder>
      </AuthContextProvider>
    </>
  );
};

export default App;
