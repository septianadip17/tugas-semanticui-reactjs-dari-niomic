import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  ButtonGroup,
  ButtonOr,
  Divider,
} from "semantic-ui-react";

const Footer = () => {
  return (
    <div>
      <Divider horizontal>Ayo Berkelana!</Divider>
      <Container textAlign="center">
        <ButtonGroup>
          <Button as={Link} to="/">
            Home
          </Button>
          <ButtonOr />
          <Button as={Link} to="/tugas10">
            Tugas 10
          </Button>
          <Button as={Link} to="/tugas11">
            Tugas 11
          </Button>
          <ButtonOr />
          <Button as={Link} to="/tugas12">
            Tugas 12
          </Button>
          <ButtonOr />
          <Button as={Link} to="/tugas13">
            Tugas 13
          </Button>
          <ButtonOr />
          <Button as={Link} to="/tugas14">
            Tugas 14
          </Button>
          <ButtonOr />
          <Button as={Link} to="/tugas15">
            Tugas 15
          </Button>
        </ButtonGroup>
      </Container>
    </div>
  );
};

export default Footer;
