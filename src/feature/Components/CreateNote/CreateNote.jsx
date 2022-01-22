import React, { useState } from "react";
import { Link } from "react-router-dom";

// Components
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import Mic from "@mui/icons-material/Mic";
import CancelIcon from "@mui/icons-material/Cancel";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Typography from "@mui/material/Typography";

// Styles
import styled from "@emotion/styled";

const NotesSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

const SubHeading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

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

const CreateNote = () => {
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
    <NotesSection>
      <SubHeading>
        <Typography variant="h5">Create Note</Typography>
        <Button variant="text" component={Link} to="/">
          <CancelIcon />
        </Button>
      </SubHeading>
      <TextareaAutosize
        aria-label="notes"
        minRows="30"
        style={{ borderColor: "#FFF" }}
        value={notes}
      />
      <SpeechContainer>
        <Typography variant="p">{liveSpeechText}</Typography>
        <Fab color={isListening ? "extended" : "primary"} aria-label="speak">
          <Mic onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}></Mic>
        </Fab>
      </SpeechContainer>
    </NotesSection>
  );
};

export default CreateNote;
