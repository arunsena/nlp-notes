import React from "react";
import { Link } from "react-router-dom";

import { useNotesContext } from "../../useNotesContext";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";

const ListGroup = styled.ul`
  list-style-type: circle;
`;

const List = styled.li`
  text-align: left;
`;

const ViewNote = () => {
  const { notes } = useNotesContext();

  return (
    <>
      <ListGroup>
        {notes.map((note, index) => (
          <List key={index}>{note}</List>
        ))}
      </ListGroup>
      <Button component={Link} to="/createNote">
        Create Note
      </Button>
    </>
  );
};

export default ViewNote;
