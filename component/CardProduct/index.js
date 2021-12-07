import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import Panel from "../../assets/Icons/Panel";
import Product from "../../assets/Icons/Product";
import Sales from "../../assets/Icons/Sales";
import Link from "next/link";
import styles from "../../styles/CardProduct.module.css";
import SimpleAccordion from "../Accordion";

function CardProduct({ image, title, text, altContent }) {
  return (
    <>
      <div className={styles.container}>
        <img src={image} atl={altContent} />
        <h6 className={styles.title}>{title}</h6>
        <p className={styles.text}>{text}</p>
      </div>
    </>
  );
}

export default CardProduct;
