import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import Panel from "../../assets/Icons/Panel";
import Product from "../../assets/Icons/Product";
import Sales from "../../assets/Icons/Sales";
import Link from "next/link";
import styles from "../../styles/Toggle.module.css";
import SimpleAccordion from "../Accordion";

function Toggle({ value, onToggle }) {
  return (
    <>
      <label className={styles.switch}>
        <input type="checkbox" />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </>
  );
}

export default Toggle;
