import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Input(props) {
  return (
    <Box component="form">
      <TextField
        required
        id={props.id}
        label={props.label}
        defaultValue={props.defaultValue}
        type={props.type ? props.type : "text"}
        variant="standard"
      />
    </Box>
  );
}
