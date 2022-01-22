import React from "react";
import { Link } from "react-router-dom";

import { useNotesContext } from "../../useNotesContext";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

const ListGroup = styled.ul`
  list-style-type: circle;
`;

const List = styled.li`
  text-align: left;
`;

const ViewNote = () => {
  const { notes } = useNotesContext();

  return (
    <Container>
      <ListGroup>
        {notes.map((note, index) => (
          <List key={index}>{note}</List>
        ))}
      </ListGroup>
      <Button component={Link} to="/createNote">
        Create Note
      </Button>
    </Container>
  );
};

export default ViewNote;
