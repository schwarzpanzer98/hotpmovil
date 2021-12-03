import React, { Fragment, useEffect } from "react";
import grapesjs from "grapesjs";
import pt from "grapesjs/locale/pt";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs-preset-webpage";
import "grapesjs-preset-newsletter";
import Head from "next/head";
import SideBar from '../../component/SideBar'
import { BrorwserRouter as Router, Switch, Route } from "react-router";
import Link from "next/link";

export default function Panel() {
  
  return (
    <>
      <Head>
        <title>Info</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <SideBar name="Nicolas Estanislau" />
        <p>painel</p>
    </>
  );
}
