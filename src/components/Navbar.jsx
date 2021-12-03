import React from "react";
import { Link } from "gatsby";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const darkMode = false;
const projects = [
  {
    title: "Resonsive Web Design",
    projects: [
      { title: "Tribute Page", url: "/" },
      { title: "Survey Form", url: "/" },
      { title: "Product Landing Page", url: "/" },
      { title: "Technical Documentation Page", url: "/" },
      { title: "Personal Portfolio Webpage", url: "/" },
    ],
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    projects: [
      { title: "Palindrome Checker", url: "/" },
      { title: "Roman Numeral Converter", url: "/" },
      { title: "Caesars Cipher", url: "/" },
      { title: "Telephone Number Validator", url: "/" },
      { title: "Cash Register", url: "/" },
    ],
  },
  {
    title: "Front End Development Libraries",
    projects: [
      { title: "Random Quote Machine", url: "/" },
      { title: "Markdown Previewer", url: "/" },
      { title: "Drum Machine", url: "/" },
      { title: "JavaScript Calculator", url: "/" },
      { title: "25 + 5 Clock", url: "/" },
    ],
  },
];

const NavBar = () => {
  return (
    <Navbar
      bg={darkMode ? "dark" : "light"}
      expand="md"
      variant={darkMode ? "dark" : "light"}
    >
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
                        <Link to={project.url} className="dropdown-item">
                          {project.title}
                        </Link>
                      );
                    })}
                  </NavDropdown>
                );
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
