import React, { useState } from "react";
import { AiFillFire } from "react-icons/ai";
import styles from "../../styles/Login.module.css";
import Input from "../../component/Input";
import InputPassword from "../../component/InputPassword";
import ButtonComponent from "../../component/ButtonComponent";
import Head from "next/head";
import Link from "next/link";

function initialState() {
  return { user: "", password: "" };
}

function Login({}) {
  const [values, setValues] = useState(initialState);

  function onChange(event) {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            {/*  <img className={styles.image} src="http://www.pmovil.com/en/images/logo.jpg"/> */}
            <AiFillFire color="#F04E23" />
            <h1 className={styles.title}>HotPmovil</h1>
          </div>
          <Input
            type={"email"}
            onChange={onChange}
            name="name"
            label="Seu usuário"
            value={values.user}
          />
          <InputPassword
            label={"Sua senha"}
            fill={"#fff"}
            name="password"
            onChange={onChange}
            value={values.password}
          />
          <Link href="/Forgot">
            <a className={styles.link}>Esqueci minha senha</a>
          </Link>
          <ButtonComponent
            variantContent="contained"
            colorContent="success"
            content="Entrar"
          />
        </div>
      </div>
    </>
  );
}

export default Login;
