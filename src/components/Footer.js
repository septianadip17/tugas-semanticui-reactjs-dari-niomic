import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  ButtonOr,
  ButtonGroup,
  Divider,
} from "semantic-ui-react";

const Footer = () => {
  return (
    <div>
      <Divider horizontal>Ayo Berkelana!</Divider>
      <Container textAlign="center">
        <ButtonGroup>
          <Button>
            <Link to="/">Home</Link>
          </Button>
          <ButtonOr />
          <Button>
            <Link to="/tugas10">Tugas 10</Link>
          </Button>
          <Button>
            <Link to="/tugas11">Tugas 11</Link>
          </Button>
          <ButtonOr />
          <Button>
            <Link to="/tugas12">Tugas 12</Link>
          </Button>
          <ButtonOr />
          <Button>
            <Link to="/tugas13">Tugas 13</Link>
          </Button>
          <ButtonOr />
          <Button>
            <Link to="/tugas14">Tugas 14</Link>
          </Button>
          <ButtonOr />
          <Button>
            <Link to="/tugas15">Tugas 15</Link>
          </Button>
        </ButtonGroup>
      </Container>
    </div>
  );
};

export default Footer;
