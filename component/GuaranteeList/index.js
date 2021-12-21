import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

const GuaranteeList = ({ label, id, text, contents }) => {

  const [guarantee, setGuarantee] = useState("");

  const handleChange = (event) => {
    setGuarantee(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ mt: 1, mb: 1, minWidth: "100%" }}>
        <InputLabel id={id}>{label}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={guarantee}
          label={label}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>{text}</em>
          </MenuItem>
          {contents.map((c) => (
            <MenuItem value={c.value}>{c.title}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default GuaranteeList;
