import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

function Input({ onChange, value, id, label, type, required, name, placeholder, helperText }) {
  return (
    <FormControl sx={{ mt: 1, mb: 1, width: "100%" }} variant="outlined">
      <TextField
        error={false}
        id={id}
        placeholder={placeholder}
        helperText={helperText}
        label={label}
        type={type}
        variant="outlined"
        required={required}
        name={name}
        value={value}
        onChange={onChange}
      />
    </FormControl>
  );
}

export default Input;
