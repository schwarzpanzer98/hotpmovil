import React from "react";
import styles from "../../styles/Toggle.module.css";

function Toggle({ onChange }) {
  return (
    <>
      <label className={styles.switch} onChange={onChange}>
        <input type="checkbox" />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </>
  );
}

export default Toggle;
