import React, { useState } from "react";
import Head from "next/head";
import { AiFillFire } from "react-icons/ai";
import styles from "../../styles/SignUp.module.css";
import ButtonComponent from "../../component/ButtonComponent";
import Input from "../../component/Input";
import InputPassword from "../../component/InputPassword";
import SideBar from "../../component/SideBar";
import CardProduct from "../../component/CardProduct";
import SelectComponent from "../../component/SelectComponent";
import Link from "next/link";

function initialState() {
  return { user: "", password: "" };
}

export default function SignUp() {
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
        <title>Sign Up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.background}>
        <form action="">
          <div className={styles.container}>
            <div className={styles.titleContainer}>
              {/*  <img className={styles.image} src="http://www.pmovil.com/en/images/logo.jpg"/> */}
              <AiFillFire color="#F04E23" />
              <h1 className={styles.title}>HotPmovil</h1>
            </div>

            <input type={"hidden"} name="status" value={true} />
            <Input
              type={"email"}
              onChange={onChange}
              name="user"
              label="Seu email"
              value={values.user}
              required
              
            />
            <Input
              type={"text"}
              onChange={onChange}
              name="user"
              label="Seu nome"
              value={values.user}
              required
            />
            <InputPassword
              label={"Sua senha"}
              fill={"#fff"}
              name="password"
              onChange={onChange}
              value={values.password}
              required
            />
            <InputPassword
              label={"Confirme sua senha"}
              fill={"#fff"}
              name="password"
              onChange={onChange}
              value={values.password}
              required
            />
            <SelectComponent />
            <Link href="/Login">
              <a className={styles.link}>já tenho login</a>
            </Link>
            <ButtonComponent
              type="submit"
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
