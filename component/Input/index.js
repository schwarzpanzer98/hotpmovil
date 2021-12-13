import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

function Input({ id, label, type, required, name, placeholder, helperText }) {
  return (
    <>
      <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
        <TextField
          id={id}
          placeholder={placeholder}
          helperText={helperText}
          label={label}
          type={type}
          variant="outlined"
          required={required}
          name={name}
        />
      </FormControl>
    </>
  );
}

export default Input;
