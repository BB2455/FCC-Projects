import React from "react";
import { Link } from "gatsby";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useTheme } from "./ThemeContext";

const Footer = () => {
  const darkMode = useTheme();
  return (
    <footer className="py-5 my-4">
      <Container>
        <Navbar
          variant={darkMode ? "dark" : "light"}
          className="justify-content-center border-bottom mb-3 pb-3"
        >
          <Nav>
            <Nav.Item>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="https://www.freecodecamp.org/blairb"
                target="_blank"
              >
                freeCodeCamp
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://github.com/BB2455" target="_blank">
                GitHub
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://blairb.dev" target="_blank">
                Portfolio
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
        <Navbar
          variant={darkMode ? "dark" : "light"}
          className="justify-content-center"
        >
          <Navbar.Text>Blair's freeCodeCamp Projects</Navbar.Text>
        </Navbar>
      </Container>
    </footer>
  );
};

export default Footer;
