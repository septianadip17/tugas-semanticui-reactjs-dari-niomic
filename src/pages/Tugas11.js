import React from "react";
import {
  Button,
  Container,
  List,
  Loader,
  Dimmer,
  Placeholder,
  Segment,
  Image,
  Grid,
  Input,
  Icon,
  Divider,
} from "semantic-ui-react";
import Footer from "../components/Footer";

const Tugas11 = () => {
  return (
    <div>
      <Container textAlign="center">
        <h1>Tugas 11</h1>
      </Container>
      <Container>
        <Segment placeholder>
          <Grid columns={2} verticalAlign="middle" textAlign="center">
            <Grid.Column>
              <Icon name="search" size="huge" />
              <h3>Cari Dokumen</h3>
              <Input
                icon="search"
                placeholder="Search..."
                style={{ borderRadius: "20px" }}
              />
            </Grid.Column>
            <Grid.Column>
              <Icon name="file pdf outline" size="huge" />
              <h3>Tambah Dokumen Baru</h3>
              <Button primary>Create Document</Button>
            </Grid.Column>
          </Grid>
          <Divider vertical>Or</Divider>
        </Segment>

        {/* Tengah */}
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Segment>

        {/* Kolom Bawah */}
        <Grid container columns={3}>
          <Grid.Column>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length="medium" />
                  <Placeholder.Line length="short" />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length="medium" />
                  <Placeholder.Line length="short" />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <List>
              <h3>Website Terkait</h3>
              <List.Item
                icon="linkify"
                content={<a href="http://www.semantic-ui.com">Semantic UI</a>}
              />
              <List.Item
                icon="linkify"
                content={<a href="http://www.google.com">Gooogle</a>}
              />
              <List.Item
                icon="linkify"
                content={<a href="http://www.facebook.com">Facebook</a>}
              />
              <List.Item
                icon="linkify"
                content={<a href="https://react.dev/">React Js</a>}
              />
              <List.Item
                icon="linkify"
                content={<a href="https://niomic.id/">Niomic</a>}
              />
            </List>
          </Grid.Column>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default Tugas11;
