import React from "react";
import { Link } from "gatsby";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import { useThemeUpdate, useTheme } from "./ThemeContext";

const projects = [
  {
    title: "Resonsive Web Design",
    projects: [
      { title: "Tribute Page", slug: "/" },
      { title: "Survey Form", slug: "/" },
      { title: "Product Landing Page", slug: "/" },
      { title: "Technical Documentation Page", slug: "/" },
      { title: "Personal Portfolio Webpage", slug: "/" },
    ],
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    projects: [
      { title: "Palindrome Checker", slug: "/" },
      { title: "Roman Numeral Converter", slug: "/" },
      { title: "Caesars Cipher", slug: "/" },
      { title: "Telephone Number Validator", slug: "/" },
      { title: "Cash Register", slug: "/" },
    ],
  },
  {
    title: "Front End Development Libraries",
    projects: [
      { title: "Random Quote Machine", slug: "/" },
      { title: "Markdown Previewer", slug: "/" },
      { title: "Drum Machine", slug: "/" },
      { title: "JavaScript Calculator", slug: "/" },
      { title: "25 + 5 Clock", slug: "/" },
    ],
  },
];

const NavBar = () => {
  const darkMode = useTheme();
  const toggleTheme = useThemeUpdate();
  return (
    <Navbar expand="md" variant={darkMode ? "dark" : "light"}>
      <Container>
        <Link className="navbar-brand" to="/">
          Blair's freeCodeCamp Projects
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/certificates">
              Certificates
            </Link>

            <NavDropdown
              title="Projects"
              id="basic-nav-dropdown"
              align="end"
              menuVariant={darkMode ? "dark" : "light"}
            >
              {projects.map((course) => {
                return (
                  <NavDropdown
                    drop="start"
                    id={course.title}
                    key={course.title}
                    title={course.title}
                    menuVariant={darkMode ? "dark" : "light"}
                  >
                    {course.projects.map((project) => {
                      return (
                        <Link
                          key={project.title}
                          to={project.slug}
                          className="dropdown-item"
                        >
                          {project.title}
                        </Link>
                      );
                    })}
                  </NavDropdown>
                );
              })}
            </NavDropdown>
            <Form.Check
              defaultChecked={darkMode}
              type="switch"
              id="custom-switch"
              className="my-2 ms-2"
              label="Dark Mode"
              onClick={toggleTheme}
              style={darkMode ? { color: "#fff" } : { color: "#212529" }}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
