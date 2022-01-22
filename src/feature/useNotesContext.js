import React, { createContext, useContext } from "react";

const NotesContext = createContext();

export const NotesProvider = (props) => {
  const notes = [
    "note1",
    "note2",
    "note3",
    "note4",
    "note5",
    "note6",
    "note7",
    "note8",
  ];

  const ctx = { notes };
  return <NotesContext.Provider value={ctx} {...props}></NotesContext.Provider>;
};

export const useNotesContext = () => {
  const ctx = useContext(NotesContext);

  if (!ctx) {
    return "useNotesContext can't be used inside other components";
  }
  return ctx;
};
