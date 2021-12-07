import * as React from "react";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import styles from '../../styles/StepComponent.module.css';

function StepComponent( { step }) {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.steps}>Passo {step} de 3 </p>
      </div>
    </>
  );
}

export default StepComponent;
