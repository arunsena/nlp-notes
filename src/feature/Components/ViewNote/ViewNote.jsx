import React from "react";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";

const ViewNote = () => {
  return (
    <Button component={Link} to="/createNote">
      Create Note
    </Button>
  );
};

export default ViewNote;
