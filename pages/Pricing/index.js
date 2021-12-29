import React, { useState, useCallback } from "react";
import Head from "next/head";
import SideBar from "../../component/SideBar";
import StepComponent from "../../component/StepComponent";
import styles from "../../styles/Pricing.module.css";
import Input from "../../component/Input";
import SelectComponent from "../../component/SelectComponent";
import ButtonComponent from "../../component/ButtonComponent";
/* Moeda */
import CoinList from "../../component/CoinList";
import countries from "../../component/CoinList/content";
/* Garantia */
import GuaranteeList from "../../component/GuaranteeList";
import guarantees from "../../component/GuaranteeList/content";
/* FormOfPayment */
import FormOfPayment from "../../component/FormOfPayment";
import formOfPayment from "../../component/FormOfPayment/content";

const maskMoney = (value) => {
  return value.replace(/\D/g, "");
};

export default function Pricing() {
  const [coin, setCoin] = useState("");
  const [coinInput, setCoinInput] = useState("");

  const handleChange = (event) => {
    console.log("coin: " + coin)
    setCoin(event.target.value);
    console.log("coin setado: " + coin)
    console.log("coin setado: " + typeof(coin))
  };

  const handleChangecoinInput = (e) => {
    setCoinInput(maskMoney(e.target.value));
  };

  /* const FilterAction = () => {
    if (coin === "BR") {
      return (
        <div className={styles.hotInputGroup}>
          <div className={styles.prepend}>
            <span>R$</span>
          </div>
          <input
            onChange={handleChangecoinInput}
            placeholder="0,00"
            value={coinInput}
          />
          {/* <NewInput
              placeholder="0,00"
              name="valor"
              onChange={handleChangecoinInput}
            />
          <button onClick={() => console.log(coinInput)}>Salvar</button>
        </div>
      );
    } else if (coin === "EUR") {
      return (
        <div className={styles.hotInputGroup}>
          <Input name="EUR" placeholder="0,00" />

          <div className={styles.prependEUR}>
            <span>€</span>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }; */
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
          <div style={coin ? {} : { display: "none" }}>
            <div className={styles.selectContent}>
              <p className={styles.label}>Garantia do Produto</p>
              <GuaranteeList contents={guarantees} />
              <p className={styles.helpText}>
                É o prazo que o comprador tem para pedir reembolso do seu
                produto. No Brasil, o mínimo é de 7 dias e na União Europeia, 15
                dias.
              </p>
            </div>
            <div className={styles.selectContent}>
              <p className={styles.label}>Forma de pagamento</p>
              <FormOfPayment contents={formOfPayment} />
              <p className={styles.helpText}>
                Uma vez que este preço for criado, não será mais possivel
                alterar esta opção.
              </p>
            </div>
            <p className={styles.label}>Valor</p>
            <div
              className={styles.hotInputGroup}
              style={coin != "BR" && coin != "EUR" ? {} : { display: "none" }}
            >
              <div className={styles.prepend}>
                <span>$</span>
              </div>
              <Input
                onChange={handleChangecoinInput}
                value={coinInput}
                placeholder="0,00"
              />
              {/* <button onClick={() => {console.log(coinInput)}}>salvar</button> */}
            </div>
            <div
              className={styles.hotInputGroup}
              style={coin === "BR" ? {} : { display: "none" }}
            >
              <div className={styles.prepend}>
                <span>R$</span>
              </div>
              <Input
                onChange={handleChangecoinInput}
                value={coinInput}
                placeholder="0,00"
              />
              {/* <button onClick={() => {console.log(coinInput)}}>salvar</button> */}
            </div>
            <div
              className={styles.hotInputGroup}
              style={coin === "EUR" ? {} : { display: "none" }}
            >
              <Input
                name="EUR"
                onChange={handleChangecoinInput}
                value={coinInput}
                placeholder="0,00"
              />

              <div className={styles.prependEUR}>
                <span>€</span>
              </div>
              {/* <button onClick={() => {console.log(coinInput)}}>salvar</button> */}
            </div>

            <div className={styles.buttonContainer}>
              <ButtonComponent variantContent="outlined" content="Cancelar" />
              <ButtonComponent variantContent="contained" content="Continuar" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
