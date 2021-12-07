import React, { Fragment, useEffect } from "react";
import grapesjs from "grapesjs";
import pt from "grapesjs/locale/pt";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs-preset-webpage";
import "grapesjs-preset-newsletter";
import Head from "next/head";
import SideBar from "../../component/SideBar";
import StepComponent from "../../component/StepComponent";
import { BrorwserRouter as Router, Switch, Route } from "react-router";
import Link from "next/link";
import styles from "../../styles/InfoCourse.module.css";
import Input from "../../component/Input";

export default function InfoCourse() {
  return (
    <>
      <Head>
        <title>Info</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBar name="Nicolas Estanislau" />
      <div className={styles.main}>
        <StepComponent step={2} />
        <div className={styles.container}>
          <h1 className={styles.title}>Informações básicas</h1>
          <p className={styles.text}>
            Os dados abaixo são muito importantes para seu produto. Preencha-os
            com atenção.
          </p>
          <p>Nome do produto</p>
          <Input
            name="user"
          />
        </div>
      </div>
    </>
  );
}
