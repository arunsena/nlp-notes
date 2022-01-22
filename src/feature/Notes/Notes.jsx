import React, { useState } from "react";

// Components
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import Mic from "@mui/icons-material/Mic";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Typography from "@mui/material/Typography";

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
  justify-content: space-between;
`;

const NotesSection = styled.div``;

const SpeechContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 380px) {
    flex-direction: row;
  }
`;

// Setup Speech Recognition
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();
mic.continous = true;
mic.interimResults = true;
mic.lang = "en-US";

const Notes = () => {
  const placeHolder = "Press mic to start taking notes....";
  // State
  const [notes, setNotes] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [liveSpeechText, setLiveSpeechText] = useState(placeHolder);

  // Listeners
  mic.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    console.log({ transcript });
    setNotes([transcript]);
  };

  const handleMouseDown = () => {
    mic.start();
    setLiveSpeechText("...");
    setIsListening(true);
  };

  const handleMouseUp = () => {
    mic.stop();
    setLiveSpeechText(placeHolder);
    setIsListening(false);
  };

  return (
    <Container maxWidth="sm">
      <Box>
        <Typography variant="h4" gutterBottom color="rgb(255,82,82)">
          Brain Dump...
        </Typography>
        <NotesSection>
          <TextareaAutosize
            aria-label="notes"
            minRows="30"
            style={{ width: "80%", borderColor: "#FFF" }}
            value={notes}
          />
        </NotesSection>
        <SpeechContainer>
          <Typography variant="p">{liveSpeechText}</Typography>
          <Fab color={isListening ? "extended" : "primary"} aria-label="speak">
            <Mic onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}></Mic>
          </Fab>
        </SpeechContainer>
      </Box>
    </Container>
  );
};

export default Notes;
