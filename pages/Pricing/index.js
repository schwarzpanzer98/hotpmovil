import React, { useState } from "react";
import Head from "next/head";
import SideBar from "../../component/SideBar";
import StepComponent from "../../component/StepComponent";
import styles from "../../styles/Pricing.module.css";
import Input from "../../component/Input";
import ButtonComponent from "../../component/ButtonComponent";
import SelectComponent from "../../component/SelectComponent";
/* Moeda */
import countries from "../../utils/contentCountries";
/* Garantia */
import guarantees from "../../utils/contentGuarantees";
/* FormOfPayment */
import formOfPayment from "../../utils/contentFormOfPayment";
/* Parcelas */
import installmentsContent from "../../utils/installmentsContent";

const maskMoney = (value) => {
  /* return value.replace(/\D/g, ""); */
  value = value.toString().replace(/\D/g, "");
  value = (value * 1).toFixed(2) + "";
  return value
    .replace(/\D/g, "")
    .replace(".", ",")
    .replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,")
    .replace(/(\d)(\d{3}),/g, "$1.$2,");
};

const currentMoney = (value) => {
  let f2 = value.toLocaleString("pt-br", { minimumFractionDigits: 2 });
  console.log(f2);

  return f2;
};

export default function Pricing() {
  const [coin, setCoin] = useState("");
  const [formValue, setFormValue] = useState("");
  const [coinInput, setCoinInput] = useState("");
  const [installmentsValue, setInstallmentsValue] = useState("");

  const handleChange = (event) => {
    setCoin(event.target.value);
  };

  const handleChangeForm = (event) => {
    setFormValue(event.target.value);
  };

  const handleChangecoinInput = (e) => {
    setCoinInput(currentMoney(e.target.value));
  };

  const handleInstallmentsValue = (e) => {
    setInstallmentsValue(e.target.value);
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
            <SelectComponent
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
              <SelectComponent contents={guarantees} />
              <p className={styles.helpText}>
                É o prazo que o comprador tem para pedir reembolso do seu
                produto. No Brasil, o mínimo é de 7 dias e na União Europeia, 15
                dias.
              </p>
            </div>
            <div className={styles.selectContent}>
              <p className={styles.label}>Forma de pagamento</p>
              <SelectComponent
                contents={formOfPayment}
                value={formValue}
                handleChange={handleChangeForm}
              />
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
          </div>
        </div>
        <div style={formValue === 3 ? {} : { display: "none" }}>
          {/* {console.log(formOfPayment[2].value)} */}
          <hr className={styles.widthStyle} />

          <h1 className={styles.title2}>Plano de parcelamentos</h1>
          <p className={styles.text}>
            Insira o valor à vista, escolha o máximo de parcelas e clique em
            Gerar.
          </p>
          <div className={styles.installments}>
            <div>
              <p className={styles.label}>Valor à vista</p>
              <div className={styles.hotInputGroup}>
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
            </div>
            <div style={{ padding: "0px 10px" }}></div>
            <div>
              <p className={styles.label}>Máximo de parcelas</p>
              <div className={styles.hotInputGroup}>
                <div style={{ width: "114px" }}>
                  <SelectComponent
                    label="parcelas"
                    contents={installmentsContent}
                    value={installmentsValue}
                    handleChange={handleInstallmentsValue}
                  />
                </div>

                <div style={{ padding: "0px 10px" }}></div>
                <ButtonComponent variantContent="contained" content="Gerar" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <ButtonComponent variantContent="outlined" content="Voltar" />
          <ButtonComponent
            variantContent="contained"
            content="Salvar e continuar"
          />
        </div>
      </div>
    </>
  );
}
