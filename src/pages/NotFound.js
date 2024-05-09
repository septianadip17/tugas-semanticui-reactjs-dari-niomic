import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Not Found 404</h1>
      <Button>
        <Link to="/">Back To Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
