import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "semantic-ui-react";
import Footer from "../components/Footer";

const Tugas14 = () => {
  return (
    <div>
      <Container>
        <h1>Tugas 14</h1>
        <Button>
          <Link to="/">Back To Home</Link>
        </Button>
        <Footer />
      </Container>
    </div>
  );
};

export default Tugas14;
