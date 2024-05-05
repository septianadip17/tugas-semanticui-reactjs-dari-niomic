import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  Checkbox,
  Image,
  Header,
  Segment,
  Grid,
  Message,
} from "semantic-ui-react";
import Footer from "../components/Footer";

const Tugas12 = () => {
  return (
    <div>
      <Container>
        <h1>Tugas 12</h1>
        <Button>
          <Link to="/">Back To Home</Link>
        </Button>
        <Grid textAlign="center" verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              <Image src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png" />
              Member Login
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />

                <Form.Field>
                  <Checkbox label="I agree to the Terms and Conditions" />
                </Form.Field>
                <Button color="teal" fluid size="large">
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              Tidak Punya Akun? Silakan<a href="/">Register</a>
            </Message>
          </Grid.Column>
        </Grid>
        <Footer />
      </Container>
    </div>
  );
};

export default Tugas12;
