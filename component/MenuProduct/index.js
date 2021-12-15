import React, { useState } from "react";
import styles from "../../styles/MenuProduct.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MenuProduct ({letra, editar, active}) { 
return (
    <ul className={styles.list}>
        <li href= "" className={styles.painel}> Painel </li>
        <li href= "" className={styles.productPage}> Pagina do Produto </li>
    </ul>
)}
