import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

const CoinList = ({ label, id, text, contents, value, handleChange }) => {
/*   const [coin, setCoin] = useState("");

  const handleChange = (event) => {
    setCoin(event.target.value);
  }; */

  return (
    <div>
      <FormControl sx={{ mt: 1, mb: 1, minWidth: "100%" }}>
        <InputLabel id={id}>{label}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={value}
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

export default CoinList;
