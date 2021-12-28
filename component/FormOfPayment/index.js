import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

const FormOfPayment = ({ label, id, text, contents }) => {

  const [paymentData, setPaymentData] = useState("");

  const handleChange = (event) => {
    setPaymentData(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ mt: 1, mb: 1, minWidth: "100%" }}>
        <InputLabel id={id}>{label}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={paymentData}
          label={label}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>{text}</em>
          </MenuItem>
          {contents.map((c) => (
            <MenuItem key={c.value} value={c.value}>{c.title}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default FormOfPayment;
