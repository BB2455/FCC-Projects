import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import { MainThemeProvider } from "./ThemeContext";

const Layout = ({ children }) => {
  return (
    <MainThemeProvider>
      <NavBar />
      {children}
      <Footer />
    </MainThemeProvider>
  );
};

export default Layout;
