import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";

// Components
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

// Local Components
import ViewNote from "../Components/ViewNote";
import CreateNote from "../Components/CreateNote";

// Context
import { NotesProvider } from "../useNotesContext";

// Styles
import styled from "@emotion/styled";

const Box = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 90vh;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Notes = () => {
  return (
    <NotesProvider>
      <Container maxWidth="sm">
        <Box>
          <Typography variant="h4" gutterBottom color="rgb(255,82,82)">
            Brain Dump
          </Typography>
          <HashRouter>
            <Routes>
              <Route exact path="/" element={<ViewNote />} />
              <Route path="/createNote" element={<CreateNote />} />
            </Routes>
          </HashRouter>
        </Box>
      </Container>
    </NotesProvider>
  );
};

export default Notes;
