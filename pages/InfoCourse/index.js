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
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import SelectComponent from "../../component/SelectComponent";
import Label from "../../component/Label";
import ButtonComponent from "../../component/ButtonComponent";

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
          <p className={styles.label}>Nome do produto</p>
          <Input
            name="user"
            placeholder="Coloque um nome que chame a atenção de seus compradores"
            helperText="Este é o nome que vai ser exibido aos compradores."
          />
          <p className={styles.label}>Descrição</p>
          <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
            <TextField
              id="outlined-multiline-static"
              placeholder="Fale do que se trata seu produto e o que ele oferece, de forma clara e breve."
              helperText="Esta é a descrição do seu produto para seus compradores."
              multiline
              rows={5}
            />
          </FormControl>
          <div className={styles.selectContainer}>
            <div className={styles.selectContent}>
              <p className={styles.label}>Idioma do produto</p>
              <SelectComponent text="Em que língua será seu produto?" />
              <p className={styles.helpText}>Exibido no momento da compra.</p>
            </div>
            <div className={styles.selectContent}>
              <p className={styles.label}>Mercado de atuação principal</p>
              <SelectComponent text="Em que país você deseja vender?" />
              <p className={styles.helpText}>
                Você também poderá vender para outros países.
              </p>
            </div>
          </div>
          <p className={styles.label}>Categoria do produto</p>
          <p className={styles.subTitle}>
            É através dela que seus compradores encontrarão seu produto mais
            facilmente.
          </p>
          <div className={styles.labelContainer}>
            <Label name="Saúde e Esportes" updateList={() => {}} />
            <Label name="Finanças e Investimentos" updateList={() => {}} />
            <Label name="Relacionamentos" updateList={() => {}} />
            <Label name="Negócios e Carreira" updateList={() => {}} />
            <Label name="Espiritualidade" updateList={() => {}} />
            <Label name="Sexualidade" updateList={() => {}} />
            <Label name="Entretenimento" updateList={() => {}} />
            <Label name="Culinária e Gastronomia" updateList={() => {}} />
            <Label name="Idiomas" updateList={() => {}} />
            <Label name="Direito" updateList={() => {}} />
            <Label name="Apps & Software" updateList={() => {}} />
            <Label name="Literatura" updateList={() => {}} />
            <Label name="Casa e Construção" updateList={() => {}} />
            <Label name="Desenvolvimento Pessoal" updateList={() => {}} />
            <Label name="Moda e Beleza" updateList={() => {}} />
            <Label name="Animais e Plantas" updateList={() => {}} />
            <Label name="Educacional" updateList={() => {}} />
            <Label name="Hobbies" updateList={() => {}} />
            <Label name="Design" updateList={() => {}} />
            <Label name="Internet" updateList={() => {}} />
            <Label name="Ecologia e Meio Ambiente" updateList={() => {}} />
            <Label name="Música e Artes" updateList={() => {}} />
            <Label name="Tecnologia da Informação" updateList={() => {}} />
            <Label name="Outros" updateList={() => {}} />
            <Label name="Empreendedorismo Digital" updateList={() => {}} />
          </div>
          <div className={styles.buttonContainer}>
            <ButtonComponent variantContent="outlined" content="Cancelar" />
            <ButtonComponent variantContent="contained" content="Continuar" />
          </div>
        </div>
      </div>
    </>
  );
}
