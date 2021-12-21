import React, { useState } from "react";
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
/* Moeda */
import CoinList from "../../component/CoinList";
import countries from "../../component/CoinList/content";
/* Garantia */
import GuaranteeList from "../../component/GuaranteeList";
import guarantees from "../../component/GuaranteeList/content";

export default function Pricing() {
  const [coin, setCoin] = useState("");

  const handleChange = (event) => {
    setCoin(event.target.value);
  };
  if (!coin) {
    console.log("sem valor ");
  } else {
    console.log("com valor " + coin);
  }

  const FilterAction = () => {
    console.log("case " + coin);
    switch (coin) {
      case "BR":
        return (
          <div className={styles.hotInputGroup}>
            <div className={styles.prepend}>
              <span>R$</span>
            </div>
            <Input name="" placeholder="0,00" />
          </div>
        );

      case "EUR":
        return (
          <div className={styles.hotInputGroup}>
            <Input name="" placeholder="0,00" />
            <div className={styles.prependEUR}>
              <span>€</span>
            </div>
          </div>
        );

      default:
        return (
          <div className={styles.hotInputGroup}>
            <div className={styles.prepend}>
              <span>$</span>
            </div>
            <Input name="" placeholder="0,00" />
          </div>
        );
    }
  };
  return (
    <>
      <Head>
        <title>Price</title>
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
            <CoinList
              handleChange={handleChange}
              value={coin}
              contents={countries}
            />

            <p className={styles.helpText}>
              Caso venda para outros países, usamos esta moeda como base para
              conversão.
            </p>
          </div>
          <div className={styles.selectContent}>
            <p className={styles.label}>Garantia do Produto</p>
            <GuaranteeList contents={guarantees} />
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
          <FilterAction type={coin} />

          <div className={styles.buttonContainer}>
            <ButtonComponent variantContent="outlined" content="Cancelar" />
            <ButtonComponent variantContent="contained" content="Continuar" />
          </div>
        </div>
      </div>
    </>
  );
}
