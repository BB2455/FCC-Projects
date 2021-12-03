import * as React from "react";
import { Navbar, Footer } from "../components";
import { Container } from "react-bootstrap";

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Container>Content</Container>
      <Footer />
    </>
  );
};

export default IndexPage;
