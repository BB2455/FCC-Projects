import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "./ThemeContext";

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <NavBar />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
