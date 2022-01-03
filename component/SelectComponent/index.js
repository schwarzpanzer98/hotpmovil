import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import styles from  '../../styles/SelectComponent.module.css'

const SelectComponent = ({ label, id, text, contents, value, handleChange }) => {
  return (
    <div>
      <FormControl sx={{ mt: 1, mb: 1, width: "100%" }}>
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
              <MenuItem className={styles.modalStyle} key={c.value} value={c.value}>
              {c.title}
            </MenuItem>
            
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectComponent;
