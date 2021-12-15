import React, { Fragment, useEffect } from "react";
import grapesjs from "grapesjs";
import pt from "grapesjs/locale/pt";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs-preset-webpage";
import "grapesjs-preset-newsletter";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import {
  DefaultHtml,
  DefaultCss,
} from "../../component/LayoutGrapesjs/Page/Default";
import SideBar from "../../component/SideBar";
import SelectPage from '../SelectPage'


export default function Panel() {
  // layout
  useEffect(() => {
    grapesjs.init({
      container: "#gjs",
      i18n: {
        messages: { pt },
      },
      components: DefaultHtml,
      style: DefaultCss,
      fromElement: true,
      plugins: ["gjs-preset-webpage"],
      pluginsOpts: {
        "gjs-preset-webpage": {
          // options
        },
      },
      storageManager: {
        id: "gjs-", // Prefix identifier that will be used on parameters
        type: "local", // Type of the storage
        autosave: true, // Store data automatically
        autoload: true, // Autoload stored data on init
        stepsBeforeSave: 1, // If autosave enabled, indicates how many changes are necessary before store method is triggered
      },
    });
  });
  return (
    <>
      <Head>
        <title>Painel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <SideBar name="Nicolas Estanislau" />
        <SelectPage />
    </>
  );
}
