import React, { useState } from "react";
import Head from "next/head";
import { AiFillFire } from "react-icons/ai";
import styles from "../../styles/SignUp.module.css";
import ButtonComponent from "../../component/ButtonComponent";
import Input from "../../component/Input";
import InputPassword from "../../component/InputPassword";
import SelectComponent from "../../component/SelectComponent";
import Link from "next/link";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function onChangeEmail(event) {
    setEmail(event.target);
  }

  function onChangeUser(event) {
    setUser(event.target);
  }

  function onChangePassword(event) {
    setPassword(event.target);
  }

  function onChangePasswordConfirmation(event) {
    setPasswordConfirmation(event.target);
  }
  return (
    <>
      <Head>
        <title>Sign Up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.background}>
        <form action="">
          <div className={styles.container}>
            <div className={styles.titleContainer}>
              {/* <img className={styles.image} src="http://www.pmovil.com/en/images/logo.jpg"/> */}
              <AiFillFire color="#F04E23" />
              <h1 className={styles.title}>HotPmovil</h1>
            </div>

            <input type={"hidden"} name="status" value={true} />
            <Input
              type={"email"}
              onChange={onChangeEmail}
              name={"email"}
              label="Seu email"
              value={email}
              required
            />
            <Input
              type={"text"}
              onChange={onChangeUser}
              name="user"
              label="Seu nome"
              value={user}
              required
            />
            <InputPassword
              label={"Sua senha"}
              name="password"
              onChange={onChangePassword}
              value={password}
              required
            />
            <InputPassword
              label={"Confirme sua senha"}
              name="password"
              onChange={onChangePasswordConfirmation}
              value={passwordConfirmation}
              required
            />
            <SelectComponent />
            <Link href="/Login">
              <a className={styles.link}>já tenho login</a>
            </Link>
            <ButtonComponent
              type={"submit"}
              variantContent="contained"
              colorContent="success"
              content="Criar"
            />
          </div>
        </form>
      </div>
    </>
  );
}
