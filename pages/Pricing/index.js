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
import styles from "../../styles/Pricing.module.css";
import Input from "../../component/Input";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import SelectComponent from "../../component/SelectComponent";
import Label from "../../component/Label";
import ButtonComponent from "../../component/ButtonComponent";
import Toggle from "../../component/Toggle";

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Info</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBar name="Nicolas Estanislau" />
      <div className={styles.main}>
        <StepComponent step={3} />
        <div className={styles.container}>
          <h1 className={styles.title}>Precificação</h1>
          <p className={styles.text}>
            Defina a moeda base, o valor do produto e a estratégia de venda.
          </p>
          <div className={styles.selectContent}>
            <p className={styles.label}>Moeda</p>
            <SelectComponent text="Em que país você deseja vender?" />
            <p className={styles.helpText}>
              Caso venda para outros países, usamos esta moeda como base para
              conversão.
            </p>
          </div>
          <div className={styles.selectContent}>
            <p className={styles.label}>Garantia do Produto</p>
            <SelectComponent text="Em que país você deseja vender?" />
            <p className={styles.helpText}>
              É o prazo que o comprador tem para pedir reembolso do seu produto.
              No Brasil, o mínimo é de 7 dias e na União Europeia, 15 dias.
            </p>
          </div>
          <div className={styles.selectContent}>
            <p className={styles.label}>Forma de pagamento</p>
            <SelectComponent text="Em que país você deseja vender?" />
            <p className={styles.helpText}>
              Uma vez que este preço for criado, não será mais possivel alterar
              esta opção.
            </p>
          </div>
          <p className={styles.label}>Valor</p>
          <div>
            <span>R$</span>
            
            <Input
              name=""
              placeholder="0,00"
            />
          </div>
          <Toggle />

          <div className={styles.buttonContainer}>
            <ButtonComponent variantContent="outlined" content="Cancelar" />
            <ButtonComponent variantContent="contained" content="Continuar" />
          </div>
        </div>
      </div>
    </>
  );
}
