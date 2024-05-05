import React from "react";
import "semantic-ui-css/semantic.min.css";
import Footer from "../components/Footer";
import {
  Button,
  Grid,
  Container,
  Divider,
  Flag,
  Header,
  Image,
  Icon,
  Input,
  Label,
} from "semantic-ui-react";

const Tugas10 = () => {
  return (
    <div>
      <Container>
        <h1>Tugas 10</h1>
        <Grid container columns={3}>
          <Grid.Column textAlign="end">
            <Flag name="id" />
            <Icon name="angle left" />
            <Icon name="angle right" />
          </Grid.Column>
          <Grid.Column>
            <Input
              placeholder="Search..."
              icon={<Icon name="star" />}
              style={{ width: "100%" }}
            />
          </Grid.Column>
          <Grid.Column>
            <Header as="h3" color="blue">
              <Image src="https://react.semantic-ui.com/images/avatar/large/patrick.png" />
              Andra Darmawan
            </Header>
          </Grid.Column>
        </Grid>
      </Container>
      <Divider horizontal>Selamat Datang!</Divider>
      <Container textAlign="right">
        <Label color="teal" textAlign="end" tag>
          Sport
        </Label>
      </Container>
      <Container textAlign="center">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vero
          natus dolore animi sapiente tempore odio ipsum inventore officiis quia
          aliquid corporis repellat qui dolor itaque nam, dignissimos officia
          rerum minima quaerat deserunt ab, velit excepturi quos. Nostrum fugiat
          incidunt recusandae dignissimos error. Voluptate aliquam soluta cum
          architecto eaque nihil repudiandae possimus consequatur, autem libero
          accusantium natus. Iste, eveniet ut. Expedita illum perspiciatis illo
          maxime saepe adipisci nulla fugiat aliquam ipsum nostrum, corrupti
          quidem! Sapiente, quidem beatae repellendus reiciendis doloremque illo
          facere itaque cum aliquid accusantium officia mollitia maiores
          repellat quasi totam illum enim, commodi quod laudantium deserunt
          distinctio? Unde.
        </p>
        <Button color="teal" icon labelPosition="left">
          <Icon name="plus" />
          Tambah Tautan Ke List
        </Button>
      </Container>
      <Footer />
    </div>
  );
};

export default Tugas10;
